import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Terima kasih, ${formData.firstName}! Data Anda sudah tersimpan.`);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label>Nama Depan:</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />

      <label>Nama Belakang:</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <button type="submit">Kirim</button>

      <p>📬 Data Saat Ini: {JSON.stringify(formData)}</p>
    </form>
  );
}

export default ContactForm;
