/* 
export function removeClosed(
  bugs //TO BE FIXED by finding a way to gain access to the store state here
) {
  const bugsToRetain = bugs.filter((bug) => !bug.isClosed);
  const initAction = { type: "BUGS_INIT", payload: bugsToRetain };
  return initAction;
} 
*/

export function removeClosed() {
  return function(getState){
    const storeState = getState();
    const bugs = storeState.bugs;
    const bugsToRetain = bugs.filter((bug) => !bug.isClosed);
    const initAction = { type: "BUGS_INIT", payload: bugsToRetain };
    return initAction;
  }
}
