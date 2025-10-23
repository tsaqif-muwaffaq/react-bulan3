import React from "react";
import UserProfile from "../components/UserProfile";

const Profile: React.FC = () => {
  return (
    <div>
      <div className="card"><h2>Profile Page</h2></div>
      <UserProfile />
    </div>
  );
};

export default Profile;
