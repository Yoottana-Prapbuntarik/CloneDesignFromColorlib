import React, { Component } from 'react';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <NavigationBar/>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/About" component={About} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
