import React, { Component } from 'react';

import './Nasa.css';


import Tag from '../Tag/Tag';


const BASE_PATH = "https://api.nasa.gov/planetary/apod";
const SEARCH_PATH = "api_key";
const SEARCH_PARAM = "=Y9Hanz2zEPJ5RNwJZcvje3c9svHq01w0qvcdhjTo";


class Nasa extends Component {

  state = {
    result: {},
  }

  componentDidMount(){

    fetch(`${BASE_PATH}?${SEARCH_PATH}${SEARCH_PARAM}`)
      .then(res => res.json())
      .then(result => this.setNews(result))
      .catch(err => err);
  }


  setNews = result => {
    this.setState({ result })
    console.log(result);
  }


  render(){

    const { result } = this.state;


    return(
          <Tag {...result} />
    );
  }
}




export default Nasa;
