const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull')

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestion = {}

let questions = [
    {
        question: "Which city was the original franchise in 'The Real Housewives'?",
        choice1:"RHOSLC",
        choice2:"RHOBH",
        choice3:"RHONY",
        choice4:"RHOC", 
        answer: 4,
    },
    {
        question: 'From the following, who has the most Grammy awards?',
        choice1:"Kanye West",
        choice2:"Beyoncé",
        choice3:"Lady Gaga",
        choice4:"Bruce Springsteen", 
        answer: 2,
    },
    {
        question: "In the show, 'Friends', how many pages did Rachel write to Ross regarding their relationship?",
        choice1:"4",
        choice2:"9",
        choice3:"14",
        choice4:"18", 
        answer: 4,
    },
    {
        question: "Which Avenger was able to pick up Thor's Mjolnir?",
        choice1:"Vision",
        choice2:"Hulk",
        choice3:"Iron Man",
        choice4:"Scarlet Witch", 
        answer: 1,
    },
    {
        question: "Who is the oldest Kardashian member?",
        choice1:"Khloé",
        choice2:"Kourtney",
        choice3:"Rob",
        choice4:"Kim", 
        answer: 2,
    },
    {
        question: "What is Nicki Minaj's fanbase called?",
        choice1:"Wigs",
        choice2:"Dolls",
        choice3:"Barbs",
        choice4:"Navy", 
        answer: 3,
    },
    {
        question: "Which Korean artist released 'Gangnam Style' back in 2012?",
        choice1:"BTS",
        choice2:"Psy",
        choice3:"BlackPink",
        choice4:"Justin Bieber", 
        answer: 2,
    },
    {
        question: "When did 'Star Wars: A New Hope' get released?",
        choice1:"1977",
        choice2:"1975",
        choice3:"1980",
        choice4:"1982", 
        answer: 1,
    },
    {
        question: "Carrie Bradshaw wrote for which newspaper, in the show 'Sex and the City'?",
        choice1:"New York Times",
        choice2:"New York Star",
        choice3:"Harper's Bazaar",
        choice4:"New Yorkerr", 
        answer: 2,
    },
    {
        question: "What year was it that Janet Jackson had the infamous wardrobe malfunction at the Superbowl?",
        choice1:"2001",
        choice2:"2002",
        choice3:"2003",
        choice4:"2004", 
        answer: 4,
    }
]
const SCORE_POINTS = 100
const MAX_QUESTIONS = 10
 
startGame = () =>{
    questionCounter = 0
    score = 0
    availableQuestion = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestion.length === 0|| questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign("/end.html")
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestion.length)
    currentQuestion = availableQuestion [questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion["choice" + number]
    })

    availableQuestion.splice(questionsIndex, 1)

    acceptingAnswers = true
}
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct': 'incorrect'

        if(classToApply === "correct") {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)
        setTimeout(() =>{
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        },1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()