import React from 'react';


import Input from './Input';


const SandboxInput = () => (
  <div>
    <h2><span>1. Base input with text</span></h2>
    <Input id = "text" type = "text"/>

    <h2><span>2. Input with label and number-type </span></h2>
    <Input label = "Label Input" type = "number" id = "number"/>


    <h2><span>3. Input with weeks day and and error-label </span></h2>
    <Input type = "week" error = "WrongDay" label = "ChooseWeeks" id = "week"/>


    <h2><span>4. Input date with rquired </span></h2>
    <Input id = "date" type = "date" required/>

    <h2><span>5. Input file with label&required</span></h2>
    <Input required type = "file" id = "file" label = "file"/>

    <h2><span>6. Input type color</span></h2>
    <Input type = "color" id = "color" />

    <h2><span>7. Input type range with default state</span></h2>
    <Input type = "range" id = "range" defaultValue = {30} onClick = {()=>{}}/>

    <h2><span>8. Input type checkbox</span></h2>
    <Input type = "checkbox" id = "checkbox" checked onChange = {()=>{}}/>

    <h2><span>9. Input type readio</span></h2>
    <Input disabled type = "radio" id = "radio" />
  </div>
)


export default SandboxInput;
