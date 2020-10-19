import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ListGroup.css';

const ListGroup = ({
  children, className, tag: Tag, ...attrs
}) => {

  const classes = classNames(
    className,
    'list-ggroup'
  );

  return(
    <Tag className = {classes} {...attrs}>
      {children}
    </Tag>
  )
}



ListGroup.propTypes = {
  children: PropTypes.node,
  className:  PropTypes.string,
  tag: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func
  ])
};


ListGroup.defaultProps = {
  className: '',
  tag: 'ul',
  children: null,
};


export default ListGroup;
