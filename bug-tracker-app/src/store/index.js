import {createStore, combineReducers, applyMiddleware } from 'redux'

import bugsReducer from '../bugs/reducers/bugsReducer'
import projectsReducer from '../projects/reducers/projectsReducer'

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

// loggerMiddleware
/* function loggerMiddleware(store){
    return function(next){
        return function(action){
            console.group(action.type)
            console.log('before :', store.getState())
            console.log('action :', action)
            next(action)
            console.log("after :", store.getState());
            console.groupEnd()
        }
    }
} 
*/

const loggerMiddleware = store => next => action => {
    console.group(action.type);
    console.log("before :", store.getState());
    console.log("action :", action);
    next(action);
    console.log("after :", store.getState());
    console.groupEnd();
}

const asyncMiddleware = store => next => {
    return action => {
        if (typeof action === 'function'){
            return action(store.dispatch, store.getState)
        }
        return next(action)
    }
}

const promiseMiddleware = store => next => action => {
    if (action instanceof Promise){
        action
            .then(function(actionObj){
                store.dispatch(actionObj)
            })
            .catch(function(err){
                store.dispatch({ type : 'SET_APP_ERROR', payload : err.toString()})
                setTimeout(() => {
                    store.dispatch({
                      type: "CLEAR_APP_ERROR"
                    });
                }, 5000);
            })

        return;
    }
    return next(action)
}

const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware, asyncMiddleware, promiseMiddleware)
);


export default store;

/* 
store.getState() =>
 {
    bugs : {},
    projects : [...all the projects]
 }
*/