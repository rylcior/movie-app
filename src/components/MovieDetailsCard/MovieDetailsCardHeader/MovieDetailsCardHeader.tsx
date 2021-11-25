import React from 'react';
import CalendarIcon from 'assets/images/calendarIcon.svg';
import DurationIcon from 'assets/images/durationIcon.svg';
import BudgetIcon from 'assets/images/budgetIcon.svg';
import { getImage } from 'helpers/getImage';
import IMovieDetails, { IGenre } from 'types/MovieDetails';
import {
    CardHeader,
    Image,
    Title,
    Overview,
    HeaderTextWrapper,
    GenresWrapper,
    Genre,
    InformationsWrapper,
    InformationWrapper,
    InformationText,
    InformationIcon,
    TagLine,
} from './MovieDetailsCardHeader.styles';

interface IMovieDetailsCardHeader {
    movieDetailsData: IMovieDetails;
}

const MovieDetailsCardHeader = ({
    movieDetailsData: {
        poster_path,
        title,
        tagline,
        overview,
        genres,
        release_date,
        budget,
        runtime,
    },
}: IMovieDetailsCardHeader) => {
    return (
        <CardHeader>
            <Image src={getImage(poster_path)} />
            <HeaderTextWrapper>
                <Title>{title}</Title>
                <TagLine>{tagline}</TagLine>
                <Overview>{overview}</Overview>
                <GenresWrapper>
                    Genres:
                    {genres.map(({ id, name }: IGenre) => (
                        <Genre key={id}>{name}</Genre>
                    ))}
                </GenresWrapper>
                <InformationsWrapper>
                    <InformationWrapper>
                        <InformationIcon src={CalendarIcon} />
                        <InformationText>
                            Release date: {release_date}
                        </InformationText>
                    </InformationWrapper>

                    <InformationWrapper>
                        <InformationIcon src={BudgetIcon} />
                        <InformationText>
                            Budget: {budget ? `$${budget}` : 'No information'}
                        </InformationText>
                    </InformationWrapper>

                    <InformationWrapper>
                        <InformationIcon src={DurationIcon} />
                        <InformationText>
                            Duration:{' '}
                            {runtime ? `${runtime}m` : 'No information'}
                        </InformationText>
                    </InformationWrapper>
                </InformationsWrapper>
            </HeaderTextWrapper>
        </CardHeader>
    );
};

export default MovieDetailsCardHeader;
