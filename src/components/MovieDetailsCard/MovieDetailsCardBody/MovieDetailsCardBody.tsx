import React, { useEffect, useState } from 'react';
import { getCredits } from 'api/dataProvider';
import { ICast } from 'types/Credits';
import { getImage } from 'helpers/getImage';
import NoImageAvailable from 'assets/images/noImageAvailable.svg';
import {
    CardBody,
    ActorsWrapper,
    ActorCard,
    ActorPhoto,
    ActorFullName,
    CharacterName,
    ActorsSectionTitle,
} from './MovieDetailsCardBody.styles';

interface IMovieDetailsCardBody {
    movieId: string | undefined;
}

const MovieDetailsCardBody = ({ movieId }: IMovieDetailsCardBody) => {
    const [actors, setActors] = useState<Array<ICast>>([]);

    useEffect(() => {
        if (movieId) {
            getCredits(movieId).then((resp) => {
                setActors(resp.data.cast);
            });
        }
    }, [movieId]);

    return (
        <CardBody>
            <ActorsSectionTitle>Actors: </ActorsSectionTitle>
            <ActorsWrapper>
                {actors.map((actor: ICast) => (
                    <ActorCard>
                        <ActorPhoto
                            src={
                                actor.profile_path
                                    ? getImage(actor.profile_path)
                                    : NoImageAvailable
                            }
                        />
                        <ActorFullName>{actor.name}</ActorFullName>
                        <CharacterName>{actor.character}</CharacterName>
                    </ActorCard>
                ))}
            </ActorsWrapper>
        </CardBody>
    );
};

export default MovieDetailsCardBody;
