import { useState } from 'react'
import Tema from './componentes/Temas'
import Galeria from './componentes/Galeria'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tema/>
      <Galeria/>
    </>
  )
}

export default App
