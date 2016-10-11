import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'reducers';
import App from './App';

const composeEnhancers = composeWithDevTools({
    name: 'LinkBatcher',
});

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(
            thunkMiddleware
        )
    )
);


export default React.createClass({
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    },
});
