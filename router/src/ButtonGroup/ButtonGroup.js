import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import classNames from 'classnames';

import './ButtonGroup.css';


const ButtonGroup = ({
        children, vertical, className, ...attrs
}) => {

  const classes = classNames(
    className,
    'btn-group',
    { vertical }
  );

  return(
    <div
          className = {classes}
          {...attrs}
              >{children}</div>
  );
}


ButtonGroup.propTypes = {
  chilren: PropTypes.node,
  vertical: PropTypes.bool,
  className: PropTypes.string,
}


ButtonGroup.defaultProps = {
  node: null,
  vertical: false,
  className: '',
}




export default ButtonGroup;
