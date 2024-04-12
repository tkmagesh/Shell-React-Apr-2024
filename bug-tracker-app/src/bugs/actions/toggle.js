import * as bugApi from '../services/bugApi';

export async function toggle(bugToToggle) {
  const toggledBugData = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
  const toggledBug = await bugApi.save(toggledBugData);
  const replaceBugAction = { type: "BUGS_REPLACE", payload: toggledBug };
  return replaceBugAction;
}
