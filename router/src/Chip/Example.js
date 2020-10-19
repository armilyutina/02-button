import React, { Component, Fragment } from 'react';


import Chip from './Chip';


class Example extends Component {

  state = {
    people: [
      {
        name: 'Vinogradik',
      },
      {
        name: 'Syrok',
      },
      {
        name: 'Limon',
      },
    ],
  }

  removeChip = (e, id) => {
    this.setState(({people}) => ({
      people: people.filter(({name}) => name !== id)
    }))
  }


  toggleActiveChip = id => {
    this.setState(
      ({people}) => (
        people.map(({name, active}) =>
      {
        if (name === id) {active = !active}
        return name, active
      }
      )
    ))
  }


  render(){

    const { people } = this.state

    return(
      <Fragment>
        {
          people.map(({name, active}) =>
            (  <Chip text = {name}
                      id = {name}
                      key = {name}
                      withClose
                      withIcon
                      onCloseClick={this.removeChip}
                      onChipClick={this.toggleActiveChip}
                      className = {active ? 'active' : ''}
                                />
                              )
                            )

        }

      </Fragment>

    );
  }
}

export default Example;
