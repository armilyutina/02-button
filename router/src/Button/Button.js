import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


import './Button.css';


const Button = ({
    children, disabled, className, active, onClick, invert, ...attrs
}) => {

  const Tag = attrs.href ? 'a' : 'button';


  const onClickAction = (e) => {
    if(disabled){
      e.preventDefault();
    }else{
      return onClick(e);
    }
  }

  const classes = classNames(
    className,
    'btn',
    { active },
    { invert }
  );

  return(
        <Tag {...attrs}
                className = {classes}
                disabled = {disabled}
                onClick = {onClickAction}
                        >{children}</Tag>
  )

}




Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool

}


Button.defaultProps = {
  disabled: false,
  className: '',
  onClick: () => {},
  active: false,
  children: 'Default button',
}




export default Button;
