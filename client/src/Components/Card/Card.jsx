import {
    CardContainer,
    Name,
    Types,
    Image,
    TypesDiv,
    TypesDivDiv,
    InfoDiv,
    AllDiv,
    TypeImage,
} from './StyleCard';
import { Link } from 'react-router-dom';
import React from 'react';
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

const typeImages = {
    normal: {
        image: Normal_Type_Icon,
    },
    fire: {
        image: Fire_Type_Icon,
    },
    water: {
        image: Water_Type_Icon,
    },
    grass: {
        image: Grass_Type_Icon,
    },
    electric: {
        image: Electric_Type_Icon,
    },
    poison: {
        image: Poison_Type_Icon,
    },
    bug: {
        image: Bug_Type_Icon,
    },
    flying: {
        image: Flying_Type_Icon,
    },
    ground: {
        image: Ground_Type_Icon,
    },
    fairy: {
        image: Fairy_Type_Icon,
    },
    fighting: {
        image: Fighting_Type_Icon,
    },
    psichic: {
        image: Psychic_Type_Icon,
    },
    rock: {
        image: Rock_Type_Icon,
    },
    steel: {
        image: Steel_Type_Icon,
    },
    ice: {
        image: Ice_Type_Icon,
    },
    dark: {
        image: Dark_Type_Icon,
    },

    // Add more types and colors as needed
};

function Card(props) {
    const { id, name, image, types } = props;

    const typeArray = types.split(' ');

    return (
        <CardContainer>
            <Link to={`/details/${id}`} style={{ textDecoration: 'none' }}>
                <AllDiv>
                    <InfoDiv>
                        <div>
                            <Name>
                                {name.charAt(0).toUpperCase() + name.slice(1)}
                            </Name>
                            <TypesDiv>
                                {typeArray.length > 1 ? (
                                    typeArray.map((type, index) => (
                                        <TypesDivDiv key={index}>
                                            <TypeImage
                                                src={typeImages[type].image}
                                                alt={typeArray[0]}
                                                type={type}
                                            />
                                            <Types type={type}>{type}</Types>
                                        </TypesDivDiv>
                                    ))
                                ) : (
                                    <TypesDivDiv>
                                        <TypeImage
                                            src={typeImages[typeArray[0]].image}
                                            alt={typeArray[0]}
                                            type={types}
                                        />

                                        <Types type={typeArray}>{types}</Types>
                                    </TypesDivDiv>
                                )}
                            </TypesDiv>
                        </div>
                    </InfoDiv>

                    <div>
                        <Image src={image} alt={name} />
                    </div>
                </AllDiv>
            </Link>
        </CardContainer>
    );
}

export default Card;
