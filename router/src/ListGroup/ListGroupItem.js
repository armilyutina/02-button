import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ListGroupItem.css';

const ListGroupItem = ({
  children, tag: Tag, className, disabled, active, ...attrs
}) => {

  if(attrs.href && Tag === 'li'){
    Tag = 'a'
  }

  const classes = classNames(
    className,
    'list-group-item',
    { disabled },
    {  active }
  );

  return(
    <Tag className = {classes} {...attrs}>
      {children}
    </Tag>
  )
}


ListGroupItem.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func
  ]),
  className: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
}

ListGroupItem.defaultProps = {
  className: '',
  tag: 'li',
  children: null,
  active: false,
  disabled: false,
}


export default ListGroupItem;
