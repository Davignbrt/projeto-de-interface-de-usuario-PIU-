import { useState } from "react";
import { carros } from "./dados";
import Detalhes from "./Detalhes";

export default function ListarCarros() {
    const [carroSelecionado, setCarroSelecionado] = useState(null);

    return (
        <>
            <div className="container">
                {carros.map((item) => (
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