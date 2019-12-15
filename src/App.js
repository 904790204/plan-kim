import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './view/login'
import Header from './components/header'
import TaskSheet from './view/task-sheet'
import './assets/styles/index.scss'
import 'antd/dist/antd.css'
import './api'

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
