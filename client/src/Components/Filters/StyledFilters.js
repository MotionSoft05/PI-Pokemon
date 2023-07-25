import styled from 'styled-components';

export const AllFilter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2rem 12rem auto 15rem;
`;
export const StyledButton = styled.button`
    background-color: #ff0000;
    color: #fff;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #ffc4b7;
    }

    &:active {
        transform: translateY(1px);
    }

    &:focus {
        outline: none;
        box-shadow: 0px 0px 5px #4caf50;
    }
`;

export const StyledSelect = styled.select`
    appearance: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background-color: #fff;
    color: #333;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: #f2f2f2;
    }

    &:focus {
        outline: none;
        box-shadow: 0px 0px 5px #4caf50;
    }

    option {
        background-color: #fff;
        color: #333;
        font-size: 1rem;
        cursor: pointer;
    }
`;
