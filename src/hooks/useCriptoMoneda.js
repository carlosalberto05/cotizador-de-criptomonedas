import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  font-size: 1.2rem;
  border: none;
`;

const useCriptoMoneda = (label, estadoInicial, opciones) => {
  const [state, setState] = useState(estadoInicial);

  const SeleccionarCripto = () => {
    return (
      <Fragment>
        <Label>{label}</Label>
        <Select onChange={(e) => setState(e.target.value)} value={state}>
          <option>- Selcciona -</option>
          {opciones.map((opcion) => {
            return (
              <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>
                {opcion.CoinInfo.FullName}
              </option>
            );
          })}
        </Select>
      </Fragment>
    );
  };

  return [state, SeleccionarCripto];
};

export default useCriptoMoneda;
