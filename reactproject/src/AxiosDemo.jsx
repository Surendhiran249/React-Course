import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const AxiosFull = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [userId, setUserId] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        Axios.get('https://jsonplaceholder.typicode.com/users&#39;)
            .then(res => setUsers(res.data))
            .catch(err => console.error(err));
    };

    const addNewUser = () => {
        const newUser = { name, email };
        Axios.post('https://jsonplaceholder.typicode.com/users&#39;, newUser)
            .then(res => setUsers([...users, { ...newUser, id: users.length + 1 }]))
            .catch(err => console.error(err));
        setName(''); // Clear input
        setEmail(''); // Clear input
    };

    const updateUser = () => {
        if (!userId) return;
        Axios.put(`https://jsonplaceholder.typicode.com/users/${userId}`, { name, email })
            .then(() => {
                setUsers(users.map(user => (user.id === parseInt(userId) ? { ...user, name, email } : user)));
            })
            .catch(err => console.error(err));
        setName(''); // Clear input
        setEmail(''); // Clear input
        setUserId(''); // Clear userId
    };

    const deleteUser = (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(() => {
                    setUsers(users.filter(user => user.id !== id));
                })
                .catch(err => console.error(err));
        }
    };

    return (
        <div>
            <h1>User Management</h1>
            <h2>Add New User</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <button onClick={addNewUser}>Add New</button>
           
            <h2>User List</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => {
                                    setUserId(user.id);
                                    setName(user.name);
                                    setEmail(user.email);
                                }}>Update</button>
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Update User</h2>
            <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="User ID to update"
            />
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="New Name"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="New Email"
            />
            <button onClick={updateUser}>Update User</button>
        </div>
    );
};

export default AxiosFull;