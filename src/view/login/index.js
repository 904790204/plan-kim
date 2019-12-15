import React from 'react'

class Login extends React.Component{
  constructor(){
    super()
    this.state = {
      loginLayer:null,
      param:{
        loginSuccessUrl: encodeURIComponent(window.location.protocol + '//' + window.location.host)
      }
    }
  }
  render(){
    return <div className="login"></div>
  }
  componentDidMount(){
    this.checkLogin()
  }
  componentWillUnmount(){
    this.loginLayerRemove()
  }
  // 插入登录js
  loginLayerInsert = () => {
    let loginLayer = document.createElement('script')
    loginLayer.src = 'http://tjs.sjs.sinajs.cn/t5/register/js/page/remote/loginLayer.js'
      document.body.appendChild(loginLayer)
      loginLayer.loginLayer.onload = () => {
        window.WBtopGlobal_loginLayer(this.state.param)
      }
    this.setState({
      loginLayer: loginLayer
    })
  }
  // 登录js移除
  loginLayerRemove = () => {
    if(this.state.loginLayer){
      this.state.loginLayer.parentNode.removeChild(this.state.loginLayer)
      window.WBtopGlobal_loginLayer = null
      this.setState({
        loginLayer: null
      })
    }
  }
  // 验证登录
  checkLogin = () => {
    this.$http.login()
    .then(res=>{
      if(res.code === 0){
        this.props.history.push('/task/sheet')
      }else{
        this.loginLayerInsert()
      }
    })
  }
}

export default Login