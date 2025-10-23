import React from "react";
import { Role } from "../types/user";

export type Status = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';

interface UserCardProps {
  name: string;
  age: number;
  email?: string;
  status: Status | string;
  hobbies: string[];
}

const UserCard: React.FC<UserCardProps> = ({ name, age, email, status, hobbies }) => {
  return (
    <div className="card">
      <h3>{name} ({age} tahun)</h3>
      <p>Email: {email ?? "Tidak tersedia"}</p>
      <p>Status: {status}</p>
      <p>Hobi: {hobbies.join(", ")}</p>
    </div>
  );
};

export default UserCard;
