import React, { PureComponent } from 'react'
import { DetailWrapper, DetailHeader, DetailContent } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { withRouter } from 'react-router-dom'

class Detail extends PureComponent {
  render() {
    // console.log(this.props.location.search) 拿到
    return (
      <div>
        <DetailWrapper>
          <DetailHeader>{ this.props.title }</DetailHeader>
          <DetailContent>
            <p>独来独往的人并非傻子。他们非常清楚地知道在这密如蛛网的社会关系中生活，热情外向很重要，交往和沟通很重要。没准，独来独往的性格会影响人缘，因影响提升，会影响前程。但是，独来独往的人天性使然，并非不知道独来独往的不利因素。所以，他们也努力地掩藏自己不喜欢热闹场面的性格，努力在工作中外向，努力在工作与人沟通，努力提高交往沟通能力，但就是不喜欢把时间浪费在成群结伙的吃吃喝喝和拉帮结派上。</p>
            <img src="https://upload-images.jianshu.io/upload_images/19363614-42332a1ac0f8c204.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/641/format/webp" alt=""/>
            <p>独来独往的人并非傻子。他们非常清楚地知道在这密如蛛网的社会关系中生活，热情外向很重要，交往和沟通很重要。没准，独来独往的性格会影响人缘，因影响提升，会影响前程。但是，独来独往的人天性使然，并非不知道独来独往的不利因素。所以，他们也努力地掩藏自己不喜欢热闹场面的性格，努力在工作中外向，努力在工作与人沟通，努力提高交往沟通能力，但就是不喜欢把时间浪费在成群结伙的吃吃喝喝和拉帮结派上。</p>
          </DetailContent>
        </DetailWrapper>
      </div>
    )
  }
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id))
  }
})

export default connect(mapState, mapDispatch)(withRouter(Detail))