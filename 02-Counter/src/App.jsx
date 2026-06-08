import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  let [counter , setCounter] = useState(0);

  // adding value upto 20

  // const addValue = () => {
  //   if (counter < 20) {
  //     setCounter(counter + 1);
  //   }
  // }

  // it will add value by 1 and 1 means 2 at one time
  
  const addValue = () => {
    setCounter((prevCounter) => (prevCounter + 1));
    setCounter((prevCounter) => (prevCounter + 1));
  }

  // decrease upto 0

  // const remValue = () => {
  //   if (counter > 0) {
  //     setCounter(counter - 1);
  //   }
  // }

  const remValue = () => {
    setCounter(counter - 1);
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Chai with react</h1>
      <h2>Counter value : {counter} </h2>

      <button
      onClick={addValue}>Add Value {counter}</button>
      <br />
      <button
      onClick={remValue}>remove Value {counter} </button>
    </>
  )
}

export default App
