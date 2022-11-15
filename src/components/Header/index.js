import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

import logo from '../../assets/VEGA_6.png';
import whatsapp from '../../assets/whatsapp.png';
import logoVega  from '../../assets/logoVega.svg';

function Header() {
  const [ scroll, setScroll ] = useState();

  const handleScroll = () => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 90) {
        setScroll(true)
      }else setScroll(false);
    });
    return () => {
      window.removeEventListener('scroll')
    };
  }

  useEffect(() => {
    handleScroll();
  },[])

  return (
    <S.Container scroll={scroll}>
      <S.Logo href="/">
        <img src={logoVega} alt="VegaRobotics" id="logo"/>
      </S.Logo>

      <S.Center>
        <Link to="/">Machines</Link>
        <Link to="/">Components</Link>
        <Link to="/">Services</Link>
        <Link to="/">Support</Link>
        <Link to="/algoritmos">Algorithms</Link>
        <Link to="/">Contact</Link>
        
        <a href="https://rwelectrodes.com/" target="_blank" rel="noreferrer" >
          <span>Shop</span>
        </a>
        <Link to="/vixem">BETA</Link>
      </S.Center>

      <S.WhatsApp href="https://wa.me/+551151998949" target="_blank" rel="noreferrer">
        <img src={whatsapp} alt="whatapp" />
      </S.WhatsApp>
    </S.Container>
  );
}

export default Header;