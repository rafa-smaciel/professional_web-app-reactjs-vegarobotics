import styled from 'styled-components';

export const Container = styled.div`
    /* display: block; */
    /* flex-direction: column; */
    width: 100%;
    height: 100%;
    /* background-size: cover; */
`;

export const Video = styled.div`
    /* opacity: 50%; */
    /* z-index: 2; */

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

export const Text = styled.div`

    a {
        color: #FFF;
        font-weight: bold;
        text-decoration: none;
        margin: 0 auto;
    }
`;