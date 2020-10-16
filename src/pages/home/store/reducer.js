import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  articleList: [],
  recommendList: [],
  writterList: [],
  articlePage: 1,
  showScroll: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return state.merge({
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writterList: fromJS(action.writterList)
      })
    case actionTypes.ADD_ARTICLE_LIST:
      return state.merge({
        articleList: state.get('articleList').concat(action.articleListMore),
        articlePage: action.nextPage
      })
    case actionTypes.CHANGE_TOP_SHOW:
      return state.merge({
        showScroll: action.isShow
      })
    default:
      return state
  }
}
