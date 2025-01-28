import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = ({ role }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('role');
        navigate('/Landing');
    };

    return (
        <div className="flex flex-col items-center justify-center text-white bg-gray-800 h-screen gap-5">
            <h1 className="text-3xl font-bold mb-4">Welcome to the Library</h1>

            {role === 'admin' ? (
                <div className="text-center">
                    <h2 className="text-xl">Admin Dashboard</h2>
                    <p>Manage library books and users.</p>
                    <button
                        className="bg-blue-500 px-4 py-2 text-white rounded mt-4"
                        onClick={() => navigate('/dashboard')}
                    >
                        Go to Dashboard
                    </button>
                </div>
            ) : (
                <div className="text-center">
                    <h2 className="text-xl">User Dashboard</h2>
                    <p>Browse books and manage your issued books.</p>
                    <button
                        className="bg-blue-500 px-4 py-2 text-white rounded mt-4"
                        onClick={() => navigate('/dashboard')}
                    >
                        Go to Dashboard
                    </button>
                </div>
            )}

            <button
                className="bg-red-500 px-4 py-2 text-white rounded mt-4"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
};

export default Landing;
