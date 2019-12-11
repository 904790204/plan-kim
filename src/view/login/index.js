import React from 'react'
import '../../mock'

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
  }
  render(){
    return <div className="login"></div>
  }
  componentWillMount(){
    this.checkLogin()
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
    if(this.state.loginLayer){
      this.state.loginLayer.parentNode.removeChild(this.state.loginLayer)
      this.state.loginLayer = null
      window.WBtopGlobal_loginLayer = null
    }
  },
  checkLogin(){
    this.$axios.post('user/login')
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