import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import DisplayBlock from './DisplayBlock';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColor: { backgroundColor: "green", textColor: "white" }
    };
  }

  stateFunc = (newBkColor, newTextColor) => {
    this.setState({ displayColor: { backgroundColor: newBkColor, textColor: newTextColor } });
  }

  render() {
    const { displayColor } = this.state;

    return (
      <div className="App">
        <Button bkColor="red" text="Don't worry if something doesn't work. If everything worked, you would be fired)" textColor="white" onClickAct={this.stateFunc} />
        <Button bkColor="blue" text="Don't worry if something doesn't work. If everything worked, you would be fired)" textColor="yellow" onClickAct={this.stateFunc} />
        <Button bkColor="yellow" text="Don't worry if something doesn't work. If everything worked, you would be fired)" textColor="black" onClickAct={this.stateFunc} />
        <DisplayBlock bkColor={displayColor.backgroundColor} textColor={displayColor.textColor} />
      </div>
    );
  }
}

export default App;
