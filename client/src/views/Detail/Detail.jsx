import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemonsById } from '../../redux/actions';
import HomeBG from '../../Media/ClientBG_Trim.mp4';
import {
    DetailContainer,
    CardContainer,
    StyledName,
    StyledImage,
    IdDiv,
    Info,
    StyledTypes,
    BackgroundVideo,
    StyledImagesContainer,
    AllTitle,
    AllInfo,
} from './StyleDetail';

function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const pokemon = useSelector((state) => state.pokemonsById);

    useEffect(() => {
        dispatch(getPokemonsById(id));
    }, [dispatch, id]);

    return (
        <DetailContainer>
            <BackgroundVideo autoPlay loop muted playsInline>
                <source src={HomeBG} type="video/mp4" />
            </BackgroundVideo>
            <CardContainer>
                <AllTitle>
                    <StyledName>{pokemon.name}</StyledName>
                    <IdDiv>N.º{pokemon.id}</IdDiv>
                    <StyledImagesContainer>
                        <StyledImage src={pokemon.image} alt={pokemon.name} />
                    </StyledImagesContainer>
                    <StyledTypes>{pokemon.types}</StyledTypes>
                </AllTitle>
                <AllInfo>
                    <h2>Base stats</h2>
                    <Info>life:{pokemon.life}</Info>
                    <Info>attack:{pokemon.attack}</Info>
                    <Info>defense:{pokemon.defense}</Info>
                    <Info>speed:{pokemon.speed}</Info>
                    <Info>height:{pokemon.height}</Info>
                    <Info>weight:{pokemon.weight}</Info>
                </AllInfo>
            </CardContainer>
        </DetailContainer>
    );
}

export default Detail;
