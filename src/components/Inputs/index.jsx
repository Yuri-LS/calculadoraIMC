import { useState } from 'react';

import './inputs.css'

const Inputs = () => {
    let [peso, setPeso] = useState(0);
    let [alturaEmCm, setAlturaEmCm] = useState(0);
    let [calculoImc, setCalculoImc] = useState(null);

    const calcularImc = () => {
        const alturaEmM = alturaEmCm / 100;
        const imc = peso / (alturaEmM * alturaEmM);
        setCalculoImc(imc);
    };

    return (
        <>
            <form>
                <span>Peso (Kg):</span>
                <input 
                    type="number" 
                    onChange={evento => setPeso(parseInt(evento.target.value) || 0)} 
                />
                <span>Altura (cm):</span>
                <input 
                    type="number" 
                    onChange={evento => setAlturaEmCm(parseInt(evento.target.value) || 0)} 
                />
            </form>
            <div className='button'>
                <button type="button" onClick={calcularImc}>Calcular</button>
            </div>
            {calculoImc !== null && (
                <p>O resultado é {calculoImc.toFixed(2)}, confira a sua classificação na tabela abaixo:</p>
            )}
        </>
    );
};


export default Inputs;