import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 20px;
`;

export const Logo = styled.img`
    height: 70px;
`;

export const Fieldset = styled.fieldset`
    display: inline;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const SearchInput = styled.input`
    border: none;
    height: 44px;
    position: relative;

    &:focus {
        box-shadow: none;
        outline: none;
    }
`;

export const Icon = styled.img`
    width: 30px;
`;

export const SendButton = styled.button`
    border: none;
    height: 44px;
    background-color: ${({ theme }) => theme.colors.yellow};
    border-radius: 0;
    width: 50px;
    transition: 0.3s;
    cursor: pointer;
    position: absolute;

    &:hover {
        background-color: ${({ theme }) => theme.colors.darkCream};
    }
`;

export const LinksWrapper = styled.div`
    display: flex;
    gap: 20px;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.white};
`;

export const FormWrapper = styled.form`
    max-width: 300px;
    &:focus {
        outline: none;
    }
`;
