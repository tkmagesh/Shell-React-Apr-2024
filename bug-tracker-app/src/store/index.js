import {createStore, combineReducers, applyMiddleware } from 'redux'

import bugsReducer from '../bugs/reducers/bugsReducer'
import projectsReducer from '../projects/reducers/projectsReducer'

// const store = createStore(bugsReducer);
// const store = createStore(projectsReducer);

const rootReducer = combineReducers({
    bugs : bugsReducer,
    projects : projectsReducer
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

const appMiddleware = store => next => {
    return action => {
        if (typeof action === 'function'){
            /* action(store.dispatch, store.getState) */
            const actionObj = action(store.getState)
            return next(actionObj)
        }
        return next(action)
    }
}

const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware, appMiddleware)
);


export default store;

/* 
store.getState() =>
 {
    bugs : {},
    projects : [...all the projects]
 }
*/