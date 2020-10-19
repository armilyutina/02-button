import React, { Fragment } from 'react';
import TabBar from './TabBar';
import TabsItem from './TabsItem';


import Img from '../Img/Img';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';


const SandboxTabs = () => (
  <Fragment>

    <h2><span>1. Horizontal-position Tabbar</span></h2>
    <TabBar>
      <TabsItem label = "First item">
        <ButtonGroup vertical>
            <Button active>First child</Button>
            <Button> Second child</Button>
            <Button>Third child</Button>
        </ButtonGroup>
      </TabsItem>
      <TabsItem label = "Second item"><Img alt = "someImage"
                                            src = "https://pp.userapi.com/a9QrnDt7kgIb8VkcrCWpCoqd7JRwq5wX_YDr7Q/pOMxeuWzvxg.jpg?ava=1"
                                            width = {100}
                                            height = {110}
                                            /></TabsItem>
      <TabsItem label = "Third item"><Button disabled onClick = {()=>console.log("He-he-he-he")} /></TabsItem>
      <TabsItem label = "Forth item">SomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSome
      TextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSome
      TextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSome
      TextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSome
      TextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeText<ButtonGroup /></TabsItem>
    </TabBar>

    <h2><span>2. Vertical-position Tabbar</span></h2>
    <TabBar vertical>
      <TabsItem label = "vertical item one">TextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSome
      TextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSome
      TextSomeTextSomeTextSomeTextSomeText</TabsItem>
      <TabsItem label = "vertical item two"><Button active onClick = {()=>console.log("Uh-uh-uh")} /></TabsItem>
      <TabsItem label = "vertical item three"><Img alt = 'defaul image' ciracle /></TabsItem>
    </TabBar>


  </Fragment>
)



export default SandboxTabs;
