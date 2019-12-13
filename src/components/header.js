import React from 'react'
import '../assets/styles/common.scss'
import { message, Menu, Dropdown, Icon } from 'antd'
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
                <Dropdown 
                  overlay={
                    <Menu>
                      <Menu.Item onClick={this.logout}>退出</Menu.Item>
                    </Menu>
                }>
                  <span>
                  {this.state.userName} <Icon type="down" />
                  </span>
                </Dropdown>
                <span className="portrait"><img alt="portrait" src={this.state.portraitUrl} /></span>
              </div>
              :
              null
            }
          </div>
  }
  componentDidMount(){
    this.checkLogin()
  }
  // 退出
  logout = () => {
    this.$axios.post('user/logout')
    .then(res=>{
      message.success(res.data)
      this.props.history.push('/login')
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