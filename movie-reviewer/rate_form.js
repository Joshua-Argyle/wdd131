

document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault();  // Prevent form submission and page reload

    // Get the selected movie title from the dropdown
    let movieTitle = document.getElementById('what_movie').value;

    // Validate movie selection
    if (movieTitle === 'select_movie') {
        alert('Please select a movie before submitting.');
        return; // Prevent submission if the movie is not selected
    }
    
    // Get the ratings from each category
    let actionRating = document.querySelector('input[name="action"]:checked')?.value;
    let adventureRating = document.querySelector('input[name="adventure"]:checked')?.value;
    let comedyRating = document.querySelector('input[name="comedy"]:checked')?.value;
    let goreRating = document.querySelector('input[name="gore-rating"]:checked')?.value;
    let kidFriendlyRating = document.querySelector('input[name="kid-friendly"]:checked')?.value;
    let romanceRating = document.querySelector('input[name="romance"]:checked')?.value;
    let sexualRating = document.querySelector('input[name="sexual"]:checked')?.value;
    let scaryRating = document.querySelector('input[name="scary"]:checked')?.value;
    let suspenseRating = document.querySelector('input[name="suspense"]:checked')?.value;
    let religiousRating = document.querySelector('input[name="religious"]:checked')?.value;
    let feelGoodRating = document.querySelector('input[name="feel-good"]:checked')?.value;

    // Validate ratings (check if any are undefined)
    if (
        !actionRating || !adventureRating || !comedyRating || !goreRating ||
        !kidFriendlyRating || !romanceRating || !sexualRating || !scaryRating ||
        !suspenseRating || !religiousRating || !feelGoodRating
    ) {
        alert('Please rate all categories before submitting.');
        return; // Prevent submission if any ratings are missing
    }
    
    // Create the rating data object
    let ratingData = {
        movie: movieTitle,
        action: actionRating,
        adventure: adventureRating,
        comedy: comedyRating,
        gore: goreRating,
        kidFriendly: kidFriendlyRating,
        scary: scaryRating,
        romance: romanceRating,
        sexual: sexualRating,
        suspense: suspenseRating,
        religious: religiousRating,
        feelGood: feelGoodRating
    };

    // Send the data to the server (example with fetch API)
    fetch('https://film-inspect.onrender.com/submitRating', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ratingData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Server error');
        }
        return response.json();
    })
    .then(() => {
        
        window.location.href = "/movie-reviewer/thank_you.html";
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Something went wrong. Please try again later.');
    });
});

