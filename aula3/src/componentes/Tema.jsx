import { useEffect, useState } from "react";

export default function Tema() {
    const [temaEscuro, setTemaEscuro] = useState(
        localStorage.getItem("tema") === "escuro"
    );

    useEffect(() => {
        document.body.className = temaEscuro ? "tema-escuro" : "";
        localStorage.setItem("tema", temaEscuro ? "escuro" : "claro");
    }, [temaEscuro]);

    function handleClick() {
        setTemaEscuro(!temaEscuro);
    }

    return (
        <>
            <div className="mudar-tema">
                <h1>Alterar Tema</h1>
                <button onClick={handleClick}>Mudar Tema</button>
            </div>
        </>
    );
}