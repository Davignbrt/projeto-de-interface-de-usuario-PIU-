import React from "react";

export default function Detalhes({ item }) {
   if (!item) return null;

   return (
      <div className="detalhar-carro">
         <img src={item.imagem} alt={`Imagem do ${item.nome}`} />
         <h1>{item.nome} - {item.ano}</h1>
         <h3>Potência: {item.potencia} à {item.combustivel}</h3>
      </div>
   );
}
