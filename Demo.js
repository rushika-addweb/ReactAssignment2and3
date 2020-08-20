import React, { Component } from 'react';
import './Demo.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class Demo extends Component {

  state = {
    userInput: ''
  }

  inputChangedHandler = ( event ) => {
    this.setState( { userInput: event.target.value } );
  }

  deleteCharHandler = ( index ) => {
    const text = this.state.userInput.split('');
    text.splice(index, 0);
    const updatedText = text.join('');
    
  }

  render () {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
        character={ch} 
        key={index}
        clicked={() => this.deleteCharHandler(index)} />;
    });

    return (
      <div className="Demo">
       
        <input
		className="center"
          type="text" 
		  placeholder="please enter the message"
          onChange={this.inputChangedHandler}
          value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}


export default Demo;
