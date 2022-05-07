import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga"
import rootSaga from "./saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;