const promiseMiddleware = (store) => (next) => (action) => {
  if (action instanceof Promise) {
    action
      .then(function (actionObj) {
        store.dispatch(actionObj);
      })
      .catch(function (err) {
        store.dispatch({ type: "SET_APP_ERROR", payload: err.toString() });
        setTimeout(() => {
          store.dispatch({
            type: "CLEAR_APP_ERROR",
          });
        }, 5000);
      });

    return;
  }
  return next(action);
};

export default promiseMiddleware;