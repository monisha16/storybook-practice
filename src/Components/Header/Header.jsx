import React from 'react';
import PropTypes from 'prop-types';

import { LinkButton } from '../Inputs/Buttons/LinkButton';
import '../../assets/styles/header.css';
import Heiwa from '../../assets/icon/heiwa.svg'

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className="wrapper">
      <div>
        <img src={Heiwa} alt="heiwa-logo" style={{height:'2rem'}} />
        <h1>Heiwa</h1>
      </div>
      <div>
        {user ? (
          <LinkButton onClick={onLogout} text="Log out" />
        ) : (
          <div style={{display:'flex', flexDirection:'row' }}>
            <LinkButton onClick={onLogin} text="Log in" /> |
            <LinkButton onClick={onCreateAccount} text="Sign up" />
          </div>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
