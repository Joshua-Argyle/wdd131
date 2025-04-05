const express = require('express'); 
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 3000;


mongoose.connect('mongodb+srv://DoobsterJA:Joshua#33@joshuaargyle.p4e5w7u.mongodb.net/?retryWrites=true&w=majority&appName=JoshuaArgyle', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB!'))
.catch(err => console.error('MongoDB connection error:', err));


const ratingSchema = new mongoose.Schema({
    movie: String,
    action: Number,
    adventure: Number,
    comedy: Number,
    gore: Number,
    kidFriendly: Number,
    romance: Number,
    sexual: Number,
    scary: Number,
    suspense: Number,
    religious: Number,
    feelGood: Number
});
const Rating = mongoose.model('Rating', ratingSchema);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running! Use /getRatings to fetch data.');
});

// Generic function to calculate averages
function calculateAverages(ratings) {
    if (ratings.length === 0) return {};

    let categoryTotals = {};
    let categoryCounts = {};

    ratings.forEach(rating => {
        for (let category in rating.toObject()) {
            if (category !== 'movie' && category !== '_id' && category !== '__v') {
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

// GET all ratings
app.get('/getRatings', (req, res) => {
    Rating.find()
        .then(ratings => res.json(ratings))
        .catch(err => res.status(500).json({ error: 'Error fetching ratings from MongoDB' }));
});

// GET ratings for a specific movie
app.get('/getMovieRatings/:movie', (req, res) => {
    const movie = req.params.movie;
    Rating.find({ movie })
        .then(ratings => {
            if (ratings.length === 0) {
                return res.json({ message: `No ratings available for ${movie}.` });
            }

            const averages = calculateAverages(ratings);
            res.json({ movie, averages });
        })
        .catch(err => res.status(500).json({ error: 'Error fetching movie ratings from MongoDB' }));
});


app.post('/submitRating', (req, res) => {
    console.log('Received request body:', req.body);

    const {
        movie, action, adventure, comedy, gore, kidFriendly, romance, sexual,
        scary, suspense, religious, feelGood
    } = req.body;

    if (
        !movie || !action || !adventure || !comedy || !gore || !kidFriendly ||
        !romance || !sexual || !scary || !suspense || !religious || !feelGood
    ) {
        console.error('Missing required fields in the request body!');
        return res.status(400).json({ message: 'All rating fields and movie name are required' });
    }

    const newRating = new Rating({
        movie,
        action,
        adventure,
        comedy,
        gore,
        kidFriendly,
        romance,
        sexual,
        scary,
        suspense,
        religious,
        feelGood
    });

    newRating.save()
        .then(() => {
            Rating.find()
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