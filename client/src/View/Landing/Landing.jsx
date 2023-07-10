import React from "react";
import { useHistory } from "react-router-dom";
import LandingBG from "../../Media/LandingBG.mp4";
import pokemonLogo from "../../Media/pokemon-logo.png";
import pokemonSublogo from "../../Media/Pokemon_sub_logo.png";
import ButtonImg from "../../Media/LandingButton.png";
import {
  StyledSection,
  StyledDiv,
  StyledDiv2,
  StyledDiv3,
  StyledDiv4,
  ImgDiv,
  Title,
  SubTitle,
  ButtonDiv,
  StyledButton,
  ButtonImage,
} from "./StyledLanding";

function Landing() {
  const history = useHistory();
  return (
    <StyledSection>
      <StyledDiv>
        <video autoPlay loop muted>
          <source src={LandingBG} type="video/mp4" />
        </video>
        <StyledDiv2>
          <StyledDiv3>
            <StyledDiv4>
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
                  <ButtonImage src={ButtonImg} alt="" />
                </StyledButton>
              </ButtonDiv>
            </StyledDiv4>
          </StyledDiv3>
        </StyledDiv2>
      </StyledDiv>
    </StyledSection>
  );
}
export default Landing;
