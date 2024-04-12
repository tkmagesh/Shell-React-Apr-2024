import BugStats from './views/BugStats'
import BugEdit from './views/BugEdit'
import BugList from './views/BugList'
import './index.css';

function BugTracker({ bugs, createNew, toggle, remove, removeClosed }) {
  const closedCount = bugs.reduce(
    (prevResult, bug) => (bug.isClosed ? prevResult + 1 : prevResult),
    0
  );

  return (
    <div>
      <h3>Bugs</h3>
      {/* BugStats */}
      <BugStats count={bugs.length} closedCount={closedCount} />
      {/* BugEdit */}
      <BugEdit createNew={createNew} />
      {/* BugList */}
      <BugList {...{ bugs, toggle, remove, removeClosed }} />
    </div>
  );
}

export default BugTracker;