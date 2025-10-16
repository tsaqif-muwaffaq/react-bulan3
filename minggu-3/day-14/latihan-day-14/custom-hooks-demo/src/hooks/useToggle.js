import { useState, useCallback } from 'react';

/**
 * useToggle — Mengelola state boolean (on/off, show/hide, dsb)
 * @param {boolean} initialValue - Nilai awal (default: false)
 * @returns [value, toggle] - value: boolean, toggle: fungsi untuk membalik nilai
 */
export default function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  return [value, toggle];
}
