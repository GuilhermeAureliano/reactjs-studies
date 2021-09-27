import React from 'react';

import './Input.css';

const Input = (props) => {
    return (
        <div className="input">
            <label>{props.title}: </label>
            <input 
            type = {props.type} 
            onChange = {props.onChange}
            ></input>
            <br/>
        </div>
    );
}
 
export default Input;