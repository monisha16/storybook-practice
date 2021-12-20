import React from "react";
import '../../../assets/styles/textField.css';

export const BasicInput = (props) => {
    return (
        <div className="basic-input">
        <label>{props.label}: </label>
            <input disabled={props.disabled} className="input-field" style={{ width: props.width }} placeholder={props.placeholder} type="text" />
        </div>
        
    );
};

