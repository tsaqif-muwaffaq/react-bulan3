import React from 'react';

function UserStatus({ isActive }) {
  if (isActive) {
    return <h2>Pengguna sedang AKTIF </h2>;
  } else {
    return <h2>Pengguna sedang TIDAK AKTIF </h2>;
  }
}

export default UserStatus;
