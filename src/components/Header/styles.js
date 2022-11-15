import styled, { css } from 'styled-components';

export const Container = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    /* font-family: Bebas Neue; */
    
    width: 100%;
    height: 95px;
    padding: 10px;

    transition: all 300ms ease 0s;
    
    ${ props => props.scroll 
        ? css`
            background: #161a1e;
            padding-bottom: 8px;
            border-bottom:  2px solid #891A14;

        `
        : css `
            background: transparent;
            border-bottom:  none;
        `
    };

    &:after {
        content: '';
        position: absolute;
        height: 170px;
        right: 0px;
        left: 0px;
        top: 0px;
        transition: height 300ms ease 0s;
        background: linear-gradient(to top, 
        rgba(0, 0, 0, 0), 
        rgba(0, 0, 0, 0.03) 15%, 
        rgba(0, 0, 0, 0.125) 30%, 
        rgba(0, 0, 0, 0.25) 46%, 
        rgba(0, 0, 0, 0.4) 61%, 
        rgba(0, 0, 0, 0.553) 75%, 
        rgba(0, 0, 0, 0.694) 88%, 
        rgba(0, 0, 0, 0.8));
        z-index: -1;
        pointer-events: none;
    }
    
    z-index: 2;
`;

export const Logo = styled.a`
    display: inline-block;
    
    width: 140px;
    min-width: 80px;
 
    transition: all .2s ease 0s;
    
    img {
        max-width: 100%;
    }

    &:hover {
        opacity: .8
    }

    /* @media (max-width: 580px){
        #logo {
            width: 70%;
            height: auto;
        }
    } */
`;


export const Center = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    /* font-size: .813rem; */
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
    
    max-width: 800px;
    width: 100%;
    
    margin: 0px 20px 0px 12px;
    
    a {
        text-decoration: none;
        color: #FFFFFF;
        transition: all .2s ease 0s;

        & + a {
            margin-left: 10px;
        }

        &:hover{
            color: #891A14;
            transform: scale(1.05);
        } 
    }
`;



export const WhatsApp = styled.a`
    width: 30px;
    min-width: 15px;
    
    margin: 0px 20px 0px .5%;

    img {
        width: 100%;
        transition: all .2s ease 0s;

        &:hover {
            opacity: .8;
        }

    }
`