import React, { Component } from 'react';

const LevelThree = ({ title }) => <h2>{title}</h2>

const LevelTwo = ({ title }) => <LevelThree  title = {title}/>

const LevelOne = ({ title }) => <LevelTwo title = {title}/>



class Props extends React.Component {
  render(){
    return(
      <div>
        <br />
        <LevelOne title = 'SimpleTitle' />
        <br />
      </div>
    );
  }
}




export default Props;
