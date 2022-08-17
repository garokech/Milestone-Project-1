var myQuestions = [
    {
        question: "Which city was the original franchise in 'The Real Housewives'?",
        answers: {
          a: 'RHOSLC',
          b: 'RHOBH',
          c: 'RHONY',
          d: 'RHOC'
        },
        correctAnswer: 'd'
      },
      {
        question: "From the following, who has the most Grammy awards?",
        answers: {
          a: 'Kanye West',
          b: 'Beyoncé',
          c: 'Lady Gaga',
          d: 'Bruce Springsteen'
        },
        correctAnswer: 'b'
      },
      {
        question: "In the show, 'Friends', how many pages did Rachel write to Ross regarding their relationship?",
        answers: {
          a: '4',
          b: '9',
          c: '18',
          d: '14'
        },
        correctAnswer: 'c'
      },
      {
        question: "Which Avenger was able to pick up Thor's Mjolnir?",
        answers: {
          a: 'Vision',
          b: 'Hulk',
          c: 'Iron Man',
          d: 'Scarlet Witch'
        },
        correctAnswer: 'a'
      },
      {
        question: "Who is the oldest Kardashian member?",
        answers: {
          a: 'Khloé',
          b: 'Kim',
          c: 'Rob',
          d: 'Kourtney'
        },
        correctAnswer: 'd'
      }, 
      {
        question: "What is Nicki Minaj's fanbase called?",
        answers: {
          a: 'Barbs',
          b: 'Dolls',
          c: 'Wigs',
          d: 'Navy'
        },
        correctAnswer: 'a'
      },
      {
        question: "Which Korean artist released 'Gangnam Style' back in 2012?",
        answers: {
          a: 'BlackPink',
          b: 'BTS',
          c: 'Justin Bieber',
          d: 'Psy'
        },
        correctAnswer: 'd'
      },
      {
        question: "When did 'Star Wars: A New Hope' get released?",
        answers: {
          a: '1977',
          b: '1975',
          c: '1982',
          d: '1980'
        },
        correctAnswer: 'a'
      },
      {
        question: "Carrie Bradshaw wrote for which newspaper, in the show 'Sex and the City'?",
        answers: {
          a: 'New York Times',
          b: 'New York Star',
          c: 'Harpers Baazar',
          d: 'New Yorker'
        },
        correctAnswer: 'b'
      }, 
      {
        question: "What year was it that Janet Jackson had the infamous wardrobe malfunction at the Superbowl?",
        answers: {
          a: '2001',
          b: '2002',
          c: '2003',
          d: '2004'
        },
        correctAnswer: 'd'
      },
  ];
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
      // we'll need a place to store the output and the answer choices
      var output = [];
      var answers;
  
      // for each question...
      for(var i=0; i<questions.length; i++){
        
        // first reset the list of answers
        answers = [];
  
        // for each available answer...
        for(letter in questions[i].answers){
  
          // ...add an html radio button
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }
  
        // add this question and its answers to the output
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      // finally combine our output list into one string of html and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
  
    function showResults(questions, quizContainer, resultsContainer){
      
      // gather answer containers from our quiz
      var answerContainers = quizContainer.querySelectorAll('.answers');
      
      // keep track of user's answers
      var userAnswer = '';
      var numCorrect = 0;
      
      // for each question...
      for(var i=0; i<questions.length; i++){
  
        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        // if answer is correct
        if(userAnswer===questions[i].correctAnswer){
          // add to the number of correct answers
          numCorrect++;
          
          // color the answers green
          answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[i].style.color = 'red';
        }
      }
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
  
    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }
  
  }