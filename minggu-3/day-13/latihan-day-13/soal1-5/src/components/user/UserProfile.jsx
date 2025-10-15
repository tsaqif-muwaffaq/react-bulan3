import React from "react";
import { useUser } from "../../contexts/UserContext";

const UserProfile = () => {
  const { user, login, logout } = useUser();

  return (
    <div>
      <h2>👤 User Profile</h2>
      <p>Nama: {user.name}</p>
      <p>Status: {user.isLoggedIn ? "Online" : "Offline"}</p>
      {user.isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => login("Tsaqif")}>Login</button>
      )}
    </div>
  );
};

export default UserProfile;
