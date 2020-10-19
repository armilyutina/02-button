import React, { Fragment } from 'react';

import Chip from './Chip';
import Example from './Example';

const SandboxChip = () => {
  return(

    <Fragment>

      <span><h3>1. Base chip: </h3></span>
      <Chip text='First Name' />

      <span><h3>2. Chip with long text: </h3></span>
      <Chip text = "This text is soo long that you cant see this full"/>

      <span><h3>3. Chip with icon and cloase button: </h3></span>
      <Chip text = "User name" withIcon />
      <Chip text = "User name" withClose />

      <span><h3>4. Chip is Full but not awfull: </h3></span>
      <Chip  withIcon withClose text = "User name"/>

      <span><h3>5. Chip with image: </h3></span>
      <Chip text = "User name" omageSrc = "https://pp.userapi.com/a9QrnDt7kgIb8VkcrCWpCoqd7JRwq5wX_YDr7Q/pOMxeuWzvxg.jpg?ava=1" imageAlt = "react"/>

      <h2><span>6. Chip with actions on Body and cross-icon:</span></h2>
    <Chip
      text="React"
      withImage
      imageSrc="https://pp.userapi.com/a9QrnDt7kgIb8VkcrCWpCoqd7JRwq5wX_YDr7Q/pOMxeuWzvxg.jpg?ava=1"
      imgAlt="react"
      onChipClick={() => { console.log('clicked on a chip body'); }}
    />
    <Chip
      text="Angular"
      withImage
      imageSrc="https://wishtackblog.files.wordpress.com/2017/03/angular.png?w=748"
      imgAlt="angular"
      onCloseClick={() => { console.log('clicked on a close icon'); }}
      withClose
    />
    <Chip
      text="Vue"
      withImage
      imageSrc="https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg"
      imgAlt="vue"
      onCloseClick={() => { console.log('clicked on a close icon'); }}
      onChipClick={() => { console.log('clicked on a chip body'); }}
      withClose
    />

    <h2><span>7. Example of using:</span></h2>
    <Example />


    </Fragment>

  )
}


export default SandboxChip;
