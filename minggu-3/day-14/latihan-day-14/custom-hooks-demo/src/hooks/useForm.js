import { useState } from 'react';

/**
 * useForm — mengelola input form dan perubahan data
 * @param {object} initialValues - nilai awal form
 */
export default function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => setValues(initialValues);

  return { values, handleChange, resetForm };
}
