import styled from 'styled-components';

export const Container= styled.div`
    width: 100%;
    height: 55px;
    background: #000000 /*#161a1e*/;
    border-top: 5px solid #891A14;
    justify-content: center;

    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    span{
        color: gray;
        font-weight: lighter;
        margin: 5px;
    }   
`
export const LeftSide = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;

img {
    width: 80px;
    height: 80px;
}
`

export const RightSide = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 15px;

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
    color: gray;
    font-weight: lighter;
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