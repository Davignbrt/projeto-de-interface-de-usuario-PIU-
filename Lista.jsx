import { useState } from "react";
import { carros } from "./dados";
import Detalhes from "./Detalhes";

export default function ListarCarros() {
    const [carroSelecionado, setCarroSelecionado] = useState(null);
    const [anoFiltro, setAnofiltro] = useState("");
    const carrosFiltrados = carros.filter((item) => item.ano.toString().includes(anoFiltro))
    const [indice,setIndice] = useState(0)

    function aumentar()  {
        setIndice((indice + 1)); 
      };

    function diminuir() {
        setIndice((indice - 1));
    }
    

    return (
        <>
            <div>
                <h1>contador : {indice}</h1>
                <button style={{ backgroundColor: indice > 10 ? "red" : "pink" }} onClick={ aumentar}>aumentar</button>
                <button style={{ backgroundColor: indice < -10 ? "gray" : "green" }} onClick={diminuir} >diminuir</button>
            </div>
            <div>
                    <input type="number"placeholder="filtrar por ano" value={anoFiltro} onChange={(e) => setAnofiltro(e.target.value)} />
                
            </div>
            <div className="container_filtro">
                {carros.map((item) => (
                    <div className="carros" key={item.id}>
                        <h2>{item.nome} {item.ano}</h2>
                        <h3>Fabricante: {item.fabricante}</h3>
                        <h4>Potência: {item.potencia} à {item.combustivel}</h4>
                    </div>
                ))}
            </div>

            <div className="container">
                {carrosFiltrados.map((item) => (
                    <div className="carros" key={item.id}>
                        <h2>{item.nome} {item.ano}</h2>
                        <h3>Fabricante: {item.fabricante}</h3>
                        <h4>Potência: {item.potencia} à {item.combustivel}</h4>
                        <button  onClick={() => setCarroSelecionado({...item})}>Detalhar</button>
                    </div>
                ))}
            </div>
            
            {carroSelecionado && <Detalhes item={carroSelecionado} />}
        </>
    );
};