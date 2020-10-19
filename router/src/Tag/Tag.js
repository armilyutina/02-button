import React from 'react';

import './Tag.css';

import Img from '../Img/Img';




const Tag = ({ url, explanation, title, date }) => (
  <div className = "tag">
      <span className = "title">{title}</span>
      <br />
      <span className = "date">{date}</span>
      <Img alt = '' src = {url} className = "img" circle={true} />
      <span className = "explanation">{explanation}</span>
  </div>
)




export default Tag;
