import React, { Component } from 'react';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name:"Shiv"
    }
  }

  componentDidMount(){
    this.loadfunction();
  }

  loadfunction = () => {
    alert("Hello World")
  }

  render(){
    return(
      <h1>Hello {this.state.name}</h1>
    )
  }
}