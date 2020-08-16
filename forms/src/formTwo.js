import React, { Component } from 'react';




class FormTwo extends React.Component {

  state = {
    inputName: '',
    textAreaName: '',
    selectedName: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }



  render(){

    const { inputName, textAreaName, selectedName } = this.state;

    return(
      <div>
        <form>
          <br /><br /><br />
          <h1>This form using only one handle that called "handleChange" // equal event with [e.target.name]</h1>

          <h4><em> Input Element </em> <input value = {inputName}
                                              onChange = {this.handleChange}
                                              name = 'inputName'/> </h4>

          <h4><em> TextArea Element</em> <textarea value = {textAreaName}
                                                   onChange = {this.handleChange}
                                                   name='textAreaName'/></h4>

          <h4><em> SelectOption Element </em></h4>
          <select value={selectedName}
                  onChange = {this.handleChange}
                  name='selectedName'>

            <option  name={selectedName} value = {'Frontend-developer'}>Frontend-developer</option>
            <option  name={selectedName} value = {'Backend-developer'}>Backend-developer</option>

          </select>
        </form>


        <h3><em>Input Value: {this.state.inputName}</em></h3>
        <h3><em>TextArea Value: {this.state.textAreaName}</em></h3>
        <h3><em>SelectedItem Value: {this.selectedName}</em></h3>
      </div>
    );
  }
}

export default FormTwo;
