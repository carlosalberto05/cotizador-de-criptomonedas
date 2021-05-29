import React from "react";
import styled from "@emotion/styled";

const ResultadoDiv = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;

const Precio = styled.p`
  font-size: 30px;

  span {
    font-weight: bold;
  }
`;

const Info = styled.p`
  font-size: 18px;

  span {
    font-weight: bold;
  }
`;

const Cotizacion = ({ resultado }) => {
  if (Object.keys(resultado).length === 0) return null;
  return (
    <ResultadoDiv>
      <Precio>
        El precio es: <span>{resultado.PRICE}</span>
      </Precio>
      <Info>Precio más alto del día: {resultado.HIGHDAY}</Info>
      <Info>Precio más bajo del día: {resultado.LOWDAY}</Info>
      <Info>
        Variación últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span>
      </Info>
      <Info>
        Última actualización: <span>{resultado.LASTUPDATE}</span>
      </Info>
    </ResultadoDiv>
  );
};

export default Cotizacion;
