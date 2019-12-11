import React from 'react'
import '../assets/styles/common.scss'
import { message } from 'antd'
import '../mock'

class header extends React.Component {
  constructor(){
    super()
    this.state = {
      userId:'',
      userName:'',
      portraitUrl:''
    }
  }
  render() {
    return <div className="header">
            <div className="logo">
              <img alt="logo" src={require('../assets/img/logo.png')} />
            </div>
            {
              this.state.userId !== ''
              ?
              <div className="user">
                <span>你好，{this.state.userName}</span>
                <span className="logout" onClick={this.logout}>退出</span>
              </div>
              :
              null
            }
          </div>
  }
  componentWillMount(){
    this.checkLogin()
  }
  // 退出
  logout = () => {
    this.$axios.post('user/logout')
    .then(res=>{
      message.success(res.data);
    })
    .catch(err=>{
      message.error(err.data);
    })
  }
  checkLogin(){
    this.$axios.post('user/login')
    .then(res=>{
      if(res.code === 50002){
        message.error('登录失效',()=>{
          this.props.history.push('/login')
        });
        return
      }
      this.setState({
        userId:res.data.userId,
        userName:res.data.userName,
        portraitUrl:res.data.portraitUrl
      })
    })
  }
}
export default header