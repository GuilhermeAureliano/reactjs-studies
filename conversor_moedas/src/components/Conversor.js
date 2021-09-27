import React, {useState } from 'react';

import Input from './Input';
import './Conversor.css';

const Conversor = (props) => {

    const [moedaA, setMoedaA] = useState(0);
    const [moedaB, setMoedaB] = useState(0);

    const handleChangeInput = (evt) => {
        const value = evt.target.value;
        setMoedaA(value);
    }

    const handleClickInput = () => {
        let de_para = `${props.moedaA}_${props.moedaB}`
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=y&apiKey=7578d06f7f10152040ec`

        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(json => {
                let cotacao = json[de_para].val;
                setMoedaB(parseFloat(cotacao*moedaA).toFixed(2));
            })
    }

    return (
        <div className="conversor">
            <h2>{props.moedaA} para {props.moedaB}</h2>

            <Input type="text" onChange={handleChangeInput} />
            <Input type="button" value="Converter" onClick={handleClickInput} />
            
            <h3>{moedaB}</h3>
        </div>
    );
}
 
export default Conversor;