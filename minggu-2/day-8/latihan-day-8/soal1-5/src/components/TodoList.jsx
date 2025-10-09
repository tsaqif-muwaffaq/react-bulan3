import React from 'react';

function TodoList({ todos }) {
  return (
    <div>
      <h2>Daftar Tugas</h2>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      ) : (
        <p>Tidak ada tugas saat ini </p>
      )}
    </div>
  );
}

export default TodoList;
