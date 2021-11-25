import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    background-color: ${({ theme }) => theme.colors.cream};
`;

export const MovieImage = styled.img`
    width: 100%;
    height: 300px;
`;

export const TitleAndRateWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const MovieTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSize.l};
    margin: 20px 5px 0px 10px;
    font-weight: 400;
`;

export const MovieRate = styled.div`
    border: ${({ theme }) => `2px solid ${theme.colors.black}`};
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    flex-shrink: 0;
`;

export const MovieGenre = styled.p`
    font-size: ${({ theme }) => theme.fontSize.m};
    margin-left: 10px;
`;

export const RouterLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
`;
