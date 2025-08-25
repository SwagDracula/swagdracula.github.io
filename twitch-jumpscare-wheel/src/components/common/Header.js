import React from 'react';
import './common.css';

const Header = () => {
    return (
        <header className="header">
            <h1 className="header-title">Twitch Jumpscare Wheel</h1>
            <nav className="header-nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/wheel">Spin the Wheel</a></li>
                    <li><a href="/profile">Profile</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;