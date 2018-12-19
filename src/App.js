import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import HomePage from './containers/HomePage'
import {Route,Switch} from 'react-router-dom'
import Footer from './containers/Footer'
import HeroIcon from './components/HeroIcon'
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <div className='main-overflow'>
        <Switch>
          <Route exact path="/" component={HomePage}/>
        </Switch>
        <Footer/>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
