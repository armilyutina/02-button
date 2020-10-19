import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Input.css';


const Input = ({
    id, className, label, error, ...attrs
}) => {

  const classes = classNames(
    className,
    'input',
    { label }
  );

  return (
    <div className = "inputWrapper">
      {
        label &&
            <label className = "inputLabel" htmlFor={id}>{label}</label>
      }
        <input className = {classes}
                    name = {id}
                    {...attrs}
                    id = {id}
                        />
      {
        attrs.required &&
              <span className = "inputRequired">Required</span>
      }
      {
        error && <span className = "inputError">{error}</span>
      }
      </div>
  );
}


Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
};


Input.defaultProps = {
  className : '',
  id: '',
  label: 'defaul label',
  error: ''
};


export default Input;
