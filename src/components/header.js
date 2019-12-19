import React from 'react'
import { connect } from 'react-redux'
import { message, Menu, Dropdown, Icon } from 'antd'
import '../assets/styles/common.scss'

class header extends React.Component {
  render() {
    return <div className="header">
            <div className="logo">
              <img alt="logo" src={require('../assets/img/logo.png')} />
            </div>
            {
              this.props.userId !== ''
              ?
              <div className="user">
                <Dropdown 
                  overlay={
                    <Menu>
                      <Menu.Item onClick={this.logout}>退出</Menu.Item>
                    </Menu>
                }>
                  <span>
                  {this.props.userName} <Icon type="down" />
                  </span>
                </Dropdown>
                <span className="portrait"><img alt="portrait" src={this.props.portraitUrl} /></span>
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
      this.props.setUserInfo(res.data)
    })
  }
}

const mapStateToProps = state => {
  return {
    userName: state.user.userName,
    userId: state.user.userId,
    portraitUrl: state.user.portraitUrl
  }
}
const mapDispatchToProps = dispatch => {
  return {
      setUserInfo: (data) => {
          dispatch({type:'SET_USERINFO',...data})
      }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(header)