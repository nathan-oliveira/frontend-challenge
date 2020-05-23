import {SHOW_USERS, SAVE_USERS, DELETE_USERS, UPDATE_USERS, BYID_USERS} from '../actions/actionsTypes';

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
    case SAVE_USERS:
      return window.location.replace('/');
    case UPDATE_USERS:
      return window.location.replace('/');
    case DELETE_USERS:
      return window.location.replace('/');
    default:
      return state;
  }
}
