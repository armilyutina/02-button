import React, { Fragment } from 'react';

import Button from './Button';


const SandboxButton = () => (
  <Fragment>

    <h2><span>1. Button with function: </span></h2>
    <Button onClick = {()=>console.log('Honey, you want to see me again?')} className = 'button' />

    <h2><span>2. Button with disable: </span></h2>
    <Button  disabled />

    <h2><span>3. Button with active: </span></h2>
    <Button active />

    <h2><span>4. Button with childrens: </span></h2>
    <Button type = "submit">Submit-Type</Button>
    <Button data-name = 'button' >Data-Name</Button>

    <h2><span>5. Button with href: </span></h2>
    <Button href="test">YOU WANT</Button>
    <Button href="test" disabled>CLICK ME</Button>

  </Fragment>
)




export default SandboxButton;
