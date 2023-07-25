import styled from 'styled-components';
import Dark_Type_Icon from '../../Media/Dark_Type_Icon.png';
import Electric_Type_Icon from '../../Media/Electric_Type_Icon.png';
import Fairy_Type_Icon from '../../Media/Fairy_Type_Icon.png';
import Fighting_Type_Icon from '../../Media/Fighting_Type_Icon.png';
import Ground_Type_Icon from '../../Media/Ground_Type_Icon.png';
import Ice_Type_Icon from '../../Media/Ice_Type_Icon.png';
import Normal_Type_Icon from '../../Media/Normal_Type_Icon.png';
import Poison_Type_Icon from '../../Media/Poison_Type_Icon.png';
import Psychic_Type_Icon from '../../Media/Psychic_Type_Icon.png';
import Rock_Type_Icon from '../../Media/Rock_Type_Icon.png';
import Steel_Type_Icon from '../../Media/Steel_Type_Icon.png';
import Water_Type_Icon from '../../Media/Water_Type_Icon.png';
import Grass_Type_Icon from '../../Media/Grass_Type_Icon.png';
import Fire_Type_Icon from '../../Media/Fire_Type_Icon.png';
import Bug_Type_Icon from '../../Media/Bug_Type_Icon.png';
import Flying_Type_Icon from '../../Media/Flying_Type_Icon.png';

const typeColors = {
    normal: {
        color: '#d4d4d0',
        image: Normal_Type_Icon,
    },
    fire: {
        color: '#ff7700',
        image: Fire_Type_Icon,
    },
    water: {
        color: '#1947ff',
        image: Water_Type_Icon,
    },
    grass: {
        color: '#36ff1c',
        image: Grass_Type_Icon,
    },
    electric: {
        color: '#ffdb49',
        image: Electric_Type_Icon,
    },
    poison: {
        color: '#a552cc',
        image: Poison_Type_Icon,
    },
    bug: {
        color: '#51ac40',
        image: Bug_Type_Icon,
    },
    flying: {
        color: '#a1e1ff',
        image: Flying_Type_Icon,
    },
    ground: {
        color: '#f1af2c',
        image: Ground_Type_Icon,
    },
    fairy: {
        color: '#ea00ff',
        image: Fairy_Type_Icon,
    },
    fighting: {
        color: '#ff0000',
        image: Fighting_Type_Icon,
    },
    psichic: {
        color: '#ff9090',
        image: Psychic_Type_Icon,
    },
    rock: {
        color: '#734b0c',
        image: Rock_Type_Icon,
    },
    steel: {
        color: '#b1b1b1',
        image: Steel_Type_Icon,
    },
    ice: {
        color: '#00bbff',
        image: Ice_Type_Icon,
    },
    dark: {
        color: '#4f4f4f',
        image: Dark_Type_Icon,
    },

    // Add more types and colors as needed
};

export const CardContainer = styled.div`
    background-color: #74747476; /* Amarillo */
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    width: 28rem; /* Adjust the width as per your requirement */
    height: auto; /* Adjust the height as per your requirement */

    &:hover {
        transform: scale(1.02);
    }
`;

export const AllDiv = styled.div`
    display: flex;
    flex-direction: row;
`;

export const InfoDiv = styled.div`
    width: 10rem;
`;

export const Name = styled.h2`
    color: white;
    font-size: 25px;
    margin-bottom: 6px;
    text-align: center;
    font-family: 'Arial', sans-serif;
`;
export const TypesDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    width: 14rem;
`;

export const TypesDivDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: auto; /* Add this line */
`;

export const Types = styled.p`
    font-size: 1.59rem;
    text-align: center;
    font-family: 'Arial', sans-serif;
    background-color: ${(props) => typeColors[props.type].color};

    color: black;
`;

export const Image = styled.img`
    margin-left: 3rem;
    max-width: 100%;
    height: 10rem;
`;
export const TypeImage = styled.img`
    max-width: 100%;
    height: 1.85rem;
    background-color: ${(props) => typeColors[props.type].color};
`;
