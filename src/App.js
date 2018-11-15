import React from 'react';

import {Switch, Route, Link} from 'react-router-dom';
import Dashboard from './dashboard';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name:"User"
    }
  }

  componentDidMount(){
    this.loadfunction();
  }

  loadfunction = () => {
    //alert("Hello World")
  }

  render(){
    return(
      <div>
        <h1>Hello {this.state.name}</h1>
        <Link to="/Dashboard">Link Dashboard</Link>
        <Link to="/About">Link Product</Link>
        <Link to="/">Link Home</Link>
        <Switch>
          <Route path="/dashboard" component={Dashboard}/>
        </Switch>
      </div>
    )
  }
}