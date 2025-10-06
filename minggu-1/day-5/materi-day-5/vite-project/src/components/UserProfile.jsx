import react, { useState } from 'react';

function UserProfile() {
    const [name, setName] = useState('tsaqif');
    const [age, setAge] = useState(19);
    const [isEditing, setIsEditing] = useState(false);

return (
    <div>
        <h2>profile pengguna</h2>
        {isEditing ? (
<div>
    <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
<button onClick={() => setIsEditing(false)}>Simpan</button>
</div>
) : (
<div>
    <p>Nama: {name}</p>
    <p>umur: {age}</p>
    <button onClick={() => setIsEditing(true)}>Edit</button>
</div>
)}
</div>
);
}

export default UserProfile;