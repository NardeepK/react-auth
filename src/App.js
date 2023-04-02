import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/home.component';
import Nav from './components/nav.component';
import Login from './components/login.component'
import Register from './components/register.component';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { Forgot } from './components/forgot.component';
import { Reset } from './components/reset.component';



export default class App extends Component {
  state= {};

  componentDidMount = () => {
    axios.get('user').then(
        res => {
           this.setState({
            user: res.data
           });
        },
        err => {
            console.log(err);
        }
    )
};

  render() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav user={this.state.user} />

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route exact path="/" Component={() => <Home user={this.state.user} />} />
            <Route exact path="/login" Component={Login} />
            <Route exact path="/register" Component={Register} />  
            <Route exact path="/forgot" Component={Forgot} />
            <Route exact path="/reset" Component={Reset} />
          </Routes>
          
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}
}
