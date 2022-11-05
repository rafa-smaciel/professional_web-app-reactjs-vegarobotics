import styled from 'styled-components';

export const Container= styled.div`
    width: 100%;
    height: 100px;
    background: #000000;
    border-top: 5px solid #891A14;
    justify-content: space-around;

    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    span{
        color: #FFF;
        font-weight: bold;
    }   
`
export const LeftSide = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 50px;
    /* padding-top: 5px; */

img {
    width: 80px;
    height: 80px;
}
`
export const RightSide = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    img {
    width: 80px;
    height: 80px;
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