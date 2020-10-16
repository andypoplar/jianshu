import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  title: '独来独往的人',
  content: '独来独往的人并非傻子。他们非常清楚地知道在这密如蛛网的社会关系中生活，热情外向很重要，交往和沟通很重要。没准，独来独往的性格会影响人缘，因影响提升，会影响前程。但是，独来独往的人天性使然，并非不知道独来独往的不利因素。所以，他们也努力地掩藏自己不喜欢热闹场面的性格，努力在工作中外向，努力在工作与人沟通，努力提高交往沟通能力，但就是不喜欢把时间浪费在成群结伙的吃吃喝喝和拉帮结派上。'
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      })
    default:
      return state
  }
}
