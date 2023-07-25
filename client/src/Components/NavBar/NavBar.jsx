import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPokemons, getPokemonsByName } from '../../redux/actions';
import {
    MainContainer,
    StyledLink,
    StyledSearch,
    StyledImg,
} from './StyledNavBar';
import pokeball from '../../Media/Pokeball.png';

function Nav() {
    const dispatch = useDispatch();
    const location = useLocation();
    const [search, setSearch] = React.useState('');
    const history = useHistory();

    React.useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch]);

    const handleSearch = async () => {
        dispatch(getPokemonsByName(search));
        setSearch('');
        history.push('/home');
    };

    return (
        <MainContainer>
            {/* TITLE */}
            {location.pathname !== '/pokemon' && (
                <StyledLink to="/">
                    <StyledImg src={pokeball} alt="" />
                </StyledLink>
            )}

            {/* TO_HOME */}
            {location.pathname !== '/home' && (
                <StyledLink to="/home">
                    <h2>HOME</h2>
                </StyledLink>
            )}
            {/* CREATE_POKEMON */}
            {location.pathname !== '/create' && (
                <StyledLink to="/create">
                    <h2>CREATE POKEMON</h2>
                </StyledLink>
            )}
            {/* CREATE_POKEMON
            <StyledLink to="">
                <h2>About me</h2>
            </StyledLink> */}

            {/* SEARCH_BAR StyledSearch aca entre <>*/}
            <StyledSearch>
                <input
                    type="search"
                    value={search}
                    placeholder="Search..."
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />
                <button onClick={handleSearch}>Search</button>
            </StyledSearch>
        </MainContainer>
    );
}

export default Nav;
