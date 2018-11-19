export default function createStore(reducer) {
  // add your code here
  let state = reducer(state, "");

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  function getState() {
    return state;
  }

  return {
    dispatch,
    getState
  };
}

function render() {
  const container = document.getElementById("container");
}
