import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";
import reducer from './reducers/index';
import App from './components/app';



const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer,
    applyMiddleware(sagaMiddleware,logger));

sagaMiddleware.run(rootSaga)



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root'));
