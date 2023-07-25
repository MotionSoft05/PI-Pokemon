import styled from 'styled-components';

export const BackgroundVideo = styled.video`
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
`;

export const ImgDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const Title = styled.img`
    height: 30vh;
`;

export const SubTitle = styled.img`
    margin-top: 20px;
`;

export const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20rem;
`;

export const StyledButton = styled.button`
    border: none;
    background-color: transparent;
    animation: blink 1s infinite;
    cursor: pointer;
    @keyframes blink {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

export const Footer = styled.h3`
    color: black;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
`;
