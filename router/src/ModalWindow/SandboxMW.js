import React, { Component } from 'react';
import Button from '../Button/Button';

import ModalWindow from './ModalWindow';

class SandboxMW  extends Component {

  state = {
    isOpen: false
  }

  handleOpen = () => this.setState({ isOpen: true})

  onCancel = () => {
    this.setState({isOpen: false});
    console.log("Cansel function");
  }

  onSubmit = () => {
    this.setState({isOpen: false});
    console.log("Submit function");
  }

  render(){

    const { isOpen } = this.state;

    return(
      <div>
      <h2><span>1. Base modal window</span></h2>
      <Button active onClick = {this.handleOpen} />
      <ModalWindow title = "modalWindow"
                   isOpen = {isOpen}
                   onCancel = {this.onCancel}
                   onSubmit= {this.onSubmit}
                          />
      </div>
    );
  }

}


export default SandboxMW;
