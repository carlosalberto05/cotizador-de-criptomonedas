import axios from "axios";
import React, { useEffect, useState } from "react";
import useCriptoMoneda from "../hooks/useCriptoMoneda";
import useMoneda from "../hooks/useMoneda";
import Error from "../components/Error";
import styled from "@emotion/styled";

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #bb371a;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
    border: none;
  }
`;

const Formulario = ({ setMoneda, setCriptoMoneda }) => {
  const [listaCripto, setListaCripto] = useState([]);
  const [error, setError] = useState(false);

  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar Américano" },
    { codigo: "MXN", nombre: "Peso Mexicano" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra Esterlina" }
  ];

  //Utilizar monedas
  const [moneda, Seleccionar] = useMoneda("Selecciona una moneda", "", MONEDAS);
  //Utilizar criptomonedas
  const [criptomoneda, SeleccionarCripto] = useCriptoMoneda(
    "Selecciona una Criptomoneda",
    "",
    listaCripto
  );

  //Hacer llamado a la API
  useEffect(() => {
    const obtenerCripto = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

      const res = await axios.get(url);
      setListaCripto(res.data.Data);
    };
    obtenerCripto();
  }, []);

  //Cotizar moneda
  const cotizarMoneda = (e) => {
    e.preventDefault();
    if (moneda === "" || criptomoneda === "") {
      setError(true);
      return;
    }
    setError(false);
    setMoneda(moneda);
    setCriptoMoneda(criptomoneda);
  };

  return (
    <form onSubmit={cotizarMoneda}>
      {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
      <Seleccionar />
      <SeleccionarCripto />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
