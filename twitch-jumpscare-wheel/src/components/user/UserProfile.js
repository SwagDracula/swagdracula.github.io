import React from 'react';
import './user.css';

const UserProfile = ({ user, tokens, onSpinWheel }) => {
    return (
        <div className="user-profile">
            <h2>User Profile</h2>
            <div className="user-info">
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Tokens:</strong> {tokens}</p>
            </div>
            <button onClick={onSpinWheel} disabled={tokens <= 0}>
                Spin the Wheel
            </button>
        </div>
    );
};

export default UserProfile;