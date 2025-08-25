export const jumpscareSounds = [
    'audio/jumpscare-sounds/jumpscare1.mp3',
    'audio/jumpscare-sounds/jumpscare2.mp3',
    'audio/jumpscare-sounds/jumpscare3.mp3',
    'audio/jumpscare-sounds/jumpscare4.mp3',
    'audio/jumpscare-sounds/jumpscare5.mp3',
];

export function playJumpscare(soundIndex) {
    const audio = new Audio(jumpscareSounds[soundIndex]);
    audio.play();
}

export function getRandomJumpscare() {
    const randomIndex = Math.floor(Math.random() * jumpscareSounds.length);
    return randomIndex;
}