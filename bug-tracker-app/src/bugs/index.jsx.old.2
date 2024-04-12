import BugStats from './views/BugStats'
import BugEdit from './views/BugEdit'
import BugList from './views/BugList'
import './index.css';

import {useSelector, useDispatch} from 'react-redux';
import * as bugActionCreators from './actions';
import { bindActionCreators } from 'redux';

// Container Component - interact with the store state infrastructure
function BugTracker() {

  // extract data from the store
  /* 
  const bugs = useSelector(function(storeState){
    return storeState.bugs;
  }); 
  */

  // const bugs = useSelector(storeState => storeState.bugs)
  const {bugs, projects} = useSelector(({bugs, projects}) => {
    return {
      projects : projects,
      bugs : bugs.map(bug => ({...bug, projectName : projects.find(project => project.id === bug.projectId).name}))
    }
  })

  // creating action dispatchers
  /* 
  const dispatch = useDispatch()
  const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
  const {createNew, toggle, remove, removeClosed} = bugActionDispatchers; 
  */
  const {createNew, toggle, remove, removeClosed} = bindActionCreators(bugActionCreators, useDispatch())

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
      <BugEdit createNew={createNew} projects={projects} />
      {/* BugList */}
      <BugList {...{ bugs, toggle, remove, removeClosed}} />
    </div>
  );
}

export default BugTracker;