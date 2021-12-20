import React from 'react';
import PropTypes from 'prop-types';
import '../../../assets/styles/button.css';

export const Button = ({text, variant, size, disabled, ...props }) => {

  return (
    <button
      type="button"
      text={text}
      className={['storybook-button', `storybook-button--${size}`, `storybook-button--${variant}`].join(' ')}
      disabled={disabled}
      {...props}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),  
  onClick: PropTypes.func,
};

Button.defaultProps = {
  size: 'medium',
  onClick: undefined,
};
