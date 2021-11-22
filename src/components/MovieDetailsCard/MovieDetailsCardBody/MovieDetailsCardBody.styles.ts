import styled from 'styled-components';

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const ActorsWrapper = styled.div`
    margin: 60px 20px;
    gap: 30px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export const ActorCard = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.black};
`;

export const ActorPhoto = styled.img`
    max-width: 200px;
`;

export const ActorFullName = styled.h4`
    margin: 10px 5px 0px 5px;
    overflow-wrap: break-word;
    text-align: center;
`;

export const CharacterName = styled.h5`
    font-weight: 400;
    margin-bottom: 5px;
    font-size: ${({ theme }) => theme.fontSize.m};
    text-align: center;
`;

export const ActorsSectionTitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSize.xxl};
    color: ${({ theme }) => theme.colors.black};
    margin-left: 50px;
    margin-bottom: 0;
`;
