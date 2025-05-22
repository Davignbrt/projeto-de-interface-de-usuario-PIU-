import React from "react";

function Detalhes({ personagem }) {
    if (!personagem) return null;

    return (
        <div style={{ marginTop: "20px", textAlign: "center", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h2>{personagem.nome}</h2>
            <img src={personagem.imagem} alt={personagem.nome} style={{ width: "300px", height: "auto", borderRadius: "8px" }} />
            <p>{personagem.descricao}</p>
        </div>
    );
}

export default Detalhes;
