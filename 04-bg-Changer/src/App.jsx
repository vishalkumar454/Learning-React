import { useState } from 'react'
import './App.css'
import './ChangeColorButton';
import ChangeColorButton from './ChangeColorButton'

function App() {
  const [color, setColor] = useState('violet');

  return (
    <div className='w-full h-screen duration-200' style={{background : color}}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>

          <ChangeColorButton bgcolor="green" colorName="Green" setColor={setColor}/>
          <ChangeColorButton bgcolor="red" colorName="Red" setColor={setColor}/>
          <ChangeColorButton bgcolor="blue" colorName="Blue" setColor={setColor}/>
          <ChangeColorButton bgcolor="olive" colorName="Olive" setColor={setColor}/>
          <ChangeColorButton bgcolor="gray" colorName="Gray" setColor={setColor}/>
          <ChangeColorButton bgcolor="yellow" colorName="Yellow" setColor={setColor}/>
          <ChangeColorButton bgcolor="pink" colorName="Pink" setColor={setColor}/>
          <ChangeColorButton bgcolor="purple" colorName="Purple" setColor={setColor}/>
          <ChangeColorButton bgcolor="lavender" colorName="Lavender" setColor={setColor}/>
          <ChangeColorButton bgcolor="white" colorName="White" setColor={setColor}/>
          <ChangeColorButton bgcolor="black" colorName="Black" setColor={setColor}/>


        </div>
      </div>
    </div>
  )
}

export default App
