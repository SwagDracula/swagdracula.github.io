import React, { Component } from 'react';
import WheelSegment from './WheelSegment';
import './wheel.css';

class SpinWheel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            segments: props.segments,
            spinning: false,
            spinResult: null,
        };
        this.spinWheel = this.spinWheel.bind(this);
    }

    spinWheel() {
        if (this.state.spinning) return;

        this.setState({ spinning: true });

        const spinDuration = 3000; // Duration of the spin in milliseconds
        const randomSegmentIndex = Math.floor(Math.random() * this.state.segments.length);
        const spinAngle = 360 * 5 + randomSegmentIndex * (360 / this.state.segments.length); // 5 full spins + random segment

        this.wheel.style.transition = `transform ${spinDuration}ms cubic-bezier(0.33, 1, 0.68, 1)`;
        this.wheel.style.transform = `rotate(${spinAngle}deg)`;

        setTimeout(() => {
            this.setState({ spinning: false, spinResult: this.state.segments[randomSegmentIndex] });
            this.wheel.style.transition = 'none'; // Reset transition for the next spin
            this.wheel.style.transform = `rotate(${spinAngle % 360}deg)`; // Keep the wheel at the final position
        }, spinDuration);
    }

    render() {
        return (
            <div className="wheel-container">
                <div className="wheel" ref={(ref) => (this.wheel = ref)}>
                    {this.state.segments.map((segment, index) => (
                        <WheelSegment key={index} label={segment.label} />
                    ))}
                </div>
                <button onClick={this.spinWheel} disabled={this.state.spinning}>
                    {this.state.spinning ? 'Spinning...' : 'Spin the Wheel!'}
                </button>
                {this.state.spinResult && (
                    <div className="result">
                        You landed on: {this.state.spinResult.label}
                    </div>
                )}
            </div>
        );
    }
}

export default SpinWheel;