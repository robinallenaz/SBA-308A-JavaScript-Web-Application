import { fetchMovies, submitReview } from './api.js';
import { displayMovies, showMovieDetails } from './ui.js';

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const reviewForm = document.getElementById('review-form');
const movieList = document.getElementById('movie-list');
let selectedMovieId = null;
let movies = []; // Declare movies variable to store fetched movies

// Event listener for the search button
searchButton.addEventListener('click', async () => {
    const query = searchInput.value;
    if (query) {
        try {
            movies = await fetchMovies(query); // Store fetched movies in the variable
            displayMovies(movies);
        } catch (error) {
            console.error('Error fetching movies:', error);
            alert('Failed to fetch movies. Please try again.'); // User feedback
        }
    }
});

// Event listener for movie selection
movieList.addEventListener('click', (event) => {
    const movieItem = event.target.closest('.movie-item'); // Ensure we get the correct item
    if (movieItem) {
        const movieId = movieItem.dataset.id; // Ensure movieItem has data-id
        selectedMovieId = movieId;
        const movie = movies.find(m => m.id === movieId); // Find the selected movie
        if (movie) {
            showMovieDetails(movie);
        } else {
            console.error('Movie not found:', movieId);
        }
    }
});

// Event listener for the review form 
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
            alert('Failed to submit review. Please try again.'); // User feedback
        }
    } else {
        alert('Please select a movie and write a review.'); // User feedback
    }
});
