import { createStore } from 'redux';

function myFunc(state = [], action) {
  if (action.type === 'ADD_SOMETHING') {
    return [...state, action.payload];
  }
  return state;
}

const store = createStore(myFunc);

store.subscribe(() => {
  console.log('subscribe', store.getState());
});

store.dispatch({ type: 'ADD_SOMETHING', payload: 'hello world' });
store.dispatch({ type: 'ADD_SOMETHING', payload: 'hello im so good feeling' });
