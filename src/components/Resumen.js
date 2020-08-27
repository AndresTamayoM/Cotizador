import React from "react";
import styled  from '@emotion/styled';
import { primerMayuscula } from '../Helper';
import PropTypes from 'prop-types';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;
const Resumen = ({ datos }) => {
  //extraer de datos
  const { marca, year, plan } = datos;

  if (marca === "" || year === "" || plan === "") return null; //ve que esta vacia y el componente no se carga(no llega el return principal)

  return (
    <ContenedorResumen>
      <h2>Resumen de cotizacion</h2>
      <ul>
        <li>Marca: { primerMayuscula(marca) }</li>
        <li>Plan: { primerMayuscula(plan) }</li>
        <li>Año del auto: {year}</li>
      </ul>
    </ContenedorResumen>
  );
};

Resumen.propTypes = {
  datos: PropTypes.object.isRequired
}

export default Resumen;
