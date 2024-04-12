import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider, useSelector } from 'react-redux';
import store from './store';
import BugTracker from './bugs';
import ProjectsTracker from './projects';

const root = ReactDOM.createRoot(document.getElementById("root"));

function App({children}){
  const error = useSelector(storeState => storeState.errors)
  return (
    <div>
      { error && (<div>Error : {error} </div>) }
      {children}
    </div>
  )
}

root.render(
  <Provider store={store}>
    <App>
      <div className="flex-container">
        <BugTracker />
        <ProjectsTracker />
      </div>
    </App>
  </Provider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
