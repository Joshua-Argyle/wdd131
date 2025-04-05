function toggleMenu() {
    document.getElementById('nav-links').classList.toggle('show');
  }
const movies = [
    {
        title: "BACK TO THE FUTURE",
        img: "movie_posters/back to the future.jpg",
        rottenTomatoesRating: "93%",
        imdbRating: "8.5/10",
        action: "#.#",
        adventure: "#.#",
        comedy: "#.#",
        goreRating: "#.#",
        kidFriendly: "#.#",
        romance: "#.#",
        sexual: "#.#",
        scary: "#.#",
        suspense: "#.#",
        religious: "#.#",
        feelGood: "#.#",
        },
    {
        title: "CINDERELLA",
        img: "movie_posters/cinderella.jpg",
        rottenTomatoesRating: "95%",
        imdbRating: "7.3/10",
        action: "#.#",
        adventure: "#.#",
        comedy: "#.#",
        goreRating: "#.#",
        kidFriendly: "#.#",
        romance: "#.#",
        sexual: "#.#",
        scary: "#.#",
        suspense: "#.#",
        religious: "#.#",
        feelGood: "#.#",
        },
    {
        title: "FROZEN",
        img: "movie_posters/frozen.jpg",
        rottenTomatoesRating: "89%",
        imdbRating: "7.4/10",
        action: "#.#",
        adventure: "#.#",
        comedy: "#.#",
        goreRating: "#.#",
        kidFriendly: "#.#",
        romance: "#.#",
        sexual: "#.#",
        scary: "#.#",
        suspense: "#.#",
        religious: "#.#",
        feelGood: "#.#",
        },
    {
        title: "HARRY POTTER AND THE SORCEROR'S STONE",
        img: "movie_posters/harry potter.jpg",
        rottenTomatoesRating: "80%",
        imdbRating: "7.7/10",
        action: "#.#",
        adventure: "#.#",
        comedy: "#.#",
        goreRating: "#.#",
        kidFriendly: "#.#",
        romance: "#.#",
        sexual: "#.#",
        scary: "#.#",
        suspense: "#.#",
        religious: "#.#",
        feelGood: "#.#",
        },
    {
        title: "INDIANA JONES AND THE RAIDERS OF THE LOST ARK",
        img: "movie_posters/indiana jones.jpg",
        rottenTomatoesRating: "94%",
        imdbRating: "8.4/10",
        action: "#.#",
        adventure: "#.#",
        comedy: "#.#",
        goreRating: "#.#",
        kidFriendly: "#.#",
        romance: "#.#",
        sexual: "#.#",
        scary: "#.#",
        suspense: "#.#",
        religious: "#.#",
        feelGood: "#.#",
        },
    {
        title: "THE LION KING",
        img: "movie_posters/lion king.jpeg",
        rottenTomatoesRating: "93%",
        imdbRating: "8.5/10",
        action: "#.#",
        adventure: "#.#",
        comedy: "#.#",
        goreRating: "#.#",
        kidFriendly: "#.#",
        romance: "#.#",
        sexual: "#.#",
        scary: "#.#",
        suspense: "#.#",
        religious: "#.#",
        feelGood: "#.#",
        },
    {
        title: "NAPOLEON DYNAMITE",
        img: "movie_posters/napoleon dynamite.jpg",
        rottenTomatoesRating: "72%",
        imdbRating: "7.0/10",
        action: "#.#",
        adventure: "#.#",
        comedy: "#.#",
        goreRating: "#.#",
        kidFriendly: "#.#",
        romance: "#.#",
        sexual: "#.#",
        scary: "#.#",
        suspense: "#.#",
        religious: "#.#",
        feelGood: "#.#",
        },
    {
        title: "THE PRINCE OF EGYPT",
        img: "movie_posters/prince of egypt.jpg",
        rottenTomatoesRating: "80%",
        imdbRating: "7.2/10",
        action: "#.#",
        adventure: "#.#",
        comedy: "#.#",
        goreRating: "#.#",
        kidFriendly: "#.#",
        romance: "#.#",
        sexual: "#.#",
        scary: "#.#",
        suspense: "#.#",
        religious: "#.#",
        feelGood: "#.#",
        },
    {
        title: "A QUIET PLACE",
        img: "movie_posters/quiet place.jpg",
        rottenTomatoesRating: "96%",
        imdbRating: "7.5/10",
        action: "#.#",
        adventure: "#.#",
        comedy: "#.#",
        goreRating: "#.#",
        kidFriendly: "#.#",
        romance: "#.#",
        sexual: "#.#",
        scary: "#.#",
        suspense: "#.#",
        religious: "#.#",
        feelGood: "#.#",
        },
    {
        title: "STAR WARS: A NEW HOPE",
        img: "movie_posters/starwars.jpg",
        rottenTomatoesRating: "93%",
        imdbRating: "8.6/10",
        action: "#.#",
        adventure: "#.#",
        comedy: "#.#",
        goreRating: "#.#",
        kidFriendly: "#.#",
        romance: "#.#",
        sexual: "#.#",
        scary: "#.#",
        suspense: "#.#",
        religious: "#.#",
        feelGood: "#.#",
        },
    {
        title: "THE SUPER MARIO BROS. MOVIE",
        img: "movie_posters/super mario bros movie.jpg",
        rottenTomatoesRating: "59%",
        imdbRating: "7.0/10",
        action: "#.#",
        adventure: "#.#",
        comedy: "#.#",
        goreRating: "#.#",
        kidFriendly: "#.#",
        romance: "#.#",
        sexual: "#.#",
        scary: "#.#",
        suspense: "#.#",
        religious: "#.#",
        feelGood: "#.#",
        },
    {
        title: "TENET",
        img: "movie_posters/tenet.jpg",
        rottenTomatoesRating: "76%",
        imdbRating: "7.3/10",
        action: "#.#",
        adventure: "#.#",
        comedy: "#.#",
        goreRating: "#.#",
        kidFriendly: "#.#",
        romance: "#.#",
        sexual: "#.#",
        scary: "#.#",
        suspense: "#.#",
        religious: "#.#",
        feelGood: "#.#",
        },
    {
        title: "TITANIC",
        img: "movie_posters/titanic.jpg",
        rottenTomatoesRating: "88%",
        imdbRating: "7.9/10",
        action: "#.#",
        adventure: "#.#",
        comedy: "#.#",
        goreRating: "#.#",
        kidFriendly: "#.#",
        romance: "#.#",
        sexual: "#.#",
        scary: "#.#",
        suspense: "#.#",
        religious: "#.#",
        feelGood: "#.#",
        },
    {
        title: "UP",
        img: "movie_posters/up.jpeg",
        rottenTomatoesRating: "98%",
        imdbRating: "8.3/10",
        action: "#.#",
        adventure: "#.#",
        comedy: "#.#",
        goreRating: "#.#",
        kidFriendly: "#.#",
        romance: "#.#",
        sexual: "#.#",
        scary: "#.#",
        suspense: "#.#",
        religious: "#.#",
        feelGood: "#.#",
        },
]

function movieTemplate(movie){
	return `
        <div id="column_1">
        <h2>${movie.title}</h2>
        <img class="poster" src="${movie.img}" alt="${movie.title}">
        <p id="rotton_tomatoes">Rotton Tomatoes Rating: ${movie.rottenTomatoesRating}</p>
        <p id="IMDb">IMDb Rating: ${movie.imdbRating}</p></div>
        <ul id="ratings_filtered">
            <li>Action: ${movie.action}</li>
            <li>Adventure: ${movie.adventure}</li>
            <li>Comedy: ${movie.comedy}</li>
            <li>Gore-Rating: ${movie.goreRating}</li>
            <li>Kid-Friendly: ${movie.kidFriendly}</li>
            <li>Romance: ${movie.romance}</li>
            <li>Sexual: ${movie.sexual}</li>
            <li>Scary: ${movie.scary}</li>
            <li>Suspense: ${movie.suspense}</li>
            <li>Religous: ${movie.religious}</li>
            <li>Feel-Good: ${movie.feelGood}</li>
        </ul>
        <hr>`
}

function renderMovies(movieList) {
    let movieContainer = document.querySelector('#movie');
    let html = movieList.map(movie => movieTemplate(movie)).join("");
    movieContainer.innerHTML += html;
}
function renderMovie(movieList) {
    let movieContainer = document.querySelector('#movie');
    let html = movieTemplate(movieList);
    movieContainer.innerHTML += html;
}


function init() {
    const sortedMovies = movies.sort((a, b) => a.title.localeCompare(b.title));
    let movieContainer = document.querySelector('#movie');
    movieContainer.innerHTML = '';
    renderMovies(sortedMovies);
}

init();

function filterMovies(query) {
    query = query.toLowerCase();

    const filtered = movies.filter(movie => {
        return (
            movie.title.toLowerCase().includes(query)
        );
    });
    

    return filtered.sort((a, b) => a.name.localeCompare(b.name));

}


function search_handler(event) {
	event.preventDefault();
   
    const query = document.getElementById('input_box').value;

    
    const filteredMovies = filterMovies(query);

    let movieContainer = document.querySelector('#movie');
    movieContainer.innerHTML = '';
    filteredMovies.forEach(movie => renderMovie(movie));
}

document.querySelector('#search').addEventListener('click', search_handler);
document.addEventListener('DOMContentLoaded', () => {
    function fetchMovieRatings(movieTitle) {
        const formattedTitle = movieTitle.toLowerCase().replace(/ /g, '_'); // Format to match the server

        return fetch(`https://film-inspect.onrender.com/${formattedTitle}`)
            .then(response => {
                if (!response.ok) throw new Error(`Failed to fetch ratings for ${movieTitle}`);
                return response.json();
            })
            .then(data => {
                if (data.message) {
                    console.log(data.message);
                    return null;
                }
                return { title: movieTitle, ratings: data.averages };
            })
            .catch(error => {
                console.error(`Error fetching ratings for ${movieTitle}:`, error);
                return null;
            });
    }

    function updateMovieRatings(moviesWithRatings) {
        moviesWithRatings.forEach(({ title, ratings }) => {
            const movie = movies.find(m => m.title.toUpperCase() === title.toUpperCase());
            if (!movie) return;
    
            Object.keys(ratings).forEach(category => {
                let categoryKey = category;
    
                // Map server's "gore" to "goreRating" in the movie object
                if (category === "gore") {
                    categoryKey = "goreRating";
                }
    
                if (movie.hasOwnProperty(categoryKey)) {
                    movie[categoryKey] = ratings[category] + "/10"; // Append "/10" for formatting
                }
            });
        });
    
        rerenderMovies();
    }
    function rerenderMovies() {
        let movieContainer = document.querySelector('#movie');
        movieContainer.innerHTML = ''; // Clear previous content
        renderMovies(movies); // Render all updated movies
    }

    async function fetchAllMovieRatings() {
        const ratingPromises = movies.map(movie => fetchMovieRatings(movie.title));
        const moviesWithRatings = (await Promise.all(ratingPromises)).filter(Boolean);
        updateMovieRatings(moviesWithRatings);
    }

    // Fetch ratings for all movies dynamically on page load
    fetchAllMovieRatings();
});