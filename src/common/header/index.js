import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem } from './style'
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import { Link } from 'react-router-dom'

class Header extends Component {
  getListArea() {
    const { focused, hotSearchList, page, mouseIn, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
    const JShotSearchList = hotSearchList.toJS() // 将immuable数组转为JS数组
    const pageList = []

    if (JShotSearchList.length) {
      for (let i = ((page - 1) * 10); i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={JShotSearchList[i]}>{JShotSearchList[i]}</SearchInfoItem>
        )
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()}
        >
          <SearchInfoTitle>热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <span ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe600;</span>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <div>{pageList}</div>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    const { focused, handleInputonFocus, handleInputonBlur, hotSearchList, loginStatus, handleLogout } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          {
            loginStatus ? <NavItem onClick={handleLogout} className="right">退出</NavItem> :
              <Link to="/login"><NavItem className="right">登录</NavItem></Link>
          }
          <NavItem className="right">
            <i className="iconfont">&#xe62f;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={200}
              classNames="slide"
              in={focused}>
              <NavSearch
                onFocus={() => handleInputonFocus(hotSearchList)}
                onBlur={() => handleInputonBlur()}
                className={focused ? 'focused' : ''}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe602;</i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to='/write'>
            <Button className="writting">
              <i className="iconfont">&#xe634;</i>
                写文章
              </Button>
          </Link>
          <Button className="register">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

// 组件和store做连接的时候，store 里面的数据映射到props上面
const mapStateToProps = (state) => {
  return {
    // immutable对象
    focused: state.getIn(['header', 'focused']),
    hotSearchList: state.getIn(['header', 'hotSearchList']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    loginStatus: state.getIn(['login', 'loginStatus'])
  }
}

// 组件和store做连接的时候，组件里的方法可直接调用dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputonFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getHotSearchList())
      dispatch(actionCreators.getHotSearchList())
      dispatch(actionCreators.searchFocus())
    },

    handleInputonBlur() {
      dispatch(actionCreators.searchBlur())
    },

    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },

    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },

    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    },

    handleLogout() {
      dispatch(loginActionCreators.handleLogout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)