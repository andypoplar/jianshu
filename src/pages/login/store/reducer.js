import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  loginStatus: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN_STATUS:
      return state.set('loginStatus', action.value)
    case actionTypes.LOGIN_OUT:
      return state.set('loginStatus', action.value)
    default:
      return state
  }
}