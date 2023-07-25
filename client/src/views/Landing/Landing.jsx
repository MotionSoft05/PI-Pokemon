import {
  // StyledLanding,
  BackgroundVideo,
  Title,
  SubTitle,
  ImgDiv,
  StyledButton,
  ButtonDiv,
  Footer,
} from "./StyleLanding";
import React from "react";
import { useHistory } from "react-router-dom";
import LandingBG from "../../Media/LandingBG.gif";
import pokemonLogo from "../../Media/pokemon-logo-png-1428.png";
import pokemonSublogo from "../../Media/Pokemon_sub_logo.png";
import ButtonImg from "../../Media/NewImgB.png";
//hola
function Landing() {
  const history = useHistory();
  return (
    <>
      <BackgroundVideo autoPlay loop muted playsInline>
        <source src={LandingBG} type="video/mp4" />
      </BackgroundVideo>
      <div>
        <ImgDiv>
          <Title src={pokemonLogo} alt="" />
          <SubTitle src={pokemonSublogo} alt="" />
        </ImgDiv>

        <ButtonDiv
          data-message="START"
          onClick={() => {
            history.push("/home");
          }}
        >
          <StyledButton>
            <img src={ButtonImg} alt="" />
          </StyledButton>
        </ButtonDiv>

        <Footer>By: Kevin Barrios</Footer>
      </div>
    </>
  );
}

export default Landing;
