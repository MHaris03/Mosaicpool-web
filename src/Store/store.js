import {createStore,applyMiddleware,compose} from 'redux';

import rootReducer from '../Reducer/index';
import thunk from 'redux-thunk';

const initState = {}
const middlewares = [thunk];

const store = createStore(
    rootReducer,
    initState,
    compose(
        applyMiddleware(...middlewares)
    )
)

export default store;