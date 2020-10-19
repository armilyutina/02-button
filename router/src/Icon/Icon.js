import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

import './Icon.css';


const Icon = ({
        name, className, onClick, size, disabled, ...attrs
                    }) => {

  const elemSize = size ? {fontSize: `${size}rem`}:null

  const classes = classNames(
    className,
    'fa',
    `fa-${name}`,
    { disabled },
    { func: onClick }
  );

  return(
    <i
      {...attrs}
      className = {classes}
      onClick = { disabled? null : onClick }
      style = {elemSize}
      />
  )
}



Icon.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.number,
  disabled: PropTypes.bool,
}


Icon.defaultProps = {
  name: '',
  className: 'icon',
  onClick: () => {},
  size: null,
  disabled: false
}




export default Icon;
