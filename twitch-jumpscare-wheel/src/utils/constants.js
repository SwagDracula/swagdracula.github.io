export const API_ENDPOINTS = {
    TWITCH: {
        USER: 'https://api.twitch.tv/helix/users',
        SUBSCRIPTIONS: 'https://api.twitch.tv/helix/subscriptions',
    },
    JUMPSCARES: {
        BASE_URL: '/api/jumpscares',
    },
    TOKENS: {
        BASE_URL: '/api/tokens',
    },
    WHEEL: {
        SPIN: '/api/wheel/spin',
    },
};

export const TOKEN_REWARD_AMOUNT = 10; // Tokens earned per subscription gift
export const JUMPSCARE_TRIGGER_THRESHOLD = 5; // Number of tokens required to trigger a jumpscare
export const WHEEL_SEGMENTS = [
    { label: 'Jump Scare 1', sound: 'jumpscare1.mp3' },
    { label: 'Jump Scare 2', sound: 'jumpscare2.mp3' },
    { label: 'Jump Scare 3', sound: 'jumpscare3.mp3' },
    { label: 'Jump Scare 4', sound: 'jumpscare4.mp3' },
    { label: 'Jump Scare 5', sound: 'jumpscare5.mp3' },
];