import React, { useState } from 'react';

function DashboardSettings() {
  const [passwords, setPasswords] = useState({
    oldPassword: '',
    newPassword: ''
  });
  const [notifications, setNotifications] = useState({
    email: true,
    app: false
  });

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords(prev => ({ ...prev, [name]: value }));
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotifications(prev => ({ ...prev, [name]: checked }));
  };

  const handleSavePassword = (e) => {
    e.preventDefault();
    if (!passwords.oldPassword || !passwords.newPassword) {
      alert("Harap isi semua kolom password.");
      return;
    }
    // Logika untuk menyimpan password baru
    alert("Password berhasil diubah!");
    setPasswords({ oldPassword: '', newPassword: '' });
  };

  return (
    <div>
      <h3>Pengaturan Akun</h3>
      <form className="settings-section" onSubmit={handleSavePassword}>
        <h4>Ubah Password</h4>
        <div className="form-group">
          <label className="form-label">Password Lama</label>
          <input type="password" name="oldPassword" className="form-input" placeholder="Masukkan password lama" value={passwords.oldPassword} onChange={handlePasswordChange} />
        </div>
        <div className="form-group">
          <label className="form-label">Password Baru</label>
          <input type="password" name="newPassword" className="form-input" placeholder="Masukkan password baru" value={passwords.newPassword} onChange={handlePasswordChange} />
        </div>
        <button type="submit" className="form-button primary">Simpan Password</button>
      </form>

      <div className="settings-section">
        <h4>Notifikasi</h4>
        <div className="checkbox-group">
          <input type="checkbox" id="email-notif" name="email" checked={notifications.email} onChange={handleNotificationChange} />
          <label htmlFor="email-notif">Kirim notifikasi promo ke email saya</label>
        </div>
        <div className="checkbox-group">
          <input type="checkbox" id="app-notif" name="app" checked={notifications.app} onChange={handleNotificationChange} />
          <label htmlFor="app-notif">Tampilkan notifikasi di aplikasi</label>
        </div>
        {/* Tombol ini hanya untuk demonstrasi, karena perubahan checkbox biasanya disimpan otomatis */}
        <button 
          className="form-button" 
          style={{marginTop: '10px'}} 
          onClick={() => alert('Pengaturan notifikasi disimpan!')}>
            Simpan Pengaturan Notifikasi
        </button>
      </div>
    </div>
  );
}

export default DashboardSettings;
