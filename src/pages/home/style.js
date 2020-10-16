import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  display: flex;
`

export const HomeLeft = styled.div`
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
`

export const HomeRight = styled.div`
  width: 280px;
  height: 300px;
  margin-left: 45px;
`

export const ListItem = styled.div`
  padding: 20px 0px;
  border-bottom: 1px solid #dcdcdc;
  display: flex;
  .pic {
    width: 225px;
    display: block;
  }
`

export const ListInfo = styled.div`
  width: 400px;
  margin-right: 20px;
  h3 {
    color: black;
  }
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: 800;
  }

  .desc {
    line-height: 18px;
    font-size: 13px;
    color: #999;
    margin-top: 10px;
  }

  .bottom-icon {
    margin-top: 10px;
    span {
      margin-right: 10px;
      font-size: 13px;
      color: #b4b4b4
    }
  }
`

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`

export const WritterWrapper = styled.div`
  width: 280px;
  height: 500px;
`

export const WritterItem = styled.div`
  display: flex;
  height: 50px;
  padding: 5px;
`

export const WritterImg = styled.div`
  width: 48px;
  height: 48px;
  img {
    border-radius: 100%;
  }
`

export const WritterInfo = styled.div`
  width: 170px;
  height: 48px;
  padding: 7px 10px 0 10px;
`

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  margin: 30px 0;
  border-radius: 20px;
  color: white;
  cursor: pointer;
`

export const BackTop = styled.div`
  position: fixed;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #eee;
  bottom: 100px;
  font-size: 14px;
  right: 100px;
`