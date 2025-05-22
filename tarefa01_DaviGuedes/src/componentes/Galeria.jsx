import React from "react";
import Card from "./Card";
import { personagens } from "./data";

function Galeria({ setPersonagemSelecionado }) {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
            {personagens.map((personagem, index) => (
                <Card key={index} {...personagem} onClick={() => setPersonagemSelecionado(personagem)} />
            ))}
        </div>
    );
}

export default Galeria;
// ekjjfrewjfrjew