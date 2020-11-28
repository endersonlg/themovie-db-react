import {
    Avatar,
    Card,
    Col,
    Divider,
    notification,
    Rate,
    Row,
    Space,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { RootState } from '../../redux/store';
import api from '../../service/api';
import { Actors, Movie, ResponseActors, ResponseMovieIndex } from '../types';
import { ContainerDescriptionMovie, Image } from './styled';
import notFoundMovie from '../../assets/notFoundMovie.png';
import { createOrUpdate } from '../../redux/reducers/movieState';
import Breadcrumbs from '../../components/Breadcrumbs';

type MatchParams = {
    id: string;
};

type MatchProps = RouteComponentProps<MatchParams>;

const MovieIndex: React.FC<MatchProps> = ({ match }) => {
    const id = match.params.id;
    const dispatch = useDispatch();
    const { movieStars } = useSelector((store: RootState) => store.movieStars);
    const [movie, setMovie] = useState<Movie>();
    const [actors, setActors] = useState<Actors[]>();

    useEffect(() => {
        (async () => {
            const { data }: ResponseMovieIndex = await api.get(`/movie/${id}`);

            const stars = movieStars.find((movie) => movie.id === Number(id));
            setMovie({
                overview: data.overview,
                posterPath: data.poster_path,
                title: data.title,
                voteAverage: data.vote_average,
                releaseDate: data.release_date,
                id: data.id,
                stars: stars !== undefined ? stars.stars : 0,
            });
        })();
    }, [movieStars]);

    useEffect(() => {
        (async () => {
            const { data }: ResponseActors = await api.get(
                `/movie/${id}/credits`,
            );
            setActors(
                data.cast.map((aux) => ({
                    character: aux.character,
                    name: aux.name,
                    profilePath: aux.profile_path,
                })),
            );
        })();
    }, []);

    const stars = async (value: number) => {
        if (movie !== undefined) {
            const { data: dataSession } = await api.get(
                '/authentication/guest_session/new',
            );

            try {
                await api.post(
                    `/movie/${movie.id}/rating?guest_session_id=${dataSession.guest_session_id}`,
                    {
                        value: value * 2,
                    },
                );

                notification['success']({
                    message: 'Review sent successfully.',
                });
                dispatch(createOrUpdate({ id: movie?.id, stars: value }));
            } catch (err) {
                notification['error']({
                    message: 'Error submitting review.',
                });
            }
        }
    };

    return (
        <>
            <Breadcrumbs
                paths={[
                    {
                        label: 'Home',
                        link: '/',
                    },
                    {
                        label: movie?.title,
                    },
                ]}
            />
            <Row justify="space-between">
                <Col span={18}>
                    <>
                        <ContainerDescriptionMovie>
                            <h1>{movie?.title}</h1>
                            <h2>Description</h2>
                            <p>{movie?.overview}</p>
                            <br />

                            <div>
                                <p>Realease date: {movie?.releaseDate}</p>
                                <p>
                                    Rating:{' '}
                                    <Avatar
                                        style={{
                                            backgroundColor: '#f56a00',
                                        }}
                                    >
                                        {movie?.voteAverage}
                                    </Avatar>
                                </p>
                            </div>
                            <br />
                        </ContainerDescriptionMovie>
                        <Space align="baseline">
                            <h3>Vote:</h3>
                            <Rate
                                value={movie?.stars}
                                onChange={(value) => stars(value)}
                            />
                        </Space>
                        <Divider />
                    </>

                    <h2>Actors</h2>
                    <Row gutter={16}>
                        {actors?.map((actor) => (
                            <Col key={actor.name}>
                                <Card
                                    bordered
                                    hoverable
                                    style={{ width: 120, marginBottom: 18 }}
                                    cover={
                                        <img
                                            alt="example"
                                            style={{ height: 180 }}
                                            src={
                                                actor.profilePath
                                                    ? `http://image.tmdb.org/t/p/w780/${actor?.profilePath}`
                                                    : 'https://jornalggn.com.br/sites/default/files/u16/imagem-sem-foto-de-perfil-do-facebook-1348864936180_956x5001.jpg'
                                            }
                                        />
                                    }
                                >
                                    <Card.Meta
                                        title={actor.name}
                                        description={actor.character}
                                    />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col span={6}>
                    <Image
                        src={
                            movie?.posterPath
                                ? `http://image.tmdb.org/t/p/w780/${movie?.posterPath}`
                                : notFoundMovie
                        }
                    />
                </Col>
            </Row>
        </>
    );
};

export default MovieIndex;
