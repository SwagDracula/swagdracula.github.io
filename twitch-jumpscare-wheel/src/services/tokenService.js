export const getTokenBalance = async (userId) => {
    // Fetch the user's token balance from the server
    const response = await fetch(`/api/tokens/${userId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch token balance');
    }
    const data = await response.json();
    return data.balance;
};

export const earnTokens = async (userId, amount) => {
    // Add tokens to the user's balance
    const response = await fetch(`/api/tokens/${userId}/earn`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
    });
    if (!response.ok) {
        throw new Error('Failed to earn tokens');
    }
    return await response.json();
};

export const spendTokens = async (userId, amount) => {
    // Deduct tokens from the user's balance
    const response = await fetch(`/api/tokens/${userId}/spend`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
    });
    if (!response.ok) {
        throw new Error('Failed to spend tokens');
    }
    return await response.json();
};