export function remove(bugToRemove) {
  const removeBugAction = { type: "BUGS_REMOVE", payload: bugToRemove };
  return removeBugAction;
}
