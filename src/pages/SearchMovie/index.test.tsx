import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import '@testing-library/jest-dom';
import { persistor, store } from '../../redux/store';
import SearchMovie from './index';

describe('Test Search Movie', () => {
    it('test title Search Movie', () => {
        render(
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <MemoryRouter>
                        <SearchMovie />
                    </MemoryRouter>
                </PersistGate>
            </Provider>,
        );
        expect(screen.getByText('Search Movie:')).toBeInTheDocument();
    });

    it('test Input', () => {
        render(
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <MemoryRouter>
                        <SearchMovie />
                    </MemoryRouter>
                </PersistGate>
            </Provider>,
        );
        expect(
            screen.getByPlaceholderText('Search Movie: Ex: Avengers...'),
        ).toBeInTheDocument();
    });

    it('test Input FireEvent', () => {
        render(
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <MemoryRouter>
                        <SearchMovie />
                    </MemoryRouter>
                </PersistGate>
            </Provider>,
        );
        fireEvent.input(
            screen.getByPlaceholderText('Search Movie: Ex: Avengers...'),
        );
    });
});
