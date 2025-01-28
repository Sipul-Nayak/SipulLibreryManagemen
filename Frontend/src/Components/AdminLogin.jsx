import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LoginPage = ({ setRole, setIsLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const res = await axios.post('http://localhost:5000/users/login', { username, password });
            setRole(res.data.role);
            setIsLoggedIn(true);
        } catch {
            alert('Invalid login');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center text-white bg-gray-800 h-screen gap-5">
            <h1 className="text-2xl font-bold">Library Management System</h1>
            <h1>User Name:<input
                className=" ml-5 border p-2 rounded w-64"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
            /></h1>
            <h1>
              Password : <input
                className="ml-5 border p-2 rounded w-64"
                placeholder="Password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            </h1>
            <div className='flex gap-10'>
            <Link to={'/'}><button
                className="bg-blue-500 px-4 py-2 text-white rounded"
                
            >
                Cancel
            </button></Link>
            <button
                className="bg-blue-500 px-4 py-2 text-white rounded"
                onClick={handleLogin}
            >
                Login
            </button>
            </div>
        </div>
    );
};

export default LoginPage;