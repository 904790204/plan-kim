import React from 'react'
import '../assets/styles/common.scss';
import { message } from 'antd';

class header extends React.Component {
  render() {
    return <div className="header">
            <div className="logo">
              <img alt="logo" src={require('../assets/img/logo.png')} />
            </div>
            <div className="user">
                <span>你好，kim</span>
                <span className="logout" onClick={this.logout}>退出</span>
            </div>
          </div>
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
}
export default header