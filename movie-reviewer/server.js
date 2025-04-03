const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Server is running! Use /getRatings to fetch data.');
});

app.use(cors());
app.use(express.json());

const FILE_PATH = 'ratings.json';

// Function to read ratings from file
function readRatings() {
    try {
        // Check if the file exists and is not empty
        if (!fs.existsSync(FILE_PATH) || fs.readFileSync(FILE_PATH, 'utf8').trim() === '') {
            return []; // Return an empty array if file doesn't exist or is empty
        }

        let data = fs.readFileSync(FILE_PATH, 'utf8');
        return JSON.parse(data); // Parse the JSON if valid
    } catch (err) {
        console.error("Error reading or parsing ratings file:", err);
        return []; // Return an empty array if there's an error
    }
}

// Function to save ratings to file
function saveRatings(ratings) {
    fs.writeFileSync(FILE_PATH, JSON.stringify(ratings, null, 2));
}

// Function to compute averages
function calculateAverages() {
    let ratings = readRatings();
    if (ratings.length === 0) {
        return {};
    }

    let categoryTotals = {};
    let categoryCounts = {};

    ratings.forEach(rating => {
        for (let category in rating) {
            if (category !== 'movie') { // Skip the movie field when calculating averages
                if (!categoryTotals[category]) {
                    categoryTotals[category] = 0;
                    categoryCounts[category] = 0;
                }
                categoryTotals[category] += parseFloat(rating[category] || 0);
                categoryCounts[category] += 1;
            }
        }
    });

    let averages = {};
    for (let category in categoryTotals) {
        averages[category] = (categoryTotals[category] / categoryCounts[category]).toFixed(1);
    }

    return averages;
}

// Endpoint to get all ratings
app.get('/getRatings', (req, res) => {
    res.json(readRatings());
});

// Endpoint to get ratings for a specific movie
app.get('/getMovieRatings/:movie', (req, res) => {
    const movie = req.params.movie;
    let ratings = readRatings();

    // Filter ratings for the selected movie
    const movieRatings = ratings.filter(rating => rating.movie === movie);

    if (movieRatings.length === 0) {
        return res.json({ message: `No ratings available for ${movie}.` });
    }

    // Calculate the averages for this movie
    let categoryTotals = {};
    let categoryCounts = {};

    movieRatings.forEach(rating => {
        for (let category in rating) {
            if (category !== 'movie') {
                if (!categoryTotals[category]) {
                    categoryTotals[category] = 0;
                    categoryCounts[category] = 0;
                }
                categoryTotals[category] += parseFloat(rating[category] || 0);
                categoryCounts[category] += 1;
            }
        }
    });

    let averages = {};
    for (let category in categoryTotals) {
        averages[category] = (categoryTotals[category] / categoryCounts[category]).toFixed(1);
    }

    res.json({ movie, averages });
});

// Endpoint to submit ratings
app.post('/submitRating', (req, res) => {
    console.log('Received request body:', req.body);
    
    // Get existing ratings
    let ratings = readRatings(); 

    // Ensure the rating data includes the movie name
    const movie = req.body.movie;
    if (!movie) {
        console.error('Movie is missing in the request body!');
        return res.status(400).json({ message: 'Movie name is required' });
    }

    const ratingData = { ...req.body, movie }; // Add the movie to the rating data
    ratings.push(ratingData); // Add new rating with movie name
    saveRatings(ratings); // Save to file
    
    // Send the averages along with the response
    const averages = calculateAverages();
    res.json({ message: "Rating saved!", averages: averages });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

