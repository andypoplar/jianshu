import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { ListItem, ListInfo, LoadMore} from '../style'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'

class List extends PureComponent {
  render() {
    const { articleList, getMoreList, page } = this.props
    return (
      <div>
        {
          articleList.map( (item, index) => (
            // <Link style={{ textDecoration:'none'}} key={index} to={"/detail?id=" + item.get('id')}>
            <Link style={{ textDecoration:'none'}} key={index} to={"/detail/" + item.get('id')}>
              <ListItem>
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                  <p className="bottom-icon">
                    <span className="iconfont">&#xe641; 138</span>
                    <span>木头盒子啊</span>
                    <span className="iconfont">&#xe6d9; 8</span>
                    <span className="iconfont">&#xe601; 611</span>
                    <span className="iconfont">&#xe606; 1</span>
                  </p>
                </ListInfo>
                <img className="pic" src={item.get('imgUrl')} alt=""/>
              </ListItem>
            </Link>
          ))
        }
        <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
      </div>
    )
  }
}

const mapState = (state) => ({
  articleList: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
})

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page))
  }
})

export default connect(mapState, mapDispatch)(List)