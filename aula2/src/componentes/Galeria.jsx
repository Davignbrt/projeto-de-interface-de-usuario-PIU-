import { useState } from "react";

const imagens = [
    { src: "/pikachu.jpg", descricao: "Parabens, você escolheu o Pikachu!" },
    { src: "/charmander.jpg", descricao: "Parabens, você escolheu o Charmander!" },
    { src: "/bulbasaur.jpg", descricao: "Parabens, você escolheu o Bulbasaur!" },
    { src: "/squirtle.jpg", descricao: "Parabens, você escolheu o Squirtle!" }
];


function Galeria() {
    const [imagemSelecionada, setImagemSelecionada] = useState(null);

    return (
        <div style={{ textAlign: "center" }}>
            {/* Galeria de miniaturas */}
            <h1>Escolha o seu inicial</h1>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                {imagens.map((item, index) => (
                    <img
                        key={index}
                        src={item.src}
                        alt={item.descricao}
                        style={{ cursor: "pointer", width: "100px", height: "100px", objectFit: "cover" }}
                        onClick={() => setImagemSelecionada(item)}
                    />
                ))}
            </div>

            {/* Exibição da imagem ampliada com descrição */}
            {imagemSelecionada && (
                <div style={{ marginTop: "20px" }}>
                    <img
                        src={imagemSelecionada.src}
                        alt={imagemSelecionada.descricao}
                        style={{ width: "400px", height: "auto", objectFit: "cover" }}
                    />
                    <p style={{ fontSize: "18px", marginTop: "10px" }}>{imagemSelecionada.descricao}</p>
                </div>
            )}
        </div>
    );
}

export default Galeria;
