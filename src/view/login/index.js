import React from 'react'

class Login extends React.Component{
  constructor(){
    super()
    this.proxyData(this, methods)
    this.state = {
      loginLayer:null,
      param:{
        loginSuccessUrl: encodeURIComponent(window.location.protocol + '//' + window.location.host)
      }
    }
    this.loginLayerInsert()
  }
  render(){
    return <div className="login"></div>
  }
  componentWillUnmount(){
    this.loginLayerRemove()
  }
}
const methods = {
  loginLayerInsert(){
    this.state.loginLayer = document.createElement('script')
    this.state.loginLayer.src = 'http://tjs.sjs.sinajs.cn/t5/register/js/page/remote/loginLayer.js'
    document.body.appendChild(this.state.loginLayer)
    this.state.loginLayer.onload = () => {
      window.WBtopGlobal_loginLayer(this.state.param)
    }
  },
  loginLayerRemove(){
    this.state.loginLayer.parentNode.removeChild(this.state.loginLayer)
    this.state.loginLayer = null
    window.WBtopGlobal_loginLayer = null
  }
}

export default Login