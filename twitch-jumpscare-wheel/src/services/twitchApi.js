export const fetchUserData = async (username) => {
    const response = await fetch(`https://api.twitch.tv/helix/users?login=${username}`, {
        headers: {
            'Client-ID': process.env.TWITCH_CLIENT_ID,
            'Authorization': `Bearer ${process.env.TWITCH_ACCESS_TOKEN}`
        }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch user data');
    }
    const data = await response.json();
    return data.data[0];
};

export const fetchSubscriptions = async (userId) => {
    const response = await fetch(`https://api.twitch.tv/helix/subscriptions?broadcaster_id=${userId}`, {
        headers: {
            'Client-ID': process.env.TWITCH_CLIENT_ID,
            'Authorization': `Bearer ${process.env.TWITCH_ACCESS_TOKEN}`
        }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch subscriptions');
    }
    const data = await response.json();
    return data.data;
};