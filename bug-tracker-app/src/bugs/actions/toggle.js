export function toggle(bugToToggle) {
  const toggledBug = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
  const replaceBugAction = { type: "BUGS_REPLACE", payload: toggledBug };
  return replaceBugAction;
}
