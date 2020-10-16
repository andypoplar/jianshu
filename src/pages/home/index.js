import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import List from './components/List'
import Recommend from './components/Recommend'
import Writter from './components/Writter'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import { actionCreators } from './store'

/**
 * PureComponent 与 immutable.js 联用
 * PureComponent内置 shouldComponentUpdate
 */

class Home extends PureComponent {

  handleScrollTop() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <HomeWrapper>
          <HomeLeft>
            <img src="https://upload.jianshu.io/admin_banners/web_images/5005/a1f341855d6e765fc0987b2826b1635fe39843f0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" width="625px" height="270px"/>
            <List></List>
          </HomeLeft>
          <HomeRight>
            <Recommend></Recommend>
            <Writter></Writter>
          </HomeRight>
          { this.props.showScroll ? <BackTop onClick={() => this.handleScrollTop()}>回到顶部</BackTop> : null } 
        </HomeWrapper>
      </div>
    )
  }
  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action)
  },
  changeScrollTopShow(e) {
    document.documentElement.scrollTop > 200 ?
    dispatch(actionCreators.changeTopShow(true)) :
    dispatch(actionCreators.changeTopShow(false))
  }
})

export default connect(mapState, mapDispatch)(Home)