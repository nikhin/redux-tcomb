var isReduxAction = require('./isReduxAction');

function getCheckedReducer(reducer, State, Action) {
  return function checkedReducer(state, action) {
    if (process.env.NODE_ENV !== 'production') {
      if (typeof state !== 'undefined') {
        State(state);
      }
      if (!isReduxAction(action)) {
        Action(action);
      }
    }
    state = reducer(state, action);
    if (process.env.NODE_ENV !== 'production') {
      State(state);
    }
    return state
  };
}

module.exports = getCheckedReducer;