import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path = '/' element ={<HomePage/>}></Route>
      </Routes>
    </>
  )
}

export default App
