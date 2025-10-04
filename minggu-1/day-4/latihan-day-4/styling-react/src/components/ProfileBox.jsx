// 1
import React from 'react';


export default function ProfileBox() {
const containerStyle = {
border: '2px solid #4CAF50',
padding: '20px',
borderRadius: '8px',
width: '320px',
margin: '20px auto',
textAlign: 'center',
backgroundColor: '#fefefe',
boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
};


const nameStyle = {
color: '#2c3e50',
fontSize: '22px',
marginBottom: '8px'
};


const bioStyle = {
color: '#606f7b',
fontSize: '14px',
lineHeight: '1.5'
};


return (
<div style={containerStyle}>
<h2 style={nameStyle}>Tsaqif Muwaffaq</h2>
<p style={bioStyle}>pelajar programmer di rumah IT</p>
</div>
);
}