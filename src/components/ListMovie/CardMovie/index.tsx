import React from 'react';
import { Avatar, Card, notification, Rate, Image } from 'antd';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Movie } from '../../../pages/types';
import { createOrUpdate } from '../../../redux/reducers/movieState';
import notFoundMovie from '../../../assets/notFoundMovie.png';
import api from '../../../service/api';

type PropComponentCardMovie = {
    movie: Movie;
};

const CardMovie: React.FC<PropComponentCardMovie> = ({ movie }) => {
    const dispatch = useDispatch();

    const stars = async (id: number, value: number) => {
        if (movie !== undefined) {
            const { data: dataSession } = await api.get(
                '/authentication/guest_session/new',
            );

            try {
                await api.post(
                    `/movie/${id}/rating?guest_session_id=${dataSession.guest_session_id}`,
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
        <Card
            key={movie.id}
            bordered
            hoverable
            style={{ width: 240, marginBottom: 18 }}
            cover={
                <Link to={`/movie/${movie.id}`}>
                    <Image
                        style={{ height: 360, width: 240 }}
                        alt={movie.title}
                        src={
                            movie.posterPath
                                ? `http://image.tmdb.org/t/p/w1280/${movie.posterPath}`
                                : notFoundMovie
                        }
                    />
                </Link>
            }
            actions={[
                <Rate
                    key={movie.id}
                    defaultValue={movie.stars}
                    onChange={(value) => stars(movie.id, value)}
                />,
            ]}
        >
            <Card.Meta
                title={movie.title}
                avatar={
                    <Avatar
                        style={{
                            backgroundColor: '#f56a00',
                        }}
                    >
                        {movie.voteAverage}
                    </Avatar>
                }
                description={movie.releaseDate}
            />
        </Card>
    );
};

export default CardMovie;
