import { carros } from "./dados";

export default function listarCarros(){
    return (
        <>
            <div>
                <ul>
                    {carros.map((item, index) => (
                        <li key={index}>{item.nome} - {item.ano}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}
