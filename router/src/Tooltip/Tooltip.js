import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Tooltip.css';

class Tooltip extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    content: PropTypes.string,
    position: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
    style: PropTypes.objectOf(PropTypes.string),
  }

  static defaultProps = {
    node: null,
    content: 'Tooltip content',
    style : {},
    position: 'top',
  }

  state = {
    visability: true
  }

  show = () => this.setVisability(true)

  hide = () => this.setVisability(false)

  setVisability = visability => this.setState({ visability })

  render(){

    const { children, content, position, style } = this.props;

    const { visability } =  this.state;

    const classes = classNames(
        'tooltip',
        position
    );


    return(

      <div className = "tooltipWrapper">
        {
          visability &&
                  <span style = {style} className = {classes}>{content}</span>
        }
        <span className = "tooltipElement"
              onMouseEnter = {this.show}
              onMouseLeave = {this.hide}
                                      >{children}</span>
      </div>

    );
  }
}


export default Tooltip;
