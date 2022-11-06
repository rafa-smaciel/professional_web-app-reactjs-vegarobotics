import styled from 'styled-components';

export const Container = styled.div`
    display: block;
    flex-direction: column;
    width: 100%;
    height: 100%;
    /* background-size: cover; */
    opacity: 50%;

    @media (min-width: 1000px){
        #videoBanner {
            width: 100%;
        }
    }

    @media (max-width: 700px){
        #videoBanner {
            width: 100%;
        }
    }
`;