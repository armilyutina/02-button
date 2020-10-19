import React, { Fragment, Component } from 'react';

import Button from '../Button/Button';
import ButtonGroup from './ButtonGroup';


class SandboxButtonGroup extends Component {
  state = {
    switchOn: true,
  }

  handleSwitchOn = () => {
    this.setState({ switchOn: true, })
  }

  handleSwitchOff = () => {
    this.setState({ switchOn: false, })
  }


  render(){

    const { switchOn } = this.state;

    return(
      <Fragment>
          <h2><span>1. Horizontal button Group</span></h2>
          <ButtonGroup>
            <Button active>First child</Button>
            <Button> Second child</Button>
            <Button>Third child</Button>
          </ButtonGroup>

          <h2><span>2. Vertical button Group</span></h2>
          <ButtonGroup vertical>
          <Button>First child</Button>
          <Button> Second child</Button>
          <Button active>Third child</Button>
          </ButtonGroup>

          <h2><span>3. Switch~er</span></h2>
          <ButtonGroup>
            <Button onClick = {this.handleSwitchOn} active = {switchOn}>ON</Button>
            <Button onClick = {this.handleSwitchOff} active = {!switchOn}>OFF</Button>
          </ButtonGroup>
      </Fragment>

    );
  }
}




export default SandboxButtonGroup;
