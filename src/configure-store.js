import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducer/rootReducer';

const logger = createLogger();
const store = configureStore({ reducer: rootReducer,
    middleware: [thunk, logger]
})

export default store;