import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';


import Icon from '../Icon/Icon';
import Img from '../Img/Img';

import './Chip.css';

const Chip = ({
  text, withImage, withIcon, imageSrc, imageAlt, withClose, iconName, className, id, onChipClick, onCloseClick, ...attrs
}) => {

  const classes = classNames(
    className,
    'chip',
  );

  const onChipClickAction = () => {
    onChipClick(id)
  }



  const onCloseClickAction = e => {
    e.stopPropagetion();
    onCloseClick(e, id)
  }

  return(

    <div className = {classes} onClick = {onChipClickAction}>

      {
        withImage && <span className = "chipImage">
              <Img src = {imageSrc} alt = {imageAlt}  width = {24} height = {24}/>
        </span>
      }

      {
        withIcon && <span className = "chipIcon">
              <Icon  name = {iconName} />
        </span>
      }

      <span className = "chipText">{text}</span>

      {
        withClose && <span className = "chipClose" onClick = {onCloseClick}>
              <Img name = "time" />
        </span>
      }
    </div>

  );
}



Chip.propTypes = {
  text: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  className: PropTypes.string,
  imageSrc: PropTypes.string,
  withImage: PropTypes.bool,
  withIcon: PropTypes.bool,
  withClose: PropTypes.bool,
  iconName: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onChipClick: PropTypes.func,
  onCloseClick: PropTypes.func
}



Chip.defaultProps = {
  withIcon: false,
  withImage: false,
  withClose: false,
  imageAlt: '',
  className: '',
  imageSrc: '',
  text: '',
  iconName: 'user-tai',
  onChipClick: () => {},
  onCloseClick: () => {},
  id: null,
}


export default Chip;
