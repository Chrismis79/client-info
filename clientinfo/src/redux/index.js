import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './rootReducer';

const middleware = [thunk, logger];
const enhancers = applyMiddleware(...middleware)

export default createStore(rootReducer, enhancers);