import React from 'react';
import { FilterNames } from 'enums/FiltersNames';
import { FiltersWrapper, FilterButton } from './Filters.styles';

interface IFilters {
    onChange: (filterName: FilterNames) => void;
}

const Filters = (props: IFilters) => {
    const { onChange } = props;

    const filters = [
        {
            name: 'Popular',
            value: FilterNames.POPULAR,
        },
        {
            name: 'Now Playing',
            value: FilterNames.NOW_PLAYING,
        },
        {
            name: 'Top rated',
            value: FilterNames.TOP_RATED,
        },
        {
            name: 'Upcoming',
            value: FilterNames.UPCOMING,
        },
    ];

    const onClick = (filterName: FilterNames) => {
        onChange(filterName);
    };

    return (
        <FiltersWrapper>
            {filters.map((filter) => (
                <FilterButton
                    key={filter.name}
                    onClick={() => onClick(filter.value)}
                    type='button'
                >
                    {filter.name}
                </FilterButton>
            ))}
        </FiltersWrapper>
    );
};

export default Filters;
