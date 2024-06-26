
import { useState} from 'react';
import * as projectActionCreators from './actions';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';


export default function ProjectsTracker(){
    
    const projects = useSelector(({bugs, projects}) => {
        return projects.map(project => ({...project, bugsCount : bugs.reduce((prevResult, bug) => bug.projectId === project.id ? prevResult + 1 : prevResult, 0)}))
    });
    const { createNew, remove } = bindActionCreators(projectActionCreators, useDispatch())
    
    const [newProjectName, setNewProjectName]= useState('')

    const projectItems = projects.map(project => (
        <li key={project.id}>
            <span>
                    {project.name}
                    <span> [ {project.bugsCount} ] </span>
            </span>
            <button onClick={() => remove(project)}>Remove</button>
        </li>
    ))
    return(
        <div>
            <h3>Projects</h3>
            <hr/>
            <section>
                <label htmlFor="">Project Name :</label>
                <input type="text" onChange={evt => setNewProjectName(evt.target.value)}/>
                <button onClick={() => createNew(newProjectName)}>Create New</button>
            </section>
            <section>
                <ul>
                   {projectItems} 
                </ul>
            </section>
        </div>    
    )
}