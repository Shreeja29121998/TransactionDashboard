import React from 'react';
import axios from 'axios';

const Logout = ({ setLoggedIn }) => {
    const handleLogout = async () => {
        try {
            await axios.post('/api/logout');
            setLoggedIn(false);
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <div>
            <h2>Welcome! You are logged in.</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;