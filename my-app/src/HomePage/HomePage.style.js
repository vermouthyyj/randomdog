import styled from 'styled-components';

export const Background = styled.div`
    >h1 {
        text-align: center;
        font-family: Optima;
        font-size: 40px;
    }
    background: linear-gradient(white,white,#ffce33);
    height:120%;

    border: solid 2px;
    border-color: grey;
`

export const PageWrapper = styled.div` 
    background: linear-gradient(white,white,#ffce33);
    width: 80%;
    height: 80%;
    border: solid 5px;
    border-color: grey;

    display: block;
    margin: 1% auto 5%;
`

export const ImageWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    >img {
        @media (max-width:500px) {
            width:100%;
        }
        display: inline-block;
        height: 400px;
        width: 25%;
    }
    >video {
        @media (max-width:500px) {
            width:100%;
        }
        background-size: cover;
        // display: inline-block;
        height: 400px;
        width: 25%;
    }
`;