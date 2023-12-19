import React from 'react'

const Quiz = () => {
  return (
    <div id='quiz-container'>
      <div id="quiz-question-container">
        <div id='quiz-question'>
          Question
        </div>
        <div id="quiz-question-no">
          1 of 5
        </div>
        <div id="quiz-questions">
          Which is the only mammale which can jump?
        </div>

        <div id="quiz-all-options">

        <div id="quiz-options">
          <div id="quiz-opt">
            Dog
          </div>
          <div id="quiz-opt">
            Elephant
          </div>
        </div>

        <div id="quiz-options">
          <div id="quiz-opt">
            Goat
          </div>
          <div id="quiz-opt">
            Lion
          </div>
        </div>

        </div>
        <div id="quiz-all-buttons">
          <button id='quiz-previous'>Previous</button>
          <button id='quiz-next'>Next</button>
          <button id='quiz-quit'>Quit</button>
        </div>
        
      </div>
    </div>
  )
}

export default Quiz