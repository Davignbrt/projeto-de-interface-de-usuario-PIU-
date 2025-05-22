import { useState } from 'react'
import Tema from './componentes/Temas'
import Galeria from './componentes/Galeria'
import './App.css'
import Detalhes from "./componentes/Detalhes";

function App() {
  const [count, setCount] = useState(0)
  const [personagemSelecionado, setPersonagemSelecionado] = useState(null);
  return (
    <>
      <div style={{ minHeight: "100vh", textAlign: "center", padding: "20px" }}>
            <Tema/>
            <h1>Galeria de Pokémon</h1>
            <Galeria setPersonagemSelecionado={setPersonagemSelecionado} />
            <Detalhes personagem={personagemSelecionado} />
        </div>
    </>
  )
}

export default App



