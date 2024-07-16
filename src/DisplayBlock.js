import React, { Component } from 'react';

class DisplayBlock extends Component {
  render() {
    const { bkColor, textColor } = this.props;

    return (
      <div className='DisplayBlock' style={{ backgroundColor: bkColor, color: textColor, height: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span>React</span>
      </div>
    );
  }
}

export default DisplayBlock;
