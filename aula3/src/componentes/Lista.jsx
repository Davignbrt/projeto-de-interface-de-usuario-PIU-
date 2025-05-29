import { carros } from "./dados";

export default function listarCarros(){
    return (
        <>
            <div>
                <h1>listagem geral</h1>
                <ul>
                    {carros.map((item, index) => (
                        <li key={index}>{item.nome} - {item.ano}</li>
                    ))}
                </ul>
            </div>
            
            <div>
                <h1>Listagem Filtrada</h1>
                <ul>
                    {carros
                        .filter((carro) => carro.ano >= 2020)
                        .map((carro, index) => (
                            <li key={index}>{carro.nome} -- {carro.ano}</li>
                        ))}
                </ul>
            </div>
        </>
    );
}
