// TO BE FIXED
let maxBugId = 0;

export function createNew(bugName) {
  const newBug = {
    id: ++maxBugId,
    name: bugName,
    isClosed: false,
    createdAt: new Date(),
  };
  const createBugAction = { type: "BUGS_ADD", payload: newBug };
  return createBugAction;
}
