import React from 'react';
import * as S from './styles';
import logo from '../../assets/logo.svg';
// import vixem from '../../assets/vixembeta.png';

function Footer() {
    return (
        <S.Container>
            <S.LeftSide>
                <span>® Vega Robotics. Todos os Direitos Reservados.</span> 
            </S.LeftSide>
            <S.Center>
                <img src={logo} className="App-logo" alt="logo"/>
                <footer>Powered React</footer>
            </S.Center>
            <S.RightSide>
                <a href="mailto:vega@vegarobotics.com.br">vega@vegarobotics.com.br</a>
            </S.RightSide>
        </S.Container>
    )
}
export default Footer;