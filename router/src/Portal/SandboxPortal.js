import React, { Component } from 'react';

import MyPortal from './MyPortal';

class SandboxPortal extends Component {

  state = { count: 0 }


  handleClick = () => (
    this.setState({ count: this.state.count + 1})
  )

  render(){
    const { count } = this.state
    return(
      <div onClick = {this.handleClick} className = "portal" >
        <div>Text</div><br />
        <span>Click_count: {count}</span>
        <br />
        <MyPortal>
          <span>It's here because PORTAL was build after ROOT-div container</span><br />
          <button className="portal-containter">CLICK ME PLEASE</button>
        </MyPortal>
      </div>
    );
  }
}


export default SandboxPortal;
