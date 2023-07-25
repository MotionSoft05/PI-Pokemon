import React from 'react';
import { useDispatch } from 'react-redux';
import {
    filterByType,
    clearTypeFilter,
    filterByCreate,
} from '../../redux/actions';
import { useState } from 'react';
import { StyledButton, AllFilter, StyledSelect } from './StyledFilters';

const Filters = ({ onSortOrderChange, types, selectedType }) => {
    const dispatch = useDispatch();

    const [currentSortOrder, setCurrentSortOrder] = useState('asc');
    const [currentAttackOrder, setCurrentAttackOrder] = useState('more');

    const handleOrder = (order) => {
        if (order === 'attack') {
            if (currentAttackOrder === 'more') {
                setCurrentAttackOrder('less');
                onSortOrderChange('less');
            } else {
                setCurrentAttackOrder('more');
                onSortOrderChange('more');
            }
        } else {
            if (currentSortOrder === 'asc') {
                setCurrentSortOrder('desc');
                onSortOrderChange('desc');
            } else {
                setCurrentSortOrder('asc');
                onSortOrderChange('asc');
            }
        }
        if (selectedType !== '') {
            dispatch(clearTypeFilter());
        }
    };

    const handleTypeChange = (type) => {
        dispatch(filterByType(type));
        if (type === '') {
            dispatch(clearTypeFilter()); // Agregar este dispatch para limpiar el filtro de type
        }
    };

    const handleCreated = (event) => {
        dispatch(filterByCreate(event.target.value));
        onSortOrderChange(0);
    };

    return (
        <AllFilter>
            <StyledButton onClick={() => handleOrder('asc')}>
                Ordenar alfabéticamente (
                {currentSortOrder === 'asc' ? 'A-Z' : 'Z-A'})
            </StyledButton>

            <StyledSelect
                value={selectedType}
                onChange={(e) => handleTypeChange(e.target.value)}
            >
                <option key="default" value="">
                    Types
                </option>
                {types.map((type) => (
                    <option key={type.name} value={type.name}>
                        {type.name}
                    </option>
                ))}
            </StyledSelect>
            <StyledSelect onChange={handleCreated} className="filterButton">
                <option value="all">All pokemons</option>
                <option value="api">Existing pokemons</option>
                <option value="created">Created pokemons</option>
            </StyledSelect>
            <StyledButton onClick={() => handleOrder('attack')}>
                Ordenar por ataque (
                {currentAttackOrder === 'more'
                    ? 'mayor a menor'
                    : 'menor a mayor'}
                )
            </StyledButton>
        </AllFilter>
    );
};

export default Filters;
