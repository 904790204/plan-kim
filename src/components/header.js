import React from 'react'
import '../assets/styles/common.scss'
import { message, Menu, Dropdown, Icon } from 'antd'
import store from '../store'

class header extends React.Component {
  constructor(){
    super()
    this.state = {
      userId:'',
      userName:'',
      portraitUrl:''
    }
    this.unsub = store.subscribe(()=>{
      this.setState({
        userId:store.getState().user.userId,
        userName:store.getState().user.userName,
        portraitUrl:store.getState().user.portraitUrl
      })
    })
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
  componentWillUnmount(){
    this.unsub()
  }
  // 退出
  logout = () => {
    this.$http.logout()
    .then(res=>{
      message.success(res.data)
      this.props.history.push('/login')
    })
    .catch(err=>{
      message.error(err.data);
    })
  }
  // 验证登录
  checkLogin(){
    this.$http.login()
    .then(res=>{
      if(res.code === 50002){
        message.error('登录失效',()=>{
          this.props.history.push('/login')
        });
        return
      }
      store.dispatch({type:'SET_USERINFO',...res.data}) 
    })
  }
}
export default header