// store를 만들어내는 함수 createStore
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import rootReducer from './reducers' // rootReducer임의로 붙혀진 이름

let store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
    );

export default store;