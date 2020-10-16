import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'

const changeSearchList = (data) => ({
  type: actionTypes.HOTSEARCH_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})

export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
})

export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
})

export const getHotSearchList = () => {
  return (dispatch) => {
    axios.get("api/hotSearchList.json").then(res => {
      const data = res.data.data
      dispatch(changeSearchList(data))
      console.log(data)
    }).catch(error => {
      console.log(error)
    })
  }
}