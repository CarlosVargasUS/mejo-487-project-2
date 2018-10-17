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
            "correct": "<p><span>Indeed!</span> She migrated from Guatemala!</p>",
            "incorrect": "Check Rosi's Page, you got it!"
        },
        {
            "q": "At what age did Cristina come to the United States?",
            "a": [
                {"option": "Nope, She was born in the U.S.A",      "correct": false},
                {"option": "3",     "correct": false},
                {"option": "5",      "correct": true},
                {"option": "10",     "correct": false} 
            ],
            "correct": "<p><span>That's correct!</span> </p>",
            "incorrect": "You need to watch the videos again!"
        },
        {
            "q": "Have you ever been to a Quinceañera",
            "a": [
                {"option": "No",      "correct": false},
                {"option": "I should",     "correct": true},
                {"option": "Yes",      "correct": true}
            ],
            "correct": "<p><span>That's correct!</span> Awesome!</p>",
            "incorrect": "it's a great time!"
        },
        {
            "q": "Which story are you more inclined to watch in HBO?",
            "a": [
                {"option": "Rosi's Story",      "correct": true},
                {"option": "Ashley's Story",     "correct": true},
                {"option": "Both",      "correct": true}
            ],
            "correct": "<p><span> Hope you enjoy watch it!</span></p>",
            "incorrect": "Hope you enjoy watch it!!"
        }
    ]
}

console.log('slickquiz-config conected');