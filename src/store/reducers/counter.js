/**
 * Created by lucab on 02/11/2016.
 */

export default function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'UPDATE':
      return action.value || 0;
    default:
      return state
  }
}