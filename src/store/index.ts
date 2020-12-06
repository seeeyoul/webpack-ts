import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import sagas from './sagas/index';


const isDev = process.env.NODE_ENV !== 'production';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,
	isDev ?
	composeWithDevTools(applyMiddleware(sagaMiddleware)) :
	applyMiddleware(sagaMiddleware)
	);

	sagas.map(item => sagaMiddleware.run(item));

export default store;