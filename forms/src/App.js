import React from 'react';
import './App.css';

const SELECT_ITEM = [
  {
    name: 'Frontend developer',
    value: 'Frontend developer'
  },
  {
    name: 'Backend developer',
    value: 'Backend developer'
  }
]

const Item = () => (
  SELECT_ITEM.map(({name, value, index}) => (
       <option value = {value} key = {index}>{name}</option>
  ))
);


class Forms extends React.Component {

  state = {
    inputForm: '',
    textareaForm: '',
    selectForm: '',
  }

  handleInputChange = ({target: {value}}) => (
    this.setState({
      inputForm: value,
    })
  );

  handleTextareaChange = ({target: {value}}) => (
    this.setState({
      textareaForm: value,
    })
  );

  handleSelectChange = ({target: {value}}) => (
    this.setState({
      selectForm: value,
    })
  );


  render(){
    const { inputForm, textareaForm, selectForm  } = this.state;
    return(
      <div>
        <h1>This form has personality handles for every element in this.</h1>
        <form>
          <label>Your Name: <input value = {inputForm}
                                   onChange = {this.handleInputChange}/>

          </label> <br /><br />
          <label>Message: <textarea value = {textareaForm}
                                    onChange = {this.handleTextareaChange}/>
          </label><br /><br />
          <select onChange = {this.handleSelectChange}
                  value = {selectForm}>
              <Item />
          </select>
        </form>

        <br />

        <h3>Your name: <em>{inputForm}</em></h3>
        <h3>Message: <em>{textareaForm}</em></h3>
        <h3>Selected item: <em>{selectForm}</em></h3>

      </div>
    );
  }
}

export default Forms;
