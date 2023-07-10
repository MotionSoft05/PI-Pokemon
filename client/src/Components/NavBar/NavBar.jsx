import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { getPokemons, getPokemonsByName } from "../../redux/actions";
import { Link } from "react-router-dom";
import {
  StyledNav,
  StyledDiv,
  StyledDiv2,
  StyledDiv3,
  StyledDiv3Sub1,
  StyledDiv3Sub1sub1,
  StyledDiv3Sub1sub2,
  StyledDiv3Sub2,
  StyledImg,
  StyledLink,
  StyledSearch,
} from "./StyledNavBar";
import pokeball from "../../Media/Pokeball.png";

function Nav() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [search, setSearch] = React.useState("");
  const history = useHistory();

  // React.useEffect(() => {
  //   dispatch(getPokemons());
  // }, [dispatch]);

  // const handleSearch = async () => {
  //   dispatch(getPokemonsByName(search));
  //   setSearch("");
  //   history.push("/home");
  // };

  return (
    <StyledNav>
      <StyledDiv>
        <StyledDiv3>
          <StyledDiv3Sub1>
            <StyledDiv3Sub1sub1>
              {location.pathname !== "/pokemon" && (
                <Link to="/">
                  <StyledImg src={pokeball} alt="" />
                </Link>
              )}
            </StyledDiv3Sub1sub1>
            <StyledDiv3Sub1sub2>
              <StyledSearch>
                <input
                  type="search"
                  value={search}
                  placeholder="Search..."
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <button>Search</button>
              </StyledSearch>
            </StyledDiv3Sub1sub2>
          </StyledDiv3Sub1>
          <StyledDiv3Sub2>
            {location.pathname !== "/home" && (
              <StyledLink to="/home">
                <h2>HOME</h2>
              </StyledLink>
            )}
            {location.pathname !== "/create" && (
              <StyledLink to="/create">
                <h2>CREATE POKEMON</h2>
              </StyledLink>
            )}
          </StyledDiv3Sub2>
        </StyledDiv3>
      </StyledDiv>
    </StyledNav>
  );
}

export default Nav;
/* 
      {location.pathname !== "/pokemon" && (
        <StyledLink to="/">
          <StyledImg src={pokeball} alt="" />
        </StyledLink>
      )}


      {location.pathname !== "/home" && (
        <StyledLink to="/home">
          <h2>HOME</h2>
        </StyledLink>
      )}

      {location.pathname !== "/create" && (
        <StyledLink to="/create">
          <h2>CREATE POKEMON</h2>
        </StyledLink>
      )}

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
      </StyledSearch> */
/* CREATE_POKEMON
            <StyledLink to="">
                <h2>About me</h2>
            </StyledLink> */

/* SEARCH_BAR StyledSearch aca entre <>*/
