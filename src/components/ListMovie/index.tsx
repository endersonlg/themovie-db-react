import { Button, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Movie, ResponseMovie } from '../../pages/types';
import { RootState } from '../../redux/store';
import api from '../../service/api';
import CardMovie from './CardMovie';
import { ContainerButtonLoad } from './styles';

type PropComponentListMovie = {
    title: string | undefined;
    linkApi: string;
    query?: string;
};

const ListMovie: React.FC<PropComponentListMovie> = ({
    title,
    linkApi,
    query,
}) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const { movieStars } = useSelector((store: RootState) => store.movieStars);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const link = `${linkApi}&page=${page}${
                query ? `&query=${query}` : ''
            }`;
            const { data }: ResponseMovie = await api.get(link);

            const result = data.results.map((aux) => {
                const stars = movieStars.find((movie) => movie.id === aux.id);
                return {
                    overview: aux.overview,
                    posterPath: aux.poster_path,
                    title: aux.title,
                    voteAverage: aux.vote_average,
                    releaseDate: aux.release_date,
                    id: aux.id,
                    stars: stars !== undefined ? stars.stars : 0,
                };
            });

            setMovies([...movies, ...result]);
            setLoading(false);
        })();
    }, [page, query]);

    const upPage = () => {
        setPage(page + 1);
    };

    return (
        <>
            <h2>{title}</h2>
            <div className="site-card-wrapper">
                <Row gutter={16} justify="center">
                    {movies?.map((movie) => (
                        <Col key={movie.id}>
                            <CardMovie movie={movie} />
                        </Col>
                    ))}
                </Row>
                {movies.length > 0 ? (
                    <ContainerButtonLoad>
                        <Button
                            size="large"
                            type="primary"
                            loading={loading}
                            onClick={upPage}
                        >
                            Load More Movie
                        </Button>
                    </ContainerButtonLoad>
                ) : null}
            </div>
        </>
    );
};

export default ListMovie;
