// 4
import React from "react";

// Komponen kecil
function Avatar({ avatarUrl, name }) {
  return <img src={avatarUrl} alt={name} style={{ width: 50, borderRadius: "50%" }} />;
}

function UserInfo({ author }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Avatar avatarUrl={author.avatarUrl} name={author.name} />
      <strong>{author.name}</strong>
    </div>
  );
}

function CommentText({ text }) {
  return <p style={{ marginTop: "8px" }}>{text}</p>;
}

function CommentDate({ date }) {
  return (
    <small style={{ color: "gray" }}>
      {date.toLocaleDateString()} {date.toLocaleTimeString()}
    </small>
  );
}

// Komponen utama
function Comment({ author, text, date }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px",
        marginBottom: "12px",
        width: "300px",
      }}
    >
      <UserInfo author={author} />
      <CommentText text={text} />
      <CommentDate date={date} />
    </div>
  );
}

export default Comment;
