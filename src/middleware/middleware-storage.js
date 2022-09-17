const middlewareLocalStorage = store => next => action => {
  next(action);
  const nextState = store.getState();
  const { cart } = nextState;
  switch (action.type) {
    case '':
      console.log(cart);
      break;
    default:
      break;
  }
};

export default middlewareLocalStorage;
