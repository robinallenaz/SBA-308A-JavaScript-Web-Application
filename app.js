import { fetchMovies, submitReview } from './api.js';
import { displayMovies, showMovieDetails } from './ui.js';

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const reviewForm = document.getElementById('review-form');
const movieList = document.getElementById('movie-list');
let selectedMovieId = null;

// Event listener for the search button
searchButton.addEventListener('click', async () => {
    const query = searchInput.value;
    if (query) {
        try {
            const movies = await fetchMovies(query);
            displayMovies(movies);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    }
});

// Event listener for movie selection
movieList.addEventListener('click', (event) => {
    const movieItem = event.target;
    if (movieItem) {
        const movieId = movieItem.dataset.id;
        selectedMovieId = movieId;
        const movie = movies.find(m => m.id === movieId); // Find the selected movie
        showMovieDetails(movie);
    }
});

// Event listener for the review form submission
reviewForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const reviewInput = document.getElementById('review-input').value;
    if (selectedMovieId && reviewInput) {
        try {
            await submitReview(selectedMovieId, reviewInput);
            alert('Review submitted successfully!');
            reviewForm.reset(); // Clear the form
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    }
});
