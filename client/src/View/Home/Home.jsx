import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemons,
  orderPokemon,
  getTypes,
  filterByType,
  clearTypeFilter,
  getAllPokemons,
} from "../../Redux/actions";
import HomeBG from "../../Media/ClientBG.mp4";
import Filters from "../../Components/Filters/Filters";
import { StyledSection, StyledDiv } from "./StyledHome";
import CardsContainer from "../../Components/CardsContainer/CardsContainer";

function Home() {
  const dispatch = useDispatch();
  const [sortOrder, setSortOrder] = useState(null);
  const types = useSelector((state) => state.types);
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
    dispatch(getAllPokemons());
  }, [dispatch]);

  const handleSortOrderChange = (order) => {
    setSortOrder(order);
    dispatch(orderPokemon(order));
    dispatch(clearTypeFilter());
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
    dispatch(filterByType(type));
  };

  const handleClearFilter = () => {
    setSelectedType("");
    dispatch(clearTypeFilter());
    dispatch(getPokemons()); // Agregar dispatch para cargar todos los pokemons nuevamente
  };
  return (
    <StyledSection>
      <StyledDiv>
        <video autoPlay loop muted>
          <source src={HomeBG} type="video/mp4" />
        </video>
        <Filters
          onSortOrderChange={handleSortOrderChange}
          types={types}
          selectedType={selectedType}
          onTypeChange={handleTypeChange}
          onClearFilter={handleClearFilter} // Agregar aquí
        />
        <CardsContainer sortOrder={sortOrder} selectedType={selectedType} />
      </StyledDiv>
    </StyledSection>
  );
}
export default Home;
