import styled from 'styled-components'
import logoPic from '../../statics/img/logo.png'

export const HeaderWrapper = styled.div `
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
  z-index: 1;
`

export const Logo = styled.div`
  height: 56px;
  width: 100px;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div `
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`

export const NavItem = styled.div `
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left
  }

  &.right {
    float: right;
    color: #969696
  }

  &.active {
    color: #ea6f5a
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 19px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 30px 0 20px;
  background: #eee;
  box-sizing: border-box;
  font-size: 14px;
  &::placeholder {
    color: #999
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    width: 160px;
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`

export const SearchInfo  = styled.div`
  position: absolute;
  left: 0;
  top: 58px;
  width: 240px;
  padding: 0 20px 10px 20px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0,.2);
`

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.span`
  font-size: 12px;
  float: right;
  cursor: pointer;
  .spin{
    display: block;
    float:left;
    font-size: 12px;
    margin-right: 5px;
    transition: all .2s ease-in;
    tranform-origin: center center;
  }
`

export const SearchInfoItem = styled.a`
  font-size: 12px;
  padding: 0 5px;
  float: left;
  display: block;
  margin-bottom: 10px;
  line-height: 20px;
  border: 1px solid #eee;
  margin-right: 10px;
  border-radius: 2px;
  color: #999
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px; 
    &.focused {
      background: #ec6149
    }
  }
`

export const Button = styled.div`
  float: right;
  font-size: 14px;
  line-height: 38px;
  margin-top: 9px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  margin-bottom: 5px;
  padding: 0 23px;
  &.register {
    color: #ec6149;
  }

  &.writting {
    background: #ec6149;
    color: white
  }
`