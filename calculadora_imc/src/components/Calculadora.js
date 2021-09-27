import React, {useState } from 'react';

import Input from './Input';

import './Calculadora.css';

const Calculadora = () => {

    const [nome, setNome] = useState();
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [imc, setImc] = useState(0);
    const [forma, setForma] = useState();

    const handleNameChange = (evt) => {
        setNome(evt.target.value);
    }

    const handleAlturaChange = (evt) => {
        setAltura(evt.target.value);
    }

    const handlePesoChange = (evt) => {
        setPeso(evt.target.value);
    }

    const handleClickButton = () => {
        let value = (peso / (altura**2)).toFixed(2)
        setImc(value);
        grauDoImc(value);
    }

    const grauDoImc = (imc) => {
        let newForma = `Magreza grave`
        if (imc > 16 && imc < 17) {
            newForma = `Magreza grave`;
        } else if (imc > 16 && imc < 17) {
            newForma = `Magreza moderada`;
        } else if (imc > 17 && imc < 18.5) {
            newForma = `Magreza leve`;
        } else if (imc > 18.5 && imc < 25) {
            newForma = `Saudável`;
        } else if (imc > 25 && imc < 30) {
            newForma = `Sobrepeso`;
        } else if (imc > 30 && imc < 35) {
            newForma = `Obesidade Grau 1`;
        } else if (imc > 35 && imc < 40) {
            newForma = `Obesidade Grau 2 (severa)`;
        } else if (imc >= 40) {
            newForma = `Obesidade grau 3 (mórbida)`;
        }
        setForma(newForma);
    }

    return (
        <div className="calculadora">
            <h1>Calculadora IMC </h1>
            <Input title="Nome" type="text" onChange={handleNameChange} />
            <Input title="Altura (m)" type="text" onChange={handleAlturaChange}/>
            <Input title="Peso (kg)" type="text" onChange={handlePesoChange}/>
            <button onClick={handleClickButton}>Calcular</button>

            <div className="resposta">
                {forma ? <span> {nome} seu IMC é {imc} e você está com {forma}. </span> : null}
            </div>
        </div>
    );
}
 
export default Calculadora;