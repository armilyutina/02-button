import React, { Fragment } from 'react';
import Button from './App';


const Stanbox = () =>(
  <Fragment>
      <h2><span>1. Text and onClick func: </span></h2>
      <Button onClick={(i)=>console.log('You clicked me  some ones')}>Button-text</Button>

      <h2><span>2. Disable </span></h2>
      <Button disabled className = ''>Button is disable</Button>

      <h2><span>3. SomeText else  </span></h2>
      <Button  onClick = {()=> console.log('*_*')} active>Active&Function</Button>

      <h2><span>4. Handle some non-type attributes  </span></h2>
      <Button  data-name = 'button' type = 'submit'>This button isn't button, submitClicked</Button>

      <h2><span>5. Links  </span></h2>
      <Button href = 'test' data-name = 'button' >SomeButton which are links</Button>
      <Button  data-name = 'button' type = 'submit' disabled>Some</Button>


  </Fragment>
);


export default Stanbox;
