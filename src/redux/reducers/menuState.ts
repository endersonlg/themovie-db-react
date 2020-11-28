import { createSlice } from '@reduxjs/toolkit';

type State = {
    isOpen: boolean;
};

const initialState: State = {
    isOpen: true,
};

export const menuState = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        open: (state) => {
            state.isOpen = true;
        },
        close: (state) => {
            state.isOpen = false;
        },
    },
});

export const { open, close } = menuState.actions;
