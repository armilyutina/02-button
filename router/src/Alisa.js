import React, { Component } from 'react';


import './Alisa.css';


class Alisa extends Component {


  constructor(prop){
    super(prop);
    this.state = {}
  }



  handlePrevClick = () => (
    console.log("prev")
  )

  handleNextClick = () => (
    console.log("next")
  )

  render(){
    return(
      <div className = "container">
        <div className = "slider-container">
          <div className = "slider-track">
            <div className = "slider-item"></div>
            <div className = "slider-item"></div>
            <div className = "slider-item"></div>
            <div className = "slider-item"></div>
            <div className = "slider-item"></div>
            <div className = "slider-item"></div>
            <div className = "slider-item"></div>
          </div>
        </div>

        <button className="button-control prev" onClick = {this.handlePrevClick}>Prev</button>
        <button className="button-control next" onClick = {this.handleNextClick}>Next</button>
      </div>
    );
  }


}


export default Alisa;
