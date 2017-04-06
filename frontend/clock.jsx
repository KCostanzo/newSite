import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    const date = new Date();

    let hour = date.getHours();
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
    setInterval(this.startSeconds.bind(this), 1000);
  }

  startSeconds() {
    let {sec} = this.state;
    if (sec < 59) {
      this.setState({ sec: sec += 1 });
    } else if (sec === 59) {
      this.setState({ sec: 0 });
      this.addMin();
    }
  }

  addMin() {
    let {min} = this.state;
    if (min < 59) {
      this.setState({ min: min += 1 });
    } else if (min === 59) {
      this.setState({ min: 0 });
      this.addHour();
    }
  }

  addHour() {
    let { hour } = this.state;
    if (hour < 12) {
      if (hour === 11) {
        this.toggleAmPm();
      }
      this.setState({ hour: hour+= 1});
    } else if (hour === 12){
      this.setState({ hour: 1 });
    }
  }

  toggleAmPm() {
    this.setState({ morning: !this.state.morning });
  }

  amOrPm() {
    if (this.state.morning) {
      return "AM";
    } else {
      return "PM";
    }
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
          <div className="AMPM">
          {this.amOrPm()}
          </div>
      </div>
    )
  }

}
