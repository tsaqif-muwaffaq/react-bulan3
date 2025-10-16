import React from 'react';
import useForm from '../hooks/useForm';

export default function FormExample() {
  const { values, handleChange, resetForm } = useForm({
    nama: '',
    email: ''
  });

  return (
    <form>
      <h3>Form Registrasi</h3>
      <input
        type="text"
        name="nama"
        placeholder="Masukkan nama"
        value={values.nama}
        onChange={handleChange}
      />
      <br />
      <input
        type="email"
        name="email"
        placeholder="Masukkan email"
        value={values.email}
        onChange={handleChange}
      />
      <br />
      <button type="button" onClick={resetForm}>Reset</button>

      <p>Nama: {values.nama}</p>
      <p>Email: {values.email}</p>
    </form>
  );
}
