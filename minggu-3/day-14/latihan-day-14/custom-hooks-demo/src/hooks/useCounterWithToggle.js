import useToggle from './useToggle';
import { useCounter } from './useCounter';

/**
 * useCounterWithToggle — contoh Hooks Composition
 * Menggabungkan logika counter & toggle dalam satu hook
 */
export default function useCounterWithToggle() {
  const counter = useCounter();
  const [isVisible, toggleVisible] = useToggle(true);

  return { ...counter, isVisible, toggleVisible };
}
