import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { GlobalStyle } from './style'
import { GlobalIconStyle } from './statics/iconfont/iconfont'

ReactDOM.render(
  <div>
    <App />
    <GlobalStyle/>
    <GlobalIconStyle/>
  </div>,
  document.getElementById('root')
);

