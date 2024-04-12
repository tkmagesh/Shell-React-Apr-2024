/* 
export function removeClosed(
  bugs //TO BE FIXED by finding a way to gain access to the store state here
) {
  const bugsToRetain = bugs.filter((bug) => !bug.isClosed);
  const initAction = { type: "BUGS_INIT", payload: bugsToRetain };
  return initAction;
} 
*/

import { remove } from "./remove";

export function removeClosed() {
  return function(dispatch, getState){
    const storeState = getState();
    const bugs = storeState.bugs;
    const bugsToRemove = bugs.filter(bug => bug.isClosed);
    for (let bugToRemove of bugsToRemove){
      const p = remove(bugToRemove)
      p.then(function(removeBugAction){
        dispatch(removeBugAction)
      })
    }
  }
}
