import React from 'react';
import './user.css';

const TokenDisplay = ({ tokens }) => {
    return (
        <div className="token-display">
            <h2>Your Tokens</h2>
            <p>{tokens}</p>
        </div>
    );
};

export default TokenDisplay;