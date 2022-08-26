// // const username = document.querySelector("#username")
// // const saveScoreBtn = document.querySelector("#saveScoreBtn")
// // const finalScore = document.querySelector("#finalScore")
// const mostRecentScore = localStorage.getItem("mostRecentScore")

// const highScores = JSON.parse(localStorage.getItem('highScores')) || []
// // const MAX_HIGH_SCORES = 5
// finalScore.innerText = mostRecentScore
// // username.addEventListener('keyup', () => {
// //     saveScoreBtn.disabled = !username.value
// // })

// // saveHighScore = e =>{
// //     e.preventDefault()
// //     const score ={
// //         score: mostRecentScore,
// //         name: username.value
// //     }

// //     highScores.push(score)
// //     highScores.sort((a,b) => {
// //         return b.score - a.score
// //     })
// //     highScores.splice(5)
// //     localStorage.setItem('highScore',JSON.stringify(highScores))
// //     window.location.assign('/')
// // }

const mostRecentScore = localStorage.getItem("mostRecentScore")

// const highScores = JSON.parse(localStorage.getItem('highScores')) || []

finalScore.innerText = mostRecentScore

//Test for message

const rightQuestions = (mostRecentScore/100)

// document.getElementById("finalMessage").innerHTML = "You got " + rightQuestions + "/10!"


//Test for different messages
var messages = ["Keep up the good work, sweetie.", "Don't be sorry, just do better.","50%. I'm not mad but I'm not happy."]
var gifs = ["assests/Proud.gif","assests/Disappointed.gif","assests/Middle.gif"]

var score ;
    if(rightQuestions > 5){
        score = 0
    }
    if(rightQuestions < 5){
        score = 1
    }
    if(rightQuestions == 5){
        score = 2
    }


document.getElementById("finalMessage").innerHTML = messages[score]
document.getElementById("reaction").src = gifs[score]