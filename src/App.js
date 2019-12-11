import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './view/login'
import Header from './components/header'
import TaskSheet from './view/task-sheet'

React.Component.prototype.proxyData = (target,data) => {
  Object.keys(data).forEach(key=>{
    Object.defineProperty(target,key,{
      get(){
          return data[key]
      },
      set(newValue){
          data[key] = newValue
      }
    })
  })
}
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login" component={Login}></Route>
        <Route path="/task">
          <Route component={Header}></Route>
          <Route path="/task/sheet" component={TaskSheet}></Route>
        </Route>
      </Router>
    </div>
  );
}

export default App;
