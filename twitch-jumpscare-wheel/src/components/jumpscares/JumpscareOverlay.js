import React from 'react';
import './jumpscares.css';

const JumpscareOverlay = ({ isVisible, onClose, jumpscareImage }) => {
    return (
        <div className={`jumpscare-overlay ${isVisible ? 'visible' : ''}`} onClick={onClose}>
            <img src={jumpscareImage} alt="Jumpscare" className="jumpscare-image" />
        </div>
    );
};

export default JumpscareOverlay;