import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Result from './components/Result'

function App() {
  const [count, setCount] = useState(0)
  let change;
  switch(change){
    case 1:
      
  }
  return (
    <>
      <Home/>
      <Quiz/>
      <Result/>
    </>
  )
}

export default App
