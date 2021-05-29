import { useEffect, useState } from "react";
import "./styles.css";
import styled from "@emotion/styled";
import imagen from "./cripto.png";
import Formulario from "./components/Formulario";
import axios from "axios";
import Cotizacion from "./components/Cotizacion";
import Spiner from "./components/Spiner";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
`;

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #d5dbb3;
    display: block;
  }
`;

export default function App() {
  const [moneda, setMoneda] = useState("");
  const [criptoMoneda, setCriptoMoneda] = useState("");
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  console.log(resultado);

  useEffect(() => {
    const cotizarCripto = async () => {
      //evitamos la primera ejecución
      if (moneda === "") return;
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;
      const res = await axios.get(url);
      setCargando(true);

      setTimeout(() => {
        setCargando(false);
        setResultado(res.data.DISPLAY[criptoMoneda][moneda]);
      }, 3000);
    };
    cotizarCripto();
  }, [moneda, criptoMoneda]);

  //Renderizar cotizacion o spiner

  const componente = cargando ? (
    <Spiner />
  ) : (
    <Cotizacion resultado={resultado} />
  );

  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt="Cript" />
      </div>
      <div>
        <Heading>Cotizar Criptomonedas</Heading>
        <Formulario setMoneda={setMoneda} setCriptoMoneda={setCriptoMoneda} />

        {componente}
      </div>
    </Contenedor>
  );
}
