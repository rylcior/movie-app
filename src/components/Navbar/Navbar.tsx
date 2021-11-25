import React, { ChangeEvent, useState } from 'react';
import {
    createSearchParams,
    Link,
    NavLink,
    useNavigate,
} from 'react-router-dom';
import LogoImage from 'assets/images/logo.png';
import SearchIcon from 'assets/images/searchIcon.svg';
import { FilterNames } from 'enums/FiltersNames';
import {
    NavbarWrapper,
    Logo,
    SearchInput,
    Icon,
    FormWrapper,
    SendButton,
    LinksWrapper,
} from './Navbar.styles';

const Navbar = () => {
    const [searchMovie, setSearchMovie] = useState<string>('');
    const navigate = useNavigate();
    const params = { title: searchMovie };

    const search = () => {
        navigate({
            pathname: '/search',
            search: `?${createSearchParams(params)}`,
        });
    };

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchMovie(event.target.value);
    };

    const navLinks = [
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

    return (
        <NavbarWrapper>
            <Link to={`/${FilterNames.POPULAR}`}>
                <Logo src={LogoImage} />
            </Link>
            <FormWrapper onSubmit={(e) => e.preventDefault()}>
                <SearchInput
                    type='text'
                    placeholder='Search movie by title'
                    value={searchMovie}
                    onChange={onChange}
                />
                <SendButton onClick={search}>
                    <Icon src={SearchIcon} />
                </SendButton>
            </FormWrapper>
            <LinksWrapper>
                {navLinks.map((link) => (
                    <NavLink
                        key={link.value}
                        to={`/${link.value}`}
                        style={({ isActive }) => {
                            return {
                                textDecoration: 'none',
                                color: isActive ? '#E1D888' : 'white',
                            };
                        }}
                    >
                        {link.name}
                    </NavLink>
                ))}
            </LinksWrapper>
        </NavbarWrapper>
    );
};

export default Navbar;
