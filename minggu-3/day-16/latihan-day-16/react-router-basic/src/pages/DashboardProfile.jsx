import React, { useState } from 'react';

function DashboardProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  // State untuk menyimpan data asli dari "server"
  const [originalProfile, setOriginalProfile] = useState({
    name: "Tsaqif Muwaffaq",
    email: "tsaqifmuwaffaq@gmail.com",
    address: "Jl. Merdeka No. 45, Bandung"
  });
  // State untuk menampung perubahan saat diedit
  const [profile, setProfile] = useState(originalProfile);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // Di aplikasi nyata, di sini Anda akan mengirim data ke server.
      setOriginalProfile(profile); // Simpan perubahan ke state "asli"
      setShowSuccess(true);
      // Sembunyikan pesan setelah 3 detik
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setProfile(originalProfile); // Kembalikan data ke state asli
    setIsEditing(false); // Keluar dari mode edit
  };

  return (
    <div>
      <h3>Profil Saya</h3>
      {showSuccess && (
        <div className="success-message">Profil berhasil diperbarui!</div>
      )}

      {isEditing ? (
        // Tampilan Edit Mode (Form)
        <form className="profile-details" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Nama Lengkap</label>
            <input type="text" name="name" className="form-input" value={profile.name} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-input" value={profile.email} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label className="form-label">Alamat</label>
            <textarea name="address" className="form-input" rows="3" value={profile.address} onChange={handleInputChange}></textarea>
          </div>
          <div className="form-actions">
            <button type="submit" className="form-button primary">Simpan Perubahan</button>
            <button type="button" className="form-button secondary" onClick={handleCancel}>Batal</button>
          </div>
        </form>
      ) : (
        // Tampilan View Mode (Daftar)
        <div className="profile-view">
          <div className="profile-field">
            <span className="profile-label">Nama Lengkap</span>
            <span className="profile-value">{originalProfile.name}</span>
          </div>
          <div className="profile-field">
            <span className="profile-label">Email</span>
            <span className="profile-value">{originalProfile.email}</span>
          </div>
          <div className="profile-field">
            <span className="profile-label">Alamat</span>
            <span className="profile-value">{originalProfile.address}</span>
          </div>
          <button onClick={() => setIsEditing(true)} className="form-button primary">Edit Profil</button>
        </div>
      )}
    </div>
  );
}

export default DashboardProfile;
