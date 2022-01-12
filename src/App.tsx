import 'dotenv/config';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import Routes from './routes';
import { Provider } from 'react-redux';

import GlobalStyle from './style/GlobalStyle';
console.log('testedajkajads');
const App: React.FC = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router>
                    <Routes />
                    <GlobalStyle />
                </Router>
            </PersistGate>
        </Provider>
    );
};

export default App;
