import styled from 'styled-components';

export const Container = styled.div`
    //display: block;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-size: cover;
    background-attachment: fixed;
    padding-bottom: 1px;
`;

export const BackgroundVideo = styled.video`
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
`;
