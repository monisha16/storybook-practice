import React from 'react';
import '../../../assets/styles/button.css';

export const LinkButton = ({ text, disabled, ...rest}) => {
    const className = 'link-button';
    return(
        <div className={className}>
            <button disabled={disabled}{...rest} className={'text'}>
                {text}
            </button>
        </div>
    );
};

