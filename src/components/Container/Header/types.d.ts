export type ResponseMovie = {
    data: {
        results: {
            poster_path: string;
            title: string;
            overview: string;
        }[];
    };
};

export type Movie = {
    posterPath: string;
    title: string;
    overview: string;
};
