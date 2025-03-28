import { applyMiddleware, createStore, compose } from 'redux';
import { thunk } from "redux-thunk"; // ✅ Importa como módulo nombrado
import rootReducer from './reducer/rootReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk)),
);

export default store;