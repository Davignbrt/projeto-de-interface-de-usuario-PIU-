import React from "react";

// função que pega os valores da lista
function Card({ nome, imagem, onClick }) {
    return (
        <div onClick={onClick} style={{ cursor: "pointer", textAlign: "center", padding: "10px", border: "1px solid #ccc", borderRadius: "8px" }}>
            {/* o img pega a imagem da lista  */}
            <img src={imagem} alt={nome} style={{ width: "120px", height: "120px", borderRadius: "8px" }} />
            <p>{nome}</p>
        </div>
    );
}

export default Card;
