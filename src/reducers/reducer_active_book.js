// all reducers get 2 arguments: current state and action

// redux doesn't allow our reducers to return undefined. If action might be
// undefined, then assign it to null as its initial value

// State argument is not application state, only the state this reducer
// is responsible for
export default function(state = null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }
  return state;
}