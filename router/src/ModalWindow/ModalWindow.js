import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import MyPortal from '../Portal/MyPortal';


import './ModalWindow.css';



const ModalWindow = ({
    title, isOpen, onCancel, onSubmit, children
}) => {



  return(
  <>
  { isOpen
      &&
        <MyPortal>
          <div className = "modalOverlay">
            <div className = "modalWindow">
              <div className = "modalHeader">
                <div className = "modalTitle">{title}</div>
                <Icon onClick = {onCancel}  name = "times" style = {3} />
              </div>

              <div className = "modalBody">
                    {children}
              </div>

              <div className = "modalFooter">
                    <Button active onClick = {onSubmit}>Submit</Button>
                    <Button active onClick = {onCancel} invert>Cancel</Button>
              </div>
            </div>
            !!!
          </div>
        </MyPortal>
  }
  </>
  );
}


ModalWindow.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    onSubmit: PropTypes.func,
};


ModalWindow.defaultProps = {
    children: null,
    title: 'Default title modal window',
    isOpen: false,
    onClose: ()=>{},
    onSubmit: ()=>{},
};


export default ModalWindow;
