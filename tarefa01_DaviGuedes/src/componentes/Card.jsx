import React from "react";

function Card({ nome, imagem, onClick }) {
    return (
        <div onClick={onClick} style={{ cursor: "pointer", textAlign: "center", padding: "10px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <img src={imagem} alt={nome} style={{ width: "120px", height: "120px", borderRadius: "8px" }} />
            <p>{nome}</p>
        </div>
    );
}

export default Card;
