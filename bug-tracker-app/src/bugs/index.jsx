import BugStats from './views/BugStats'
import BugEdit from './views/BugEdit'
import BugList from './views/BugList'
import './index.css';

import useBugs from './hooks/useBugs';
import useBugActions from './hooks/useBugActions';

// Container Component - interact with the store state infrastructure
function BugTracker() {
  
  const {createNew, toggle, remove, removeClosed} = useBugActions();
  const {bugs, projects, closedCount} = useBugs();

  return (
    <div>
      <h3>Bugs</h3>
      <BugStats count={bugs.length} closedCount={closedCount} />
      <BugEdit createNew={createNew} projects={projects} />
      <BugList {...{ bugs, toggle, remove, removeClosed}} />
    </div>
  );
}

export default BugTracker;