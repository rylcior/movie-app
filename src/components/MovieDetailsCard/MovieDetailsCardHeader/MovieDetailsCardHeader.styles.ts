import styled from 'styled-components';

export const CardHeader = styled.div`
    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const Image = styled.img`
    max-width: 300px;
    max-height: 450px;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.yellow};
    margin-left: 50px;
`;

export const TagLine = styled.h3`
    margin: 0px 0px 20px 50px;
`;

export const Overview = styled.h4`
    font-weight: 400;
    margin-left: 50px;
`;

export const HeaderTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const GenresWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 50px;
`;

export const Genre = styled.h5`
    background-color: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.black};
    padding: 5px 10px;
    margin: 0;
    border-radius: 10px;
`;

export const InformationsWrapper = styled.div`
    width: 100%;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.black};
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    gap: 10px;
`;

export const InformationWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const InformationText = styled.h5`
    font-weight: 400;
`;

export const InformationIcon = styled.img`
    height: 30px;
`;
