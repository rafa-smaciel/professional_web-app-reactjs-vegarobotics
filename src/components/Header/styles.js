import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100px;
    background: #000000;
    border-bottom: 5px solid #891A14;

    display: flex;
`
export const LeftSide = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    padding-left: 25px;
    padding-top: 5px;

    img {
        width: 180px;
        height: 180px;
    }
`
export const RightSide = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    img {
        width: 150px;
        padding-top: 0px;
        padding-right: 0px;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

    a, button {
        color: #FFF;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;

    &:hover{
        color: #FFFFFF;
    }

    span {
        background: #FFF;
        color: #891A14;
        padding: 3px 7px;
        border-radius: 50%50%;
        position: relative;
        top: -20px;
        right: 10px;
    }
    }
`