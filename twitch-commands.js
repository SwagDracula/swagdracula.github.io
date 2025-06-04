/**
 * Swag Dracula's Twitch Bot - Bingo Command Handler
 * 
 * This file contains the code that would be implemented in your Twitch bot
 * to handle the !bingo command and generate personalized bingo card links.
 * 
 * Usage:
 * 1. Host your bingo.html file on a public website (e.g., GitHub Pages)
 * 2. Update the BASE_URL constant below with your website URL
 * 3. Integrate this command handler with your Twitch bot
 */

// Configuration
const BASE_URL = 'https://yourdomain.com/bingo.html';  // Replace with your actual domain
const DEFAULT_GAME = 'default';

// Supported games mapping
const GAME_ALIASES = {
    're': 'resident-evil',
    'resident': 'resident-evil',
    'residentevil': 'resident-evil',
    'sh': 'silent-hill',
    'silenthill': 'silent-hill',
    'outlast': 'outlast',
    'ol': 'outlast',
    'ds': 'dont-scream',
    'dontscream': 'dont-scream',
    'repo': 'repo'
};

/**
 * Handles the !bingo command
 * @param {string} channel - The Twitch channel name
 * @param {string} username - The user who issued the command
 * @param {string} args - Any arguments provided after the command
 */
function handleBingoCommand(channel, username, args) {
    // Get the current game being played, either from args or from your storage/API
    let currentGame = getCurrentGame(args);
    
    // Generate the bingo card URL with the user's name and the current game
    const bingoUrl = generateBingoUrl(username, currentGame);
    
    // Twitch bot response to the chat - this will depend on your bot framework
    return `@${username} Here's your personal bingo card for ${formatGameName(currentGame)}: ${bingoUrl}`;
}

/**
 * Determines which game to use for the bingo card
 * @param {string} args - Any arguments provided after the command
 * @returns {string} The game type to use
 */
function getCurrentGame(args) {
    if (!args || args.trim() === '') {
        // If no game specified, you could potentially get the currently streamed game
        // This would require integration with Twitch API
        return DEFAULT_GAME;
    }

    // Check for game aliases
    const gameName = args.trim().toLowerCase().replace(/\s+/g, '');
    return GAME_ALIASES[gameName] || DEFAULT_GAME;
}

/**
 * Generates a bingo card URL with username and game parameters
 * @param {string} username - The user's Twitch name
 * @param {string} game - The game type for the bingo card
 * @returns {string} URL to the personalized bingo card
 */
function generateBingoUrl(username, game) {
    return `${BASE_URL}?username=${encodeURIComponent(username)}&game=${encodeURIComponent(game)}`;
}

/**
 * Formats a game name for display
 * @param {string} gameSlug - The game identifier (e.g., "resident-evil")
 * @returns {string} Formatted game name (e.g., "Resident Evil")
 */
function formatGameName(gameSlug) {
    if (gameSlug === 'default') return "Horror Game";
    
    return gameSlug.split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Example of how this would be used in a Twitch bot
/* 
client.on('message', (channel, userstate, message, self) => {
    // Ignore messages from the bot
    if (self) return;
    
    // Check if message is a command
    if (message.startsWith('!bingo')) {
        const args = message.slice(6).trim(); // Remove "!bingo" and trim
        const response = handleBingoCommand(channel, userstate.username, args);
        client.say(channel, response);
    }
});
*/

// For testing in a browser
if (typeof module !== 'undefined') {
    module.exports = {
        handleBingoCommand,
        generateBingoUrl,
        getCurrentGame
    };
}
