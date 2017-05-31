import React, { Component } from 'react';
import './App.css';
import './all/header.css';
import './all/body.css';
import './all/headerreponsive.css';
import HEADERTODO  from './all/header'
import BODYREACT  from './all/body'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      get: {
        uid : null,
        keyout :null,
      },
    }
  }

  getdata = (uid) => {
    this.setState({get:{uid: uid}})
  }
  getkey = (keyout) => {
    this.setState({get:{keyout: keyout}})
  }

  componentWillReceiveProps(nextProps) {
    console.log("New props", this.state);
  }

  render() {
    return (
      <div className="App">
        <HEADERTODO  global={this.state} getdata={this.getdata} getkey={this.getkey}/>
        <BODYREACT global={this.state} />
      </div>
    );
  }
}

export default App;
