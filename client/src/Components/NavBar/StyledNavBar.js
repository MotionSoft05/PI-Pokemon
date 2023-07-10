import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 15px;
  margin-right: 2rem;
`;

export const StyledTitle = styled.div`
  h1 {
    color: #ff0505;
    font-size: 2.5rem;
  }
`;
export const StyledImg = styled.img`
  width: 100px;
  height: auto;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  color: #ff0505;
  cursor: pointer;
  margin: 0 10rem;
`;

export const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  input[type="search"] {
    width: 300px;
    height: 30px;
    border-radius: 15px;
    margin-right: 10px;
    padding-left: 10px;
  }
  button {
    background-color: #ff0505;
    color: black;
    border: none;
    border-radius: 15px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    padding: 10px 15px;
    &:hover {
      background-color: #000000;
      color: white;
    }
  }
`;
