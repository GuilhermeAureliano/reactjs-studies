import React from 'react';

const Input = (props) => {
    return ( 
        <input
            type = {props.type}
            value = {props.value}
            onChange = {props.onChange}
            onClick = {props.onClick}
        >
        </input>
    );
}
 
export default Input;