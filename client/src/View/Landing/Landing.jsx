import React from "react";
import { useHistory } from "react-router-dom";
import LandingBG from "../../Media/LandingBG.mp4";
import { StyledSection, StyledDiv } from "./StyledLanding";

function Landing() {
  const history = useHistory();
  return (
    <StyledSection>
      <StyledDiv>
        <video autoPlay loop muted>
          <source src={LandingBG} type="video/mp4" />
        </video>
        <div></div>
      </StyledDiv>
    </StyledSection>
  );
}
export default Landing;
