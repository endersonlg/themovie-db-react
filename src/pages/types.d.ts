export type ResultMovie = {
    id: number;
    poster_path: string;
    title: string;
    overview: string;
    vote_average: number;
    release_date: Date;
};

export type ResponseMovie = {
    data: {
        results: ResultMovie[];
    };
};

export type ResponseMovieIndex = {
    data: ResultMovie;
};
export type ResponseMovieIndex = {
    data: {
        results: {
            id: number;
            poster_path: string;
            title: string;
            overview: string;
            vote_average: number;
            release_date: Date;
        };
    };
};

export type Movie = {
    id: number;
    posterPath: string;
    title: string;
    overview: string;
    voteAverage: number;
    releaseDate: Date;
    stars: number;
};

export type Category = {
    id: number;
    name: string;
};

export type Actors = {
    name: string;
    character: string;
    profilePath: string;
};

export type ResponseActors = {
    data: {
        cast: {
            name: string;
            character: string;
            profile_path: string;
        }[];
    };
};
