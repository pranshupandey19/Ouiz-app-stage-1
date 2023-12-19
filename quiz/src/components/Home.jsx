import React from 'react'
// import "../App.css"

const Home = () => {
  let change = 0;
  return (
    <div id='home-container'>
      <div id="home-quiz">
        <h1>Quiz App</h1>
        <button onClick={()=>{
          change = 1
        }} id='button'>Play</button>
      </div>
    </div>
  )
}

export default Home