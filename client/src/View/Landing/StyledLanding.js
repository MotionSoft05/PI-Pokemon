import styled from "styled-components";

export const StyledDiv = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;

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

export const StyledSection = styled.section`
  position: relative;
`;
