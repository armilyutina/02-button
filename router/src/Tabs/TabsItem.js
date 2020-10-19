import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


import './TabItem.css';



const TabsItem = ({
    children, activeTab, className, label, ...attrs
}) => {
  const classes = classNames(
    className,
    'tab-bar-item',
    { active: activeTab === label }
  );


  return (
      <div className = {classes} {...attrs}>{children}</div>
  )
}


TabsItem.propTypes = {
  activeTab: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
};


TabsItem.defaultProps = {
  activeTab: '',
  className: '',
  children: null,
};



export default TabsItem;
