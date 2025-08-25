import React from 'react';
import './common.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Twitch Jumpscare Wheel. All rights reserved.</p>
            <p>Follow us on <a href="https://twitter.com/your_twitter_handle" target="_blank" rel="noopener noreferrer">Twitter</a> for updates!</p>
        </footer>
    );
};

export default Footer;