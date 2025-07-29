import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from '../utils/axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSuccess = async (credentialResponse: any) => {
        try {
            const res = await axios.post('/auth/google', {
                token: credentialResponse.credential,
            });
            login(res.data.body);
            navigate('/home');
        } catch (err) {
            console.error('Login failed', err);
        }
    };

    return (
        <div className='container'>
            <div className='card'>
                <h2>Login with Google</h2>
                <GoogleLogin onSuccess={handleSuccess} onError={() => console.log('Error')} />
            </div>
        </div>
    );
};

export default Login;
