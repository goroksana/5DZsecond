import React, { Component } from 'react';

class Button extends Component {
  btnClickHandler = () => {
    const { bkColor, textColor, onClickAct } = this.props;
    onClickAct(bkColor, textColor);
  }

  render() {
    const { bkColor, textColor, text } = this.props;

    return (
      <button className="Button" style={{ backgroundColor: bkColor, height: "50px", color: textColor }} onClick={this.btnClickHandler}>
        {text}
      </button>
    );
  }
}

export default Button;
