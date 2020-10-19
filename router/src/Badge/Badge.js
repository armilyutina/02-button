import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Badge.css';

const Badge = ({
  value, ciracle, inline, outer, className, ...attrs
}) => {

  const text = typeof value === 'string' || value instanceof String;

  const classes = classNames(
    className,
    'badge',
    { ciracle },
    { inline },
    { outer },
    { text },
    { warning: attrs.warning },
    { sucsess: attrs.sucsess },
    { info: attrs.info },
    { alert: attrs.alert },
  );

  return(
    <span className = {classes}>{value}</span>
  )
}


Badge.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  circle: PropTypes.bool,
  inline: PropTypes.bool,
  outer: PropTypes.bool,
  className: PropTypes.string,
}


Badge.defaultProps = {
  inline: false ,
  outer: false,
  className: '',
  ciracle: false,
}



export default Badge;
