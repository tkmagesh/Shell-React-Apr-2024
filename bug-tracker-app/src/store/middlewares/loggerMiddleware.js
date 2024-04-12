// loggerMiddleware
/* function loggerMiddleware(store){
    return function(next){
        return function(action){
            console.group(action.type)
            console.log('before :', store.getState())
            console.log('action :', action)
            next(action)
            console.log("after :", store.getState());
            console.groupEnd()
        }
    }
} 
*/

const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("before :", store.getState());
  console.log("action :", action);
  next(action);
  console.log("after :", store.getState());
  console.groupEnd();
};

export default loggerMiddleware;