import React from 'react'

class header extends React.Component {
  render() {
    return <div className="header">
            <div className="logo">
              <img src="./src/assets/img/logo.png" />
            </div>
            <div className="user">
                <span>kim</span>
                <span>退出</span>
            </div>
          </div>
  }
}
export default header