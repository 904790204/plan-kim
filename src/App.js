import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header'
import TaskSheet from './view/task-sheet/index'

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
      <Header />
      <Router>
        <Route path="/task-sheet" component={TaskSheet}></Route>
      </Router>
    </div>
  );
}

export default App;
