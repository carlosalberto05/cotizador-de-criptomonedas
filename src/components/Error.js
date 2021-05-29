import React from "react";
import styled from "@emotion/styled";

const MensajeError = styled.p`
  background-color: #b7322c;
  padding: 1rem;
  color: #fff;
`;

const Error = ({ mensaje }) => {
  return <MensajeError>{mensaje}</MensajeError>;
};

export default Error;
