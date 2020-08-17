import React, { Component, Fragment } from 'react';

const TitleContext = React.createContext();


const LevelOne = () => <LevelTwo />

const LevelTwo = () => <LevelThree />

const LevelThree = () => (
  <TitleContext.Consumer>
  {  ({title, subTitle, clickTitle, clickSubTitle}) => (
      <Fragment>
        <h1 onClick = {clickTitle}>{title}</h1>
        <h2 onClick = {clickSubTitle}>{subTitle}</h2>
      </Fragment>
    )
  }
  </TitleContext.Consumer>
)


class Context extends React.Component {
  render(){
    return(
      <TitleContext.Provider value = {{ title: 'FirstTitle', subTitle:'SecondTitle',
                                        clickTitle: () => {console.log('Hello,')},
                                        clickSubTitle: () => {console.log('It`s me..!')} }}>
                <h2>I send some ones properties through the 2 components</h2>
                <LevelOne />

      </TitleContext.Provider>
    );
  }
}


export default Context;
