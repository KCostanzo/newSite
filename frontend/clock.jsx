import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    const date = new Date();

    var hour = date.getHours();
    if (hour === 0) {
      hour = 12;
    } else if (hour > 12) {
      hour -= 12;
    }
    const morning = date.getHours() < 12 ? true : false;

    this.state = {
      hour: hour,
      min: date.getMinutes(),
      sec: date.getSeconds(),
      morning: morning,
    };

    this.incrementor();
  }

  incrementor() {

  }

  render() {
    return (
      <div className="clock">
          {this.state.hour}
          <br/>
          {this.state.min}
          <br/>
          {this.state.sec}
          <br/>
          {this.state.morning}
      </div>
    )
  }

}
