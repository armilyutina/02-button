import React from 'react';


import Tooltip from './Tooltip';
import Button from '../Button/Button';
import Img from '../Img/Img';


const SandboxTooltip = () => {
  return(
      <div>
        <h2><span>1. Base tooltip</span></h2>
        <Tooltip content = "base tooptip"
                 position = "top"><Button disabled />
        </Tooltip>

        <h2><span>2. Right tooltip</span></h2>
        <Tooltip position = "right"
                 content = "right tooltip"
                 style = {{color: 'pink'}}>SomeText</Tooltip>
        <h2><span>3.Left tooltip</span></h2>
        <Tooltip position = "left"
                 content = "left tooltip"><Img alt = "some image" height = {50} width = {50} /></Tooltip>
        <h2><span>4. Bottom tooltip</span></h2>
        <Tooltip position = "bottom"
                 content = "bottom tooltip"
                 style = {{fontSize: '20px'}}><Button active>SweetDreams</Button></Tooltip>
     </div>
   )
 }









export default SandboxTooltip;
