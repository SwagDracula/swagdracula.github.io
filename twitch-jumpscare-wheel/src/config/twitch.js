const TWITCH_CLIENT_ID = 'your_client_id_here';
const TWITCH_CLIENT_SECRET = 'your_client_secret_here';
const TWITCH_REDIRECT_URI = 'http://localhost:3000/auth/callback'; // Update with your redirect URI
const TWITCH_API_BASE_URL = 'https://api.twitch.tv/helix';

export const twitchConfig = {
    clientId: TWITCH_CLIENT_ID,
    clientSecret: TWITCH_CLIENT_SECRET,
    redirectUri: TWITCH_REDIRECT_URI,
    apiBaseUrl: TWITCH_API_BASE_URL,
};