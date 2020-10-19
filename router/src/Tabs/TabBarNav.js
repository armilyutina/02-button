import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


import './TabBarNav.css';

const TabBarNav = ({
    className, navLabel, onChangeActiveTab, ...attrs
}) => {

  const classes = classNames(
    className,
    'tab-bar-nav',
  );

  return(
    <button className = {classes}
            onClick = {() => onChangeActiveTab(navLabel)}
              >{navLabel}</button>
  );
}


TabBarNav.propTypes = {
  className: PropTypes.string,
  navLabel: PropTypes.string,
  onChangeActiveTab: PropTypes.func,
};


TabBarNav.defaultProps = {
  className: '',
  onChangeActiveTab: ()=>{},
  navLabel: 'Tab',
}



export default TabBarNav;
