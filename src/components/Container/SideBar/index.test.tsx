import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import '@testing-library/jest-dom';
import { persistor, store } from '../../../redux/store';
import SideBar from './index';

describe('Test SideBar', () => {
    it('test Select Categories', () => {
        render(
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <MemoryRouter>
                        <SideBar />
                    </MemoryRouter>
                </PersistGate>
            </Provider>,
        );
        fireEvent.click(screen.getByText('Categories'));
    });

    it('test Select Search Movie', () => {
        render(
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <MemoryRouter>
                        <SideBar />
                    </MemoryRouter>
                </PersistGate>
            </Provider>,
        );
        fireEvent.click(screen.getByText('Search Movie'));
    });
});
