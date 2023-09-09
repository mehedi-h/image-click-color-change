
import { useState } from 'react'
import './App.css'
import img from "./assets/pexels-pixabay-86405.jpg"

function App() {
  const [className, setClassName] = useState("defaultClass")
  const clickFunction = () => {
    if (className === "defaultClass") {setClassName(('newClass'))}
    if (className === "newClass") {setClassName(('anotherClass'))}
    if (className === 'anotherClass') {setClassName(('defaultClass'))}
  }
  return (
    <>
      <div className={className}>
        <img onClick={clickFunction} className='img' src={img} alt=""/>
      </div>
    </>
  )
}

export default App
