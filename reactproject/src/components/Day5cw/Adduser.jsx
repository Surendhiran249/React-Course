import React, { useState } from "react";

function AddUser() {
  const [users, setUsers] = useState([
    { id: 1, name: "Sheema" },
    { id: 2, name: "Swathi" }
  ]);
  const [newUserName, setNewUserName] = useState("");

  const addUser = () => {
    if (newUserName.trim() === "") return; 

    const newUser = {
      id: users.length + 1, 
      name: newUserName
    };

    setUsers([...users, newUser]);
    setNewUserName(""); 
  };

  return (
    <>
      <input
        type="text"
        value={newUserName}
        onChange={(e) => setNewUserName(e.target.value)}
        placeholder="Enter user name"
      />
      <button onClick={addUser}>Add User</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>id: {user.id}</p>
            <p>name: {user.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default AddUser;
