import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNav = styled.nav`
  margin-top: 2vh;
  background-color: transparent;
`;
export const StyledDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem /* 16px */;
  padding-right: 1rem;
`;

export const StyledDiv3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
`;

export const StyledDiv3Sub1 = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledDiv3Sub1sub1 = styled.div``;

export const StyledDiv3Sub1sub2 = styled.div`
  display: flex;
  padding-top: 2vh;
  margin-left: auto;
`;

export const StyledDiv3Sub2 = styled.div`
  display: flex;
`;

export const StyledImg = styled.img`
  width: 7vh;
  height: auto;
`;

export const StyledLink = styled(Link)`
  padding-left: 0.75rem /* 12px */;
  padding-right: 0.75rem /* 12px */;
  padding-top: 0.5rem /* 8px */;
  padding-bottom: 0.5rem /* 8px */;

  text-decoration: none;
  font-size: 1.5rem;
  color: #ff0505;
  cursor: pointer;

  h2 {
    font-size: 2vh;
  }
`;

export const StyledSearch = styled.div`
  input[type="search"] {
    /* width: 300px; */
    height: 30px;
    border-radius: 15px;
    margin-right: 10px;
    padding-left: 10px;
    max-width: 13vh;
  }
  button {
    display: none;
    @media (min-width: 768px) {
      display: inline;

      background-color: #ff0505;
      color: black;
      border: none;
      border-radius: 15px;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      padding: 10px 15px;
      &:hover {
        background-color: white;
      }
    }
  }

  input {
  }
`;
