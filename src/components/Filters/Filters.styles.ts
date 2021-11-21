import styled from 'styled-components';

export const FiltersWrapper = styled.div`
    display: flex;
    margin: 40px 90px;
`;

export const FilterButton = styled.button`
    margin: 0;
    width: 100px;
    height: 50px;
    border: ${({ theme }) => `1px solid ${theme.colors.cream}`};
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.darkCream};
    }

    &.active {
        background-color: red;
    }
`;
