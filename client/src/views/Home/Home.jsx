import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getPokemons,
    orderPokemon,
    getTypes,
    filterByType,
    clearTypeFilter,
    getAllPokemons,
} from '../../redux/actions';
import Filters from '../../components/Filters/Filters';
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import HomeBG from '../../Media/ClientBG_Trim.mp4';
import { BackgroundVideo } from './StyleHome';

const Home = () => {
    const dispatch = useDispatch();
    const [sortOrder, setSortOrder] = useState(null);
    const types = useSelector((state) => state.types);
    const [selectedType, setSelectedType] = useState('');

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
        setSelectedType('');
        dispatch(clearTypeFilter());
        dispatch(getPokemons()); // Agregar dispatch para cargar todos los pokemons nuevamente
    };

    return (
        <>
            <BackgroundVideo autoPlay loop muted playsInline>
                <source src={HomeBG} type="video/mp4" />
            </BackgroundVideo>
            <Filters
                onSortOrderChange={handleSortOrderChange}
                types={types}
                selectedType={selectedType}
                onTypeChange={handleTypeChange}
                onClearFilter={handleClearFilter} // Agregar aquí
            />
            <CardsContainer sortOrder={sortOrder} selectedType={selectedType} />
        </>
    );
};

export default Home;
