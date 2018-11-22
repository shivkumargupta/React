import React from 'react';
import Header from './component/header';
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
        <Header />
        <Main />
      </div>
    )
  }
}