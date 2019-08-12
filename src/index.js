import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import logger from 'redux-logger';

import reducer from './reducers/index';
import App from './containers/app';

const store = createStore(reducer,applyMiddleware(logger));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root'));
