import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './TabBar.css'
import TabBarNav from './TabBarNav';


class TabBar extends Component {

  static propTypes = {
    vertical: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    vertical: false,
    className: '',
    children: null,
  };

  state = {
    activeTab: null,
  }

  componentDidMount(){
    const { children = [] } = this.props;

    const activeTab = this.getChildrenLabels(children)[0]

    this.stateActiveTab(activeTab);
  }


  getChildrenLabels = (children) => {
    return children.map(({props}) => props.label);
  }

  stateActiveTab = (activeTab) => {
    const { activeTab: currentTab } = this.state;

    if (activeTab !== currentTab){
      this.setState({
        activeTab
      });
    }
  }


  renderTabs = () => {

    const { children = [] } = this.props;

    const { activeTab } = this.state;

    return this.getChildrenLabels(children).map((navLabel, i) => (
              <TabBarNav  key = {navLabel+i}
                          navLabel = {navLabel}
                          className = {classNames({ active: activeTab === navLabel})}
                          onChangeActiveTab = {this.stateActiveTab} />
                        )
                    )

  }



  render(){

    const { className, vertical, children } = this.props;
    const { activeTab } =  this.state;

    const classes = classNames(
      className,
      'tab-bar',
      { vertical }
    );

    return(
      <div className = {classes}>
          <div className = "tab-bar-nav">

            {
              this.renderTabs()
            }

          </div>

          <div className = "tab-container">
              {
                React.Children.map(children, child => React.cloneElement(child, {activeTab}))
              }
          </div>
      </div>

    );
  }
}


export default TabBar;
