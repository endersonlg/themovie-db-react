import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import '@testing-library/jest-dom';
import { persistor, store } from '../../redux/store';
import Categories from './index';

describe('Test Categories', () => {
    it('test title Select Category', () => {
        render(
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <MemoryRouter>
                        <Categories />
                    </MemoryRouter>
                </PersistGate>
            </Provider>,
        );
        expect(screen.getByText('Select Category')).toBeInTheDocument();
    });
});
