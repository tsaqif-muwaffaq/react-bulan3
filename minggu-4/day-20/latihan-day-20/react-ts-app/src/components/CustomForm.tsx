import React, { useState } from "react";

interface FormData {
  username: string;
  password: string;
  age?: number;
}

const CustomForm: React.FC = () => {
  const [form, setForm] = useState<FormData>({ username: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: name === 'age' ? Number(value) : value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Username: ${form.username}\nPassword: ${form.password}\nAge: ${form.age ?? '-'}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{marginBottom:8}}>
        <input name="username" value={form.username} onChange={handleChange} placeholder="Username" />
      </div>
      <div style={{marginBottom:8}}>
        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" />
      </div>
      <div style={{marginBottom:8}}>
        <input name="age" type="number" value={form.age ?? ''} onChange={handleChange} placeholder="Age (optional)" />
      </div>
      <button type="submit" className="primary">Kirim</button>
    </form>
  );
};

export default CustomForm;
