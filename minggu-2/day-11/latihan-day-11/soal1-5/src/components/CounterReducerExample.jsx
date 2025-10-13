import React, { useReducer } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "tambah":
      return { count: state.count + 1 };
    case "kurang":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

function CounterReducerExample() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <h2>Counter dengan useReducer</h2>
      <p>Nilai: {state.count}</p>
      <button onClick={() => dispatch({ type: "tambah" })}>Tambah</button>
      <button onClick={() => dispatch({ type: "kurang" })}>Kurang</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterReducerExample;
