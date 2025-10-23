import React, { useState, useCallback, useMemo } from "react";

interface CounterProps {
  initialCount?: number;
  step?: number;
  onCountChange?: (count: number) => void;
  disabled?: boolean;
}

interface CounterState {
  count: number;
  isEven: boolean;
}

const Counter: React.FC<CounterProps> = ({ initialCount = 0, step = 1, onCountChange, disabled = false }) => {
  const [state, setState] = useState<CounterState>({ count: initialCount, isEven: initialCount % 2 === 0 });

  const increment = useCallback(() => {
    if (disabled) return;
    setState(prev => {
      const newCount = prev.count + step;
      onCountChange?.(newCount);
      return { count: newCount, isEven: newCount % 2 === 0 };
    });
  }, [step, onCountChange, disabled]);

  const decrement = useCallback(() => {
    if (disabled) return;
    setState(prev => {
      const newCount = prev.count - step;
      onCountChange?.(state.count - step);
      return { count: prev.count - step, isEven: (prev.count - step) % 2 === 0 };
    });
  }, [step, disabled, state.count]);

  const reset = useCallback(() => {
    setState({ count: initialCount, isEven: initialCount % 2 === 0 });
    onCountChange?.(initialCount);
  }, [initialCount, onCountChange]);

  const displayInfo = useMemo(() => (state.isEven ? "Genap" : "Ganjil"), [state.isEven]);

  return (
    <div>
      <h4>Counter: {state.count}</h4>
      <p>{displayInfo}</p>
      <div>
        <button onClick={increment} className="primary">+{step}</button>{" "}
        <button onClick={decrement}>-{step}</button>{" "}
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
