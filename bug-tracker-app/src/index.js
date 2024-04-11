import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { bindActionCreators } from 'redux';
import store from './store';
import * as bugActionCreators from './bugs/actions'
import BugTracker from './bugs';

const bugActionDispatchers = bindActionCreators(
  bugActionCreators,
  store.dispatch
);

const root = ReactDOM.createRoot(document.getElementById("root"));

function renderBugTracker() {
  // extract the state from the store
  const bugs = store.getState();

  // pass the state & action dispatchers to the component
  root.render(<BugTracker bugs={bugs} {...bugActionDispatchers} />);
}
renderBugTracker();
store.subscribe(renderBugTracker);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// ES6 Examples
// importing the whole module object with all the exported entities
/* 
import * as calc from './calculator';
console.log(calc);
console.log(calc.add(100,200)) 
*/

/* 
import * as calc from './calculator';
const add = calc.add;
const subtract = calc.subtract;
console.log(add(100,200))
console.log(subtract(100,200)) 
*/

/* 
import * as calc from './calculator';
const { add, subtract }  = calc;
console.log(add(1000,2000))
console.log(subtract(100,200)) 
*/ 

/* 
import { add, subtract } from './calculator';
console.log(add(1000,2000))
console.log(subtract(100,200)) 
*/

// importing the 'default' exported entity
/* 
import calc from './calculator';
console.log(calc); 
*/

/* 
import calc, {add, multiply } from './calculator'
console.log(calc); 
console.log(add(1000,2000))
console.log(multiply(100,200)) 
*/
