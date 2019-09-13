import React from 'react';
import logo from '../assets/facebook.svg';
import user from '../assets/user.svg';

function Header() {
  return (
    <div class="header">
      <img src={logo} alt="facelogo" />
      <div class="perifl">
        <strong>Meu Perfil</strong>
        <img class="user" src={user} alt="user" />
      </div>
    </div>
  );
}

export default Header;
