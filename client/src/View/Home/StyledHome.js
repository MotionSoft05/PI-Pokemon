import styled from "styled-components";

export const StyledSection = styled.section`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
`;

export const StyledDiv = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: auto;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
`;
