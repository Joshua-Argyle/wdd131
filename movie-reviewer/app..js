const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Path to the JSON file where ratings will be saved
const ratingsFile = 'ratings.json';

// Route to handle rating submissions
app.post('/submitRating', (req, res) => {
    const ratingData = req.body;

    // Check if the ratings.json file exists
    if (fs.existsSync(ratingsFile)) {
        // Read the existing data
        fs.readFile(ratingsFile, 'utf8', (err, data) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to read file' });
            }

            // Parse the existing data into a list of ratings
            let ratings = JSON.parse(data);

            // Append the new rating to the list
            ratings.push(ratingData);

            // Write the updated list back to the JSON file
            fs.writeFile(ratingsFile, JSON.stringify(ratings, null, 2), (err) => {
                if (err) {
                    return res.status(500).json({ error: 'Failed to save rating' });
                }
                res.json({ message: 'Rating saved successfully!' });
            });
        });
    } else {
        // If the file does not exist, create it and write the rating as the first entry
        let ratings = [ratingData];

        fs.writeFile(ratingsFile, JSON.stringify(ratings, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to save rating' });
            }
            res.json({ message: 'Rating saved successfully!' });
        });
    }
});

// Route to fetch all ratings
app.get('/getRatings', (req, res) => {
    if (fs.existsSync(ratingsFile)) {
        // Read the existing data from the file
        fs.readFile(ratingsFile, 'utf8', (err, data) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to read file' });
            }
            res.json(JSON.parse(data));
        });
    } else {
        res.json([]);
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
