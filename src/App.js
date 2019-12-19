import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'
import Login from './view/login'
import Header from './components/header'
import TaskSheet from './view/task-sheet'
import './assets/styles/index.scss'
import 'antd/dist/antd.css'
import './api'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route path='/' exact render={()=> (<Redirect to="/task/sheet"/>)}/>
          <Route path="/login" component={Login}></Route>
          <Route path="/task">
            <Route component={Header}></Route>
            <Route path="/task/sheet" component={TaskSheet}></Route>
          </Route>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
