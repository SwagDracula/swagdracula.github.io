class JumpscareManager {
    constructor() {
        this.jumpscares = [];
        this.loadJumpscares();
    }

    loadJumpscares() {
        // Load jumpscare data from a predefined source or API
        this.jumpscares = [
            { id: 1, sound: 'jumpscare1.mp3', image: 'jumpscare1.png' },
            { id: 2, sound: 'jumpscare2.mp3', image: 'jumpscare2.png' },
            { id: 3, sound: 'jumpscare3.mp3', image: 'jumpscare3.png' },
            // Add more jumpscares as needed
        ];
    }

    triggerJumpscare() {
        const randomIndex = Math.floor(Math.random() * this.jumpscares.length);
        const jumpscare = this.jumpscares[randomIndex];
        this.playJumpscare(jumpscare);
    }

    playJumpscare(jumpscare) {
        const audio = new Audio(`/assets/audio/jumpscare-sounds/${jumpscare.sound}`);
        audio.play();

        // Display jumpscare image overlay
        const overlay = document.createElement('div');
        overlay.className = 'jumpscare-overlay';
        overlay.style.backgroundImage = `url('/assets/images/jumpscares/${jumpscare.image}')`;
        document.body.appendChild(overlay);

        // Remove overlay after a short duration
        setTimeout(() => {
            document.body.removeChild(overlay);
        }, 3000); // Adjust duration as needed
    }
}

export default JumpscareManager;