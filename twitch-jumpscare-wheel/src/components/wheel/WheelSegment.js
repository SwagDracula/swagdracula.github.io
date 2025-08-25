import React from 'react';
import './wheel.css';

const WheelSegment = ({ label, color }) => {
    return (
        <div className="wheel-segment" style={{ backgroundColor: color }}>
            {label}
        </div>
    );
};

export default WheelSegment;