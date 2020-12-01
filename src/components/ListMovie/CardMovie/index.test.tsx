import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { Movie } from '../../../pages/types';
import { persistor } from '../../../redux/store';
import CardMovie from './index';
import { store } from '../../../redux/store';
import { MemoryRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import '@testing-library/jest-dom';

describe('Test CardMovie', () => {
    it('test title', () => {
        const movie: Movie = {
            overview:
                'The work of billionaire tech CEO Donovan Chalmers is so valuable that he hires mercenaries to protect it, and a terrorist group kidnaps his daughter just to get it.',
            posterPath: '/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg',
            title: 'Chick Fight',
            voteAverage: 4.9,
            releaseDate: '2020-10-05',
            id: 724989,
            stars: 5,
        };

        render(
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <MemoryRouter>
                        <CardMovie movie={movie} />
                    </MemoryRouter>
                </PersistGate>
            </Provider>,
        );

        expect(screen.getByText('Chick Fight')).toBeInTheDocument();
    });

    it('test releaseDate', () => {
        const movie: Movie = {
            overview:
                'The work of billionaire tech CEO Donovan Chalmers is so valuable that he hires mercenaries to protect it, and a terrorist group kidnaps his daughter just to get it.',
            posterPath: '/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg',
            title: 'Chick Fight',
            voteAverage: 4.9,
            releaseDate: '2020-07-09',
            id: 724989,
            stars: 5,
        };

        render(
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <MemoryRouter>
                        <CardMovie movie={movie} />
                    </MemoryRouter>
                </PersistGate>
            </Provider>,
        );

        expect(screen.getByText('2020-07-09')).toBeInTheDocument();
    });

    it('test vote average', () => {
        const movie: Movie = {
            overview:
                'The work of billionaire tech CEO Donovan Chalmers is so valuable that he hires mercenaries to protect it, and a terrorist group kidnaps his daughter just to get it.',
            posterPath: '/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg',
            title: 'Chick Fight',
            voteAverage: 4.9,
            releaseDate: '2020-07-09',
            id: 724989,
            stars: 5,
        };

        render(
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <MemoryRouter>
                        <CardMovie movie={movie} />
                    </MemoryRouter>
                </PersistGate>
            </Provider>,
        );

        expect(screen.getByText('4.9')).toBeInTheDocument();
    });
});
