import axios from "axios";

function getBugsFromMemory(){
    return [
      { id: 1, name: "Bug - 1", isClosed: false, createdAt: new Date(), projectId : 1 },
      { id: 2, name: "Bug - 2", isClosed: true, createdAt: new Date(), projectId : 2 },
    ];
}
// reference code for server communication
const p = axios.get('http://localhost:3030/bugs')
p.then(function(response){
    const bugs = response.data
    console.log('Bugs from the server...')
    console.table(bugs);
})
////////////////////

export function load(){
    const bugs = getBugsFromMemory();
    const initAction = { type : 'BUGS_INIT', payload : bugs };
    return initAction
}

