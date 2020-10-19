import React, { Fragment } from 'react';

import Icon from './Icon';

import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';


const Sandbox = () => (
    <Fragment>

      <h2><span>1. Base icon: </span></h2>
      <Icon size = {4} onClick = {()=>console.log('Honey, you want to see me again?')} name = 'atom' />


      <h2><span>2. Icons group: </span></h2>
      <ButtonGroup >
        <Button active>
          <Icon name = "align-left" />
        </Button>
        <Button>
          <Icon name = "align-center" />
        </Button>
        <Button>
          <Icon name = "align-right" />
        </Button>
        <Button>
          <Icon name = "align-justify" />
        </Button>
      </ButtonGroup>

      <h2><span>3. Icon with size 6 rem: </span></h2>
      <Icon size = {6} disabled name = "fa" />

    </Fragment>
  )




export default Sandbox;
