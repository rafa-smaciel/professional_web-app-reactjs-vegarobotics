import styled, { css } from 'styled-components';

export const Container = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    
    display: flex;
    border-bottom: 5px solid #891A14;
    
    width: 100%;
    padding: 10px;
    height: 95px;
    background: #161a1e;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* font-family: Bebas Neue; */

    z-index: 2;
`;

export const Logo = styled.a`
    /* display: inline-block; */

    /* width: 100%; */
    /* height: 75px; */
    /* width: 50px; */

    /* align-items: center; */
    /* padding-left: 25px; */
    /* padding-top: 5px; */

    /* margin-right: 10px; */

    display: inline-block;
    /* padding: 0; */
    /* margin: 4px 14px 5px 19px; */
    /* max-height: 95px; */
    /* font-size: 0; */
    /* transition: all .2s ease 0s; */
    
    img {
        width: 110px;
        height: 110px
        /* display: block; */
        /* width: 100%; */
    }

    ${props => props.logged &&
        css`
            margin: 0px 32px 0px 0px;
        img {
            width: 79px;
            height: 48px;
        }
        `
    }



/* 
    img {
        width: 150px;
        height: 150px;
    } */

    /* @media (max-width: 580px){
        #logo {
            width: 70%;
            height: auto;
        }
    } */
`;


export const Center = styled.div`
    /* width: 100%; */
    /* height: 100px; */
    
    /* margin-left: 0px; */
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 700px;
    width: 100%;
    
    
    a {
        text-decoration: none;
        color: #FFFFFF;

        span {

    }

        
        /* & + a { */
            /* background: red; */
            /* margin-left: 40px; */
        /* } */
        /* font-weight: bold; */
        /* text-decoration: none; */
        /* margin: 0 20px; */

        &:hover{
            transition: 0.25s;
            color: #891A14;
        } 
        
        
    }
`;



export const RightSide = styled.div`
    /* width: 50%; */
    /* display: flex;
    align-items: center;
    justify-content: flex-end; */

    img {
        width: 50px;
        /* height: 40px; */
        /* padding-top: 0px; */
        /* padding-right: 20px; */

    }

    /* button {
        background: none;
        border: none;
        cursor: pointer;
    } */

    a, button {
        /* color: #FFF;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px; */
/* 
    &:hover{
        transition: opacity .3s;
    } */

    /* span {
        background: #FFF;
        color: #891A14;
        padding: 3px 7px;
        border-radius: 50%50%;
        position: relative;
        top: -20px;
        right: 10px;
    } */
    }
`