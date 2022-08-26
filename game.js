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
        image:"https://hips.hearstapps.com/hmg-prod/images/real-housewives-nyc-1620137028.jpg?crop=0.5xw:1xh;center,top&resize=640:*"
    },
    {
        question: 'From the following, who has the most Grammy awards?',
        choice1:"Kanye West",
        choice2:"Beyoncé",
        choice3:"Lady Gaga",
        choice4:"Bruce Springsteen", 
        answer: 2,
        image:"https://66.media.tumblr.com/71658a01f6b19fb32f11694e5f010aa3/tumblr_inline_pmkujpTfa91s9on4d_540.jpg"
       },
    {
        question: "In the show, 'Friends', how many pages did Rachel write to Ross regarding their relationship?",
        choice1:"4",
        choice2:"9",
        choice3:"14",
        choice4:"18", 
        answer: 4,
        image:"https://media.vogue.fr/photos/5d51422c5dc6c20009ca8833/4:3/w_2426,h_1820,c_limit/010_A7A08B18_317.jpg"
    },
    {
        question: "What song was playing in 'The Sopranos' finale episode?",
        choice1:"Don't Stop Belivin'",
        choice2:"Woke Up This Morning",
        choice3:"Every Breathe You Take",
        choice4:"Glad Tidings", 
        answer: 1,
        image:"https://i.guim.co.uk/img/media/3dc4c4a74fc8d14db65ff38c7c4b37c48a056c29/111_0_3334_2000/master/3334.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=56b28ce41f141e1818a3a439db8c4dca",
       },
    {
        question: "Who is the oldest Kardashian member?",
        choice1:"Khloé",
        choice2:"Kourtney",
        choice3:"Rob",
        choice4:"Kim", 
        answer: 2,
        image:"https://deadline.com/wp-content/uploads/2022/07/the-kardashians-hulu-lr-e1650484410899.jpeg"
    },
    {
        question: "What is Nicki Minaj's fanbase called?",
        choice1:"Wigs",
        choice2:"Dolls",
        choice3:"Barbs",
        choice4:"Navy", 
        answer: 3,
        image:"https://static01.nyt.com/images/2018/07/25/arts/21popcast/21popcast-superJumbo.jpg"
    },
    {
        question: "What is Paris Hilton's iconic catch phrase?",
        choice1:"That's fetch.",
        choice2:"That's hot.",
        choice3:"Why are you so obsessed with me?",
        choice4:"Yuh.", 
        answer: 2,
        image:"https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_1.5/c_limit,w_1600/fl_lossy,q_auto/v1620332173/210506-Roundtree-ParisHilton-meme-tease_phidal"
    },
    {
        question: "When did 'Star Wars: A New Hope' get released?",
        choice1:"1977",
        choice2:"1975",
        choice3:"1980",
        choice4:"1982", 
        answer: 1,
        image:"https://images.theconversation.com/files/3624/original/tatooine.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop"
    },
    {
        question: "Carrie Bradshaw wrote for which newspaper, in the show 'Sex and the City'?",
        choice1:"New York Times",
        choice2:"New York Star",
        choice3:"Harper's Bazaar",
        choice4:"New Yorker", 
        answer: 2,
        image:"https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/43/1508751226-sex-and-the-city-cast.jpg"
    },
    {
        question: "Which Super Bowl Halftime performance was the most-watched?",
        choice1:"2012",
        choice2:"2016",
        choice3:"2017",
        choice4:"2015", 
        answer: 4,
        image:"https://cdn.justjared.com/wp-content/uploads/headlines/2021/02/super-bowl-halftime-show-ranking.jpg"
    }
]
const scorePoints = 100
const maxQuestions = 10
 
startGame = () =>{
    questionCounter = 0
    score = 0
    availableQuestion = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestion.length === 0|| questionCounter > maxQuestions){
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign("/end.html")
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${maxQuestions}`
    progressBarFull.style.width = `${(questionCounter/maxQuestions) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestion.length)
    currentQuestion = availableQuestion [questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion["choice" + number]
        
    })

    availableQuestion.splice(questionsIndex, 1)

    acceptingAnswers = true

    document.getElementById("containerTwo").style.backgroundImage = "url("+currentQuestion.image+")"
}
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct': 'incorrect'

        if(classToApply === "correct") {
            incrementScore(scorePoints)
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