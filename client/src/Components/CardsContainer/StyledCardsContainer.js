import styled from "styled-components";

export const Container = styled.div`
  margin: 3rem 1rem auto 1rem;
  max-width: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

export const PaginationContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

// export const StyledA = styled.a`
//     display: block;
//     margin: 2rem 4rem;
//     font-size: 1.8rem;
//     color: white;
//     text-decoration: none;
//     &:hover {
//         text-decoration: underline;
//     }
// `;

// export const BurgerButton = styled.button`
//     position: fixed;
//     z-index: 100;
//     top: 1rem;
//     right: 1rem;
//     padding: 4px;
//     border: black solid 1px;
//     background: white;
//     cursor: pointer;
// `;

// export const MenuUl = styled.ul`
//     position: fixed;
//     transform: translateY(-100%);
//     transition: transform 0.2s;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     z-index: 99;
//     background: black;
//     color: white;
//     list-style: none;
//     padding-top: 4rem;
// `;

// export const LiOpcions = styled.li``;

export const PageButton = styled.button`
  padding: 8px 16px;
  margin: 0 3px;
  background-color: ${(props) => (props.active ? "#000" : "#eee")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
