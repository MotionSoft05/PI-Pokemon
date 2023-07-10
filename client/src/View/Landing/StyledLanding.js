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

export const StyledDiv2 = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-attachment: fixed;
`;

export const StyledDiv3 = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const StyledDiv4 = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  text-align: center;
`;

export const ImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.img`
  height: 12vh;
  @media (min-width: 425px) {
    height: 17vh;
  }
  @media (min-width: 1024px) {
    height: 25vh;
  }
`;

export const SubTitle = styled.img`
  height: 5vh;
  @media (min-width: 425px) {
    height: 7vh;
  }
  @media (min-width: 1024px) {
    height: 9vh;
  }
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

export const ButtonImage = styled.img`
  height: 3vh;
  @media (min-width: 425px) {
    height: 5vh;
  }
  @media (min-width: 1024px) {
    height: 7vh;
  }
`;
