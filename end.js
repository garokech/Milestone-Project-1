const mostRecentScore = localStorage.getItem("mostRecentScore")

finalScore.innerText = mostRecentScore

const rightQuestions = (mostRecentScore/100)

//Test for different messages
var messages = ["Keep up the good work, sweetie.","50%. I'm not mad but I'm not happy.", "Don't be sorry, just do better."]
var gifs = ["assests/Proud.gif","assests/Middle.gif","assests/Disappointed.gif"]

var score ;
    if(rightQuestions > 5){
        score = 0
    }
    if(rightQuestions == 5){
        score = 1
    }
    if(rightQuestions < 5){
        score = 2
    }
    


document.getElementById("finalMessage").innerHTML = messages[score]
document.getElementById("reaction").src = gifs[score]