const API_KEY = 'lIaYq902CyoWZJU1bULsXn1h5xro7kXXZSBWzDjltd';
const BASE_URL = 'https://jsonsilo.com/api/movies';

export const fetchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}?search=${query}&api_key=${API_KEY}`);
    if (!response.ok) throw new Error('Failed to fetch movies');
    return await response.json();
};

export const submitReview = async (movieId, review) => {
    const response = await fetch(`${BASE_URL}/${movieId}/reviews`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({ review })
    });
    if (!response.ok) throw new Error('Failed to submit review');
    return await response.json();
};
