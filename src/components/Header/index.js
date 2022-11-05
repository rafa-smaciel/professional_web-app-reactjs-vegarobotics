import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

import logo from '../../assets/VEGA_6.png';
import informações from '../../assets/Contatos-edit.png';

function Header() {
  return (
    <S.Container>
      <S.LeftSide>
        <a href="/">
        <img src={logo} alt="VegaRobotics" />
        </a>
      </S.LeftSide>
      <Link to="/vixem">VIXEM</Link>
      <S.RightSide>
        <a href="https://wa.me/+551151998949">
           <img src={informações} alt="Informações" />
        </a>
      </S.RightSide>
    </S.Container>
  );
}

export default Header;