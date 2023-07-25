import styled from 'styled-components';

export const BackgroundVideo = styled.video`
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
`;

export const MainDiv = styled.div`
    background-color: #000000b9;
    font-family: 'Ubuntu', sans-serif;
    width: 500px;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const StyledH1 = styled.h1`
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    margin-top: 0;
    letter-spacing: 5px;
    text-shadow: 1px 1px 1px #333;
`;

export const StyledForm = styled.div`
    text-align: center;
    margin: 20px 0;
    position: relative;
`;

export const StyledInput = styled.input`
    padding: 5px 0;
    border: 0;
    border-bottom: 1px solid #fff;
    background: transparent;
    width: 50%;
    text-align: center;
    outline: none;
    color: #fff;
    font-family: 'Ubuntu', sans-serif;
`;

export const FormsLocation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const StyledSelect = styled.select`
    appearance: none;
    border: 0;
    outline: 0;
    font: inherit;
    /* Personalize */
    width: 10em;
    height: 3em;
    padding: 0 4em 0 1em;
    border-radius: 0.25em;
    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
`;

export const StyledOptions = styled.option`
    color: inherit;
    background-color: $option;

    /* Remove focus outline */
    &:focus {
        outline: none;
    }
    /* Remove IE arrow */
    &::-ms-expand {
        display: none;
    }
`;

export const StyledH3 = styled.h3`
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    margin-top: 0;
    letter-spacing: 5px;
    text-shadow: 1px 1px 1px #333;
`;

export const StyledButton = styled.button`
    display: block;
    margin-top: 2em;
    margin-left: 7.5rem;
    margin-right: auto;
    width: 50%;
    padding: 12px 0;
    font-family: inherit;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    background-color: #ff00006b;
    border: 0;
    border-radius: 35px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

    &:hover {
        box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
        transform: translate(0, -5px);
    }
`;
