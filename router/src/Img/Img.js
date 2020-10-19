import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';




const Img = ({ alt, src, className, width, height, ciracle, ...attrs }) => {

    const classes = classnames(
      className,
    );

    if(!src) {
      src = `https://via.placeholder.com/${width}x${height}`
    }

    return(
        <img alt = {alt} src = {src}
             width = {width} height = {height}
            className = {classes}  {...attrs}  />
      );
};



Img.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  className:PropTypes.string,
  width:PropTypes.number,
  height:PropTypes.number,
  ciracle: PropTypes.bool,
}

Img.defaultProps = {
  src: '',
  alt: '',
  width: 100,
  height: 100,
  className: '',
  ciracle: false
}




export default Img;
