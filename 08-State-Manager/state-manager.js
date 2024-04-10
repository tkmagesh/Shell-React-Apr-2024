
let StateManager = (function(){
    let _currentState = undefined,
        _subscriptions = [],
        _reducer = undefined

    function getState(){
        return _currentState;
    }

    function subscribe(listenerFn){
        _subscriptions.push(listenerFn);
    }

    // private
    function triggerChange(){
        _subscriptions.forEach(listenerFn => listenerFn())
    }

    function dispatch(action){
        let newState = _reducer(_currentState, action)
        if (newState === _currentState) return; // no state change from reducer
        _currentState = newState
        triggerChange()
    }

    function createStore(reducer){
        if (typeof reducer !== 'function')
            throw new Error('cannot create a store without a reducer')
        _reducer = reducer
        let store = { getState, subscribe, dispatch}
        return store;
    }

    return { createStore };
    
})()