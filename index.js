import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './data/reducers';
import App from './components/App';
import './style/main.scss';

const composeEnhancers = composeWithDevTools({
    name: 'ReduxBoilerplate',
});

const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(
            thunkMiddleware
        )
    )
);

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
