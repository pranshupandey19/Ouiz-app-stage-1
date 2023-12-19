import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Result from './components/Result'

function App() {
  return (
    <>
      <Home/>
      <Quiz/>
      <Result/>
    </>
  )
}

export default App
