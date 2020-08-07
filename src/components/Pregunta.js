import React, { Fragment, useState } from 'react';
import PropTypes from "prop-types";
import Error from "./Error";

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {

    //DEFINIR EL STATE
    
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error,  guardarError ] = useState(false);

    // funcion que lee el presupuesto

    const definirPresupuesto = e => {
           guardarCantidad(parseInt(e.target.value,10)); 
    }
    // Submit para definir el presupuesto

    const agregarPresupuesto = e => {
        e.preventDefault();

        // Validar
        if(cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }

        // Si pasa la validación

        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);

    }


    return ( 
        <Fragment>
            <h2>Ingresa tu presupuesto</h2>

            {error ? <Error mensaje="El Presupuesto es Incorrecto" /> : null }
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ingresa tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="u-full-width button-primary"
                    value="Definir Presupuesto"

                />
            </form>
        </Fragment>
     );
}
 
Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}


export default Pregunta;