import React,  { Fragment } from 'react';

import Image from './Img';


const SandboxImage = () => (
  <Fragment>
    <h2><span>1. Base image: </span></h2>
    <Image />

    <h2><span>2. Image with alt- and src- propreties: </span></h2>
    <Image alt = "Some image"
           src = "https://icon-icons.com/ru/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA/%D0%94%D0%B8%D0%BD%D0%BE-%D0%B4%D0%B8%D0%BD%D0%BE%D0%B7%D0%B0%D0%B2%D1%80/153299#96"
            />


    <h2><span>3. Image with different size: </span></h2>
      <Image width = {100} height = {200} />
      <Image width = {70} height = {140} />
      <Image width = {50} height = {100} />

    <h2><span>4. Image with circle property: </span></h2>
        <Image width = {100} height = {110}
              />

  </Fragment>
)




export default SandboxImage;
