import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
  function decreaseTime(){
    console.log(timeRemaining)
    setTimeRemaining(timeRemaining - 1)
  }

  function stopTime(timer) {
    if(timeRemaining === 0){
      console.log("Im at 0")
      setTimeRemaining(10)
      onAnswered(false)
      }
      return function(){
        clearTimeout(timer);
      }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      // console.log('This will run after 1 second!')
      // setTimeRemaining(timeRemaining - 1)
      decreaseTime()
      

    }, 1000);
    return stopTime(timer)
    // clearInterval(timer);
    ;
  },
   [timeRemaining, onAnswered]);




  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;
  // console.log(onAnswered)

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
