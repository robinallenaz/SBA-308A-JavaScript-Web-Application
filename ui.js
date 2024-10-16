export const displayMovies = (movies) => {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';
    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.innerText = movie.title;
        movieList.appendChild(movieItem);
    });
};

export const showMovieDetails = (movie) => {
    const detailsSection = document.getElementById('movie-details');
    detailsSection.innerHTML = `
        <h2>${movie.title}</h2>
        <p>${movie.synopsis}</p>
        <p>Release Date: ${movie.release_date}</p>
    `;
};
