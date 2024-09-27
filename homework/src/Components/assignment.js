import React, { useState } from 'react';
//import axios from 'axios';
import './assignment.css'; 

const UserList = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    ]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const addUser = () => {
        if (!name || !email) {
            alert('Please fill in both fields');
            return;
        }

        const newUser = {
            id: users.length + 1,
            name,
            email,
        };

        

        setUsers([...users, newUser]);
        setName('');
        setEmail('');
    };

    return (
        <div className="user-list-container">
            <h2>User List</h2>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={addUser}>Add New</button>
            </div>
        </div>
    );
};

export default UserList;
