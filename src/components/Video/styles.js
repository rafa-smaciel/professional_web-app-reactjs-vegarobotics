import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70vh;

    @media (min-width: 780px){
        #videoBanner {
            width: 100%;
            height: 110%;
            object-fit: cover;
        }
    }
`;