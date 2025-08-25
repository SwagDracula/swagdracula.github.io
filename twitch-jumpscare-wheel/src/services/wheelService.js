export const spinWheel = (segments) => {
    const totalSegments = segments.length;
    const randomIndex = Math.floor(Math.random() * totalSegments);
    return segments[randomIndex];
};

export const getWheelOutcome = (spinResult, segments) => {
    return segments[spinResult];
};