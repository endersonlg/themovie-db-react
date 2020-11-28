import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type movieStars = {
    id: number;
    stars: number;
};

type State = {
    movieStars: movieStars[];
};

const initialState: State = {
    movieStars: [],
};

export const movieStarsState = createSlice({
    name: 'movieStars',
    initialState,
    reducers: {
        createOrUpdate: (state: State, action: PayloadAction<movieStars>) => {
            const aux = state.movieStars.filter(
                (aux) => aux.id !== action.payload.id,
            );
            aux.push(action.payload);
            state.movieStars = aux;
        },
    },
});

export const { createOrUpdate } = movieStarsState.actions;
