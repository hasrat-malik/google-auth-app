import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


const Home = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className='container'>
            <div className='card'>
                <h1>Welcome {user?.name}!</h1>
                <img src={user?.picture} alt="Profile" className="avatar" />
                <p>Email: {user?.email}</p>
                <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>
        </div>
    );
};

export default Home;
