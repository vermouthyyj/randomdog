import styled from 'styled-components';

export const ImageWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    >img {
        @media (max-width:500px) {
            width:100%;
        }
        display: inline-block;
        height: 500px;
        width: 25%;
    }
    >video {
        @media (max-width:500px) {
            width:100%;
        }
        display: inline-block;
        height: 500px;
        width: 25%;
    }
`;

export const ButtonWrapper = styled.div`
    display: block;
    width: 30%;
    height: 50px;
    line-height: 50px;
    border: solid;
    border-radius: 5px;
    position: relative;
    margin: 5% auto;
    text-align:center;
`;