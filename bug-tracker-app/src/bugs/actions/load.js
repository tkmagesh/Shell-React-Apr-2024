import * as bugApi from '../services/bugApi'

export async function load() {
  const bugs = await bugApi.getAll()
  const initAction = { type: "BUGS_INIT", payload: bugs };
  return initAction;
} 




// import axios from "axios";

/* 
function getBugsFromMemory(){
    return [
      { id: 1, name: "Bug - 1", isClosed: false, createdAt: new Date(), projectId : 1 },
      { id: 2, name: "Bug - 2", isClosed: true, createdAt: new Date(), projectId : 2 },
    ];
} 
*/
// reference code for server communication

////////////////////

// 
/* 
export function load(){
    return function(dispatch, getState){
        const p = axios.get("http://localhost:3030/bugs");
        p.then(function (response) {
            const bugs = response.data;
            console.log("Bugs from the server...");
            console.table(bugs);
            const initAction = { type: "BUGS_INIT", payload: bugs };
            dispatch(initAction);
        }); 
    }
} 
*/

// action returning a promise
/* 
export function load(){
    const p = axios.get("http://localhost:3030/bugs");
    const p2 = p.then(function (response) {
      const bugs = response.data;
      console.log("Bugs from the server...");
      console.table(bugs);
      const initAction = { type: "BUGS_INIT", payload: bugs };
      return initAction;
    }); 
    return p2;
} 
*/

/* 
export async function load(){
    const response = await axios.get("http://localhost:3030/bugs");
    const bugs = response.data;
    const initAction = { type: "BUGS_INIT", payload: bugs };
    return initAction;
} 
*/

