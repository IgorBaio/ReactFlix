import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/BaiusFlixLogo.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
      <img src={Logo} className="Logo" alt="BaiusFlixLogo"/>
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
