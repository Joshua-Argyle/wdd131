
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// MongoDB connection (replace with your MongoDB URI)
mongoose.connect('your-mongodb-connection-string', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB!'))
.catch(err => console.error('MongoDB connection error:', err));

// MongoDB schema and model for ratings
const ratingSchema = new mongoose.Schema({
    movie: String,
    category1: Number,
    category2: Number,
    category3: Number,
    // Add more categories as needed
});
const Rating = mongoose.model('Rating', ratingSchema);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running! Use /getRatings to fetch data.');
});

// Function to calculate averages from MongoDB
function calculateAverages(ratings) {
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
    Rating.find() // Fetch all ratings from MongoDB
        .then(ratings => res.json(ratings))
        .catch(err => res.status(500).json({ error: 'Error fetching ratings from MongoDB' }));
});

// Endpoint to get ratings for a specific movie
app.get('/getMovieRatings/:movie', (req, res) => {
    const movie = req.params.movie;
    Rating.find({ movie }) // Fetch ratings for a specific movie
        .then(ratings => {
            if (ratings.length === 0) {
                return res.json({ message: `No ratings available for ${movie}.` });
            }

            const averages = calculateAverages(ratings); // Calculate averages for this movie
            res.json({ movie, averages });
        })
        .catch(err => res.status(500).json({ error: 'Error fetching movie ratings from MongoDB' }));
});

// Endpoint to submit ratings
app.post('/submitRating', (req, res) => {
    console.log('Received request body:', req.body);
    
    const { movie, category1, category2, category3 } = req.body;
    
    // Ensure the rating data includes the movie name and categories
    if (!movie || !category1 || !category2 || !category3) {
        console.error('Missing required fields in the request body!');
        return res.status(400).json({ message: 'Movie name and categories are required' });
    }

    // Save the new rating to MongoDB
    const newRating = new Rating({
        movie,
        category1,
        category2,
        category3,
    });

    newRating.save()
        .then(() => {
            // Calculate averages and send response
            Rating.find()  // Get all ratings to calculate averages
                .then(ratings => {
                    const averages = calculateAverages(ratings);
                    res.json({ message: 'Rating saved!', averages });
                })
                .catch(err => res.status(500).json({ error: 'Error calculating averages' }));
        })
        .catch(err => {
            console.error('Error saving rating:', err);
            res.status(500).json({ message: 'Error saving rating to MongoDB' });
        });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});