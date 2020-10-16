import axios from 'axios'
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const changeHomeData = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  articleList: result.articleList,
  recommendList: result.recommendList,
  writterList: result.writterList
})

const addHomeList = (result, nextPage) => ({
  type: actionTypes.ADD_ARTICLE_LIST,
  articleListMore: fromJS(result),
  nextPage
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
      const result = res.data.data
      dispatch(changeHomeData(result))
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get(`/api/homeList.json?page=${page}`).then(res => {
      const result = res.data.data
      dispatch(addHomeList(result, page + 1))
    })
  }
}

export const changeTopShow = (isShow) => ({
  type: actionTypes.CHANGE_TOP_SHOW,
  isShow
})