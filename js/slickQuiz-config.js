var quizJSON = {
    "info": {
        "name":    "",
        "main":    "<h1>You will be able to test your knowledge about a Quincenera!</h1>"
    },
    "questions": [
        {
            "q": "At what age is a Quinceanera celebrated?",
            "a": [
                {"option": "20",      "correct": false},
                {"option": "16",     "correct": false},
                {"option": "15",      "correct": true},
                {"option": "90",     "correct": false} 
            ],
            "correct": "<p><span>That's correct!</span> a Quinceanera is celebrated at 15!</p>",
            "incorrect": "You need to watch the videos again!"
        },
        {
            "q": "What is the nationality of Rosi's mom?",
            "a": [
                {"option": "Ecuadorian",      "correct": false},
                {"option": "Cuban",     "correct": false},
                {"option": "Mexican",      "correct": false},
                {"option": "Guatemalan",     "correct": true} 
            ],
            "correct": "<p><span>Awesome!</span> She migrated from Guatemala!</p>",
            "incorrect": "You need to watch the videos again!"
        }
    ]
}

console.log('slickquiz-config conected');