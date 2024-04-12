import logggerMiddleware from './loggerMiddleware'
import asyncMiddleware from './asyncMiddleware';
import promiseMiddleware from './promiseMiddleware';
import { applyMiddleware } from 'redux';
import logger from "redux-logger";
import { thunk } from "redux-thunk";
// const middlewareEnhancers = applyMiddleware(logggerMiddleware, asyncMiddleware, promiseMiddleware)
const middlewareEnhancers = applyMiddleware(logger, thunk, promiseMiddleware )
export default middlewareEnhancers;