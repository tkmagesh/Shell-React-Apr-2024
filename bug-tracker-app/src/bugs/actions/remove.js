import * as bugApi from '../services/bugApi';
export async function remove(bugToRemove) {
  await bugApi.remove(bugToRemove);
  const removeBugAction = { type: "BUGS_REMOVE", payload: bugToRemove };
  return removeBugAction;
}
