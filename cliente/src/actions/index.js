import {SHOW_USERS, SAVE_USERS, DELETE_USERS, UPDATE_USERS, BYID_USERS} from './actionsTypes';

import axios from 'axios';
import { Config } from '../classes/Config'
const URL = Config.getUrlApi().toString()

export function showUsers () {
  return(dispatch, getState) => {
    axios.get(URL)
      .then((response) => {
        if(response != null) {
          dispatch({ type: SHOW_USERS,  payload: response.data})
        }
      })
  }
}

export function findUserById (userId) {
  return(dispatch, getState) => {
    axios.get(`${URL}/${userId}`)
      .then(response => {
        if(response != null) {
          dispatch({ type: BYID_USERS,  users: response.data})
        }
      })
  }
}

export function saveUsers (data) {
  return (dispatch, getState) => {
    axios.post(URL, data)
      .then((response) => {
        if(response != null) {
          dispatch({ type: SAVE_USERS })
        }
      })
  }
}

export function updateUsers (id, data) {
  return (dispatch, getState) => {
    axios.put(`${URL}/${id}`, data)
      .then((response) => {
        if(response != null) {
          dispatch({ type: UPDATE_USERS })
        }
      })
  }
}

export function deleteUser(id) {
  return (dispatch, getState) => {
    axios.delete(`${URL}/${id}`)
      .then((response) => {
        if(response != null) {
          dispatch({ type: DELETE_USERS })
        }
      })
  }
}