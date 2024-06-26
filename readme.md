# React Training

## Magesh Kuppan
tkmagesh77@gmail.com

https://linkedin.com/in/tkmagesh

## Chat
- https://chat.olzhasar.com/r/7c84de6b-0bba-4884-b749-a22dfbc414f0

## Schedule
- Session - 1   : 1:30 hrs
- Tea Break     : 20 mins
- Session - 2   : 1:40 hrs
- Lunch Break   : 1 hr
- Session - 3   : 1:30 hrs
- Tea Break     : 20 mins
- Session - 4   : 1:40 hrs

## Methodology
- No powerpoint
- Code & Discussion
- No dedicated time for Q&A

## Software Requirements
- Chrome Browser
- Node.js (LTS - v20.12.1)
- Visual Studio Code (or any editor)

## Reference
- Advanced JS (https://bit.ly/javascript-training-videos)
- React (https://bit.ly/react-videos)

## Repository
- https://github.com/tkmagesh/shell-react-apr-2024

## What is React?
- Library for building **Rich Internet Applications**


## Zen Coding Syntax
- https://code.google.com/archive/p/zen-coding/
```
html:5
div*3
div#div-1
div.highlight
input:text
input:check
input:range[min="0" max="10" value="0"]
div>span
div+span
div*3#div-$
div{This is the content of a div}
```
## Salary Calculator
- Salary = Basic + HRA + DA - Tax

## React

### VDOM
- Presentation

### JSX
- Every tag MUST have a corresponding close tag
- Use 'htmlFor' inplace of 'for'
- Use 'className' inplace of 'class'

### Component (View)
- Encapsulation of Presentation + User Interaction Logic (handling user events) + State
- Just a function (with the name starting with capital letter)

### Hooks
- Functions designed to handle side-effects
- Functions whose name starts with 'use'
- Hook functions can be used ONLY in a component function
- Built in hooks
    - useState
        - used to maintain state across the component re-renderings
    - useRef
    - useReducer
    - useEffect
    - etc

## State Manager
![image](./images/state-manager.png)

## ES6 Modules
- Everything defined in a file is considered as PRIVATE by default
- Any public entity has to be explicitly 'EXPORT'ed
- Any public entity from a different has to be explicitly 'IMPORT'ed in order to be used

## Bug Tracker App Setup ##
```
/bugs (app module)
    /actions
        - createNew.js
        - toggle.js
        - remove.js
        - removeClosed.js
        - index.js
    /views (presentation components)
        - BugStats.jsx
        - BugEdit.jsx
        - BugList.jsx
        - BugItem.jsx
    /reducers
        - bugsReducer.js
    - index.js (Container component)
/store
    - index.js
/index.js

```

TODO:
1. List the projects in the 'projects' dropdown in 'BugEdit.jsx'
2. Every bug must have a new attribute 'projectId' with the id of the selected project
3. BugItem.jsx should display each bug with the 'Project Name'
4. Each project in 'Projects/index.jsx' should display the total number of bugs in the project with the project name

## Setup REST API server
```
    Open a new terminal (command prompt)
    In the 11-data-server folder
    > npx json-server db.json -p 3030
```

## To create a build
> npm run build

copy the 'build' folder to any webserver

## Debugging React App in VSCode
- https://reintech.io/blog/debugging-react-code-comprehensive-guide-react-developers