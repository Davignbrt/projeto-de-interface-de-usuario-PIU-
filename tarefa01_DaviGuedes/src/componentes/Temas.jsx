import { useState, useEffect } from "react";

function Tema() {
    const [tema, setTema] = useState("black");
    const [letra, setLetra] = useState("gray");

    useEffect(() => {
        document.body.style.backgroundColor = tema;
        document.body.style.color = letra;
    }, [tema, letra]);

    function handleClick() {
        setTema(tema === "black" ? "gray" : "black");
        setLetra(letra === "gray" ? "black" : "gray");
    }

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>mudar tema</h1>
            <button onClick={handleClick}>Alternar Tema</button>
        </div>
    );
}

export default Tema;