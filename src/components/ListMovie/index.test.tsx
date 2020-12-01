import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import '@testing-library/jest-dom';
import { persistor, store } from '../../redux/store';
import ListMovie from './index';

describe('Test CardMovie', () => {
    it('test title', () => {
        render(
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <MemoryRouter>
                        <ListMovie
                            linkApi={'/discover/movie?sort_by=popularity.desc'}
                            title={'Test Movie'}
                        />
                    </MemoryRouter>
                </PersistGate>
            </Provider>,
        );
        expect(screen.getByText('Test Movie')).toBeInTheDocument();
    });
});
