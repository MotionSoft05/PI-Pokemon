import React from "react";
import HomeBG from "../../Media/ClientBG.mp4";
import { StyledSection, StyledDiv } from "./StyledHome";

function Home() {
  return (
    <StyledSection>
      <StyledDiv>
        <video autoPlay loop muted>
          <source src={HomeBG} type="video/mp4" />
        </video>
      </StyledDiv>
    </StyledSection>
  );
}
export default Home;
