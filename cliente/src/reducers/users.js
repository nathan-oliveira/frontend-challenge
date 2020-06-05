import {SHOW_USERS, BYID_USERS} from '../actions/actionsTypes';

const initialState = {
  list: [],
  users: [],
}

export function users(state = initialState, action) {
  switch (action.type) {
    case SHOW_USERS:
      return Object.assign({}, state, {list: action.payload})
    case BYID_USERS:
      return Object.assign({}, state, {users: action.users})
    default:
      return state;
  }
}
