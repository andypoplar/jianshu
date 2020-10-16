import axios from "axios"
import * as actionTypes from './actionTypes'

const changeLoginStatus = () => ({
  type: actionTypes.CHANGE_LOGIN_STATUS,
  value: true
})

export const handleLogout = () => ({
  type: actionTypes.LOGIN_OUT,
  value: false
})

export const handleLogin = (account, password) => {
  return (dispatch) => {
    axios.get(`/api/login.json?account=${account}&password=${password}`).then(res => {
      const result = res.data.data
      if (result) {
        dispatch(changeLoginStatus())
      } else {
        alert('登录失败')
      }
    })
  }
}