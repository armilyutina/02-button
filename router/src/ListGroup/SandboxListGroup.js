import React, { Fragment } from 'react';


import ListGroup from './ListGroup';
import ListGroupItem from './ListGroupItem';

import Button from '../Button/Button';
import Badge from '../Badge/Badge';


const SandboxListGroup = () => (

  <Fragment>

    <h2><span>1. Base list group:</span></h2>
    <ListGroup data-name = "base list group">
      <ListGroupItem>List item 1</ListGroupItem>
      <ListGroupItem>List item 2 </ListGroupItem>
      <ListGroupItem>List item 3 </ListGroupItem>
    </ListGroup>

    <h2><span>2. Group with active and disabled items:</span></h2>
    <ListGroup>
      <ListGroupItem active >List item 1</ListGroupItem>
      <ListGroupItem disabled>List item 2</ListGroupItem>
      <ListGroupItem>List item 3</ListGroupItem>
    </ListGroup>

    <h2><span>3. Group list ith custom components: </span></h2>
    <ListGroup>
      <ListGroupItem>List item 1 <Button active onClick = {()=>console.log('You clicked me, bitch!')}/> </ListGroupItem>
      <ListGroupItem>List item 2 <Badge value = {3} ciracle /> </ListGroupItem>
      <ListGroupItem>List item 3 <Badge value = {2} inline /> </ListGroupItem>
    </ListGroup>

    <h2><span>4. Group links list: </span></h2>
    <ListGroup>
      <ListGroupItem href = './test1'>List item 1</ListGroupItem>
      <ListGroupItem href = './test2'>List item 2</ListGroupItem>
      <ListGroupItem href = './test3'>List item 3</ListGroupItem>
    </ListGroup>

  </Fragment>

)



export default SandboxListGroup;
