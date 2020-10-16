import React, { PureComponent } from 'react'
import { WritterWrapper, WritterImg, WritterInfo, WritterItem } from '../style'
import { connect } from 'react-redux'


class Writter extends PureComponent {
  render() {
    const { writterList } = this.props
    return (
      <WritterWrapper>
        {
          writterList.map( item => (
            <WritterItem key={item.get('id')}>
              <WritterImg>
                <img src={item.get('imgUrl')} width="48px" height="48px" alt=""/>
              </WritterImg>
              <WritterInfo>
                <span>{item.get('author')}</span>
                <p>{item.get('desc')}</p>
              </WritterInfo>
          </WritterItem>
          ))
        }
       
      </WritterWrapper>
    )
  }
}

const mapState = (state) => ({
  writterList: state.getIn(['home', 'writterList'])
})

export default connect(mapState, null)(Writter)