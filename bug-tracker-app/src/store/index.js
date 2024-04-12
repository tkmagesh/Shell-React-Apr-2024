import {createStore, combineReducers, applyMiddleware } from 'redux'

import bugsReducer from '../bugs/reducers/bugsReducer'
import projectsReducer from '../projects/reducers/projectsReducer'
import middlewareEnhancers from './middlewares';
// const store = createStore(bugsReducer);
// const store = createStore(projectsReducer);

function errorReducer(currenState = '', action){
    switch (action.type) {
      case "SET_APP_ERROR":
        return action.payload;
      case 'CLEAR_APP_ERROR':
        return '';
      default:
        return currenState;
    }
}

const rootReducer = combineReducers({
  bugs: bugsReducer,
  projects: projectsReducer,
  errors: errorReducer,
});

const store = createStore(
  rootReducer,
  middlewareEnhancers
);


export default store;
