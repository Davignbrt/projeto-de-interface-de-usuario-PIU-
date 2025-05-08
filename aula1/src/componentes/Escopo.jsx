import { useState } from "react";

function Escopo() {
  const cores = ["blue", "green", "red", "purple", "orange"];
  const [indice, setIndice] = useState(0);

  const mudarCor = () => {
    setIndice((indice + 1) % cores.length); // volta ao início quando chega no final
  };

  return (
    <>
      <div>
        <h1 style={{ color: cores[indice] }}>Texto colorido</h1>
      </div>
      <div>
        <button onClick={mudarCor}>Mudar cor</button>
      </div>
    </>
  );
}

export default Escopo;
