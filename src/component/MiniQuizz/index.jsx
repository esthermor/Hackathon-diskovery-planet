// import React, { useState } from "react";
// import ReactDOM from "react-dom";
import { useState } from "react";
import "./miniquizz.css";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

//Initiating the List of Question
const MiniQuizz = () => {
  const questionList = [
    {
      question: "How many planets are there in the Solar System?",
      answerList: [
        { answer: "Seven", isCorrect: false },
        { answer: "Eight", isCorrect: true },
        { answer: "Nine", isCorrect: false },
        { answer: "Ten", isCorrect: false },
      ],
    },

    {
      question:
        "Which is the brightest and hottest planet in the Solar System?",
      answerList: [
        { answer: "Venus", isCorrect: true },
        { answer: "Earth", isCorrect: false },
        { answer: "Neptune", isCorrect: false },
        { answer: "Mars", isCorrect: false },
      ],
    },

    {
      question: "Which of the following statement is correct about the Earth?",
      answerList: [
        { answer: "Earth is also known as 'Blue Planet'.", isCorrect: false },
        { answer: "It has only natural satellite.", isCorrect: false },
        {
          answer:
            "It is the third nearest planet to the sun, and the fifth largest planet in the Solar System.",
          isCorrect: false,
        },
        { answer: "All of the above.", isCorrect: true },
      ],
    },

    {
      question: "If there is no Sun, the colour of the sky would be:",
      answerList: [
        { answer: "blue", isCorrect: false },
        { answer: "yellow", isCorrect: false },
        { answer: "black", isCorrect: true },
        { answer: "red", isCorrect: false },
      ],
    },

    {
      question: "The planet with the maximum number of moons?",
      answerList: [
        { answer: "Venus", isCorrect: false },
        { answer: "Neptune", isCorrect: false },
        { answer: "Uranus", isCorrect: false },
        { answer: "Saturn", isCorrect: true },
      ],
    },
  ];

  const [current_question, setCurrentQuestion] = useState(0); //useState and onclick
  const [score, setScore] = useState(0);

  //method to click answer
  const handleAnswerItemClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    //pass to the next question
    const nextQuestion = current_question + 1;
    if (nextQuestion < questionList.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScore();
    }
  };

  const currentQuestion = questionList[current_question];

  return (
    <div>
      <h1> Planet Quiz </h1>

      <div className="QnA">
        <div className="questionBox">
          <div>
            <span>Question {current_question + 1} </span>
          </div>
          {currentQuestion.question}
        </div>
        {currentQuestion.answerList.map((answerItem) => (
          <div className="answerBox">
            <button onClick={() => handleAnswerItemClick(answerItem.isCorrect)}>
              {answerItem.answer}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniQuizz;

//Identify if answers are correct
//to recheck if can be shorten using arrow function
//   const [score, setScore] = useState(0);
//   if (isCorrect == "true") {
//     return setScore(score + 1);
//   } else {
//     setScore(score);
//   }

//   const currentQuestion = question;
//   const nextQuestion = currentQuestion + 1;
//   if (nextQuestion < currentQuestion.length) {

//   }

// 	const [showScore, setShowScore] = useState(false);
// 	const [score, setScore] = useState(0);

// 	const handleAnswerOptionClick = (isCorrect) => {
// 		if (isCorrect) {
// 			setScore(score + 1);
// 		}

// 		const nextQuestion = currentQuestion + 1;
// 		if (nextQuestion < questions.length) {
// 			setCurrentQuestion(nextQuestion);
// 		} else {
// 			setShowScore(true);
// 		}
// 	};
// 	return (
// 		<div className='app'>
// 			{showScore ? (
// 				<div className='score-section'>
// 					You scored {score} out of {questions.length}
// 				</div>
// 			) : (
// 				<>
// 					<div className='question-section'>
// 						<div className='question-count'>
// 							<span>Question {currentQuestion + 1}</span>/{questions.length}
// 						</div>
// 						<div className='question-text'>{questions[currentQuestion].questionText}</div>
// 					</div>
// 					<div className='answer-section'>
// 						{questions[currentQuestion].answerOptions.map((answerOption) => (
// 							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
// 						))}
// 					</div>
// 				</>
// 			)}
// 		</div>
// 	);
// }
