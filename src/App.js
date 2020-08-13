import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

const Button = ({
  children, onClick, disabled, active, className, ...atrs
}) => {


  const classes = classNames(
    'b-t-n',
    className,
    { active }
  );

const onClickActions = e =>{
  if (disabled) {
    e.preventDefault();
  }else{
    return onClick(e);
  }
};

const Tag = atrs.href ? 'a':'button';
  return(
    <Tag
    {...atrs}
    className = {classes}
    onClick = {onClickActions}
    disabled = {disabled}
    > {children} </Tag>
  );
};


Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  active: PropTypes.bool,
};


Button.defaultProps = {
  value: "default-name",
  onClick: () =>{},
  className: '',
  active: false,
  disabled: false,
};


export default Button;
