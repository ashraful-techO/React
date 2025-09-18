import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Increments from './components/increments'
import Fruits from './components/Fruits'


function App() {
  return(
 <>
 <Increments/>
 <hr />
 <Fruits/>
 </>
 )
}

export default App
