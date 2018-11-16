import React from 'react';

import { Link } from 'react-router-dom';
import Main from './main';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "User"
    }
  }

  componentDidMount() {
    this.loadfunction();
  }

  loadfunction = () => {
    //alert("Hello World")
  }

  render() {
    return (
      <div>
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/About">About</Link>
        <Link to="/Home">Home</Link>
        <Main />
      </div>
    )
  }
}