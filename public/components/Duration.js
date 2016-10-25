import React, {Component} from 'react';
import moment, {duration} from 'moment';
import countdown from 'countdown';
import 'moment-countdown';
import {connect} from 'react-redux';

class Duration extends Component {

  constructor(props) {
    super(props);
    const {days, hours, minutes, seconds} = moment(props.date.date).countdown();
    this.state = {
      days: days < 10 ? '0' + days : days,
      hours: hours < 10 ? '0' + hours : hours,
      mins: minutes < 10 ? '0' + minutes : minutes,
      secs: seconds < 10 ? '0' + seconds : seconds
    };
  }

  componentWillMount() {
    console.log(this.props.date.date);
    this.startCountdown();
  }

  componentWillUnmount() {
    console.log('unmounting');
    this.stopCountdown();
  }

  setTimeLeft() {
    const {days, hours, minutes, seconds} = moment(this.props.date.date).countdown();
    return this.setState({
      days: days < 10 ? '0' + days : days,
      hours: hours < 10 ? '0' + hours : hours,
      mins: minutes < 10 ? '0' + minutes : minutes,
      secs: seconds < 10 ? '0' + seconds : seconds
    });
  }

  startCountdown() {
    this.intervalID = setInterval(() => {
      this.setTimeLeft();
    }, 1000);
  }

  stopCountdown() {
    clearInterval(this.intervalID);
  }


  render() {

    const {days, hours, mins, secs} = this.state;

    return (
      <div className="count-down">
        <div className="wrapper">
          <div className="time">
            <div className="number">{ days }</div>
            <div className="unit">dagar</div>
          </div>
          <div className="time">
            <div className="number">{ hours }</div>
            <div className="unit">timmar</div>
          </div>
          <div className="time">
            <div className="number">{ mins }</div>
            <div className="unit">minuter</div>
          </div>
          <div className="time">
            <div className="number">{ secs }</div>
            <div className="unit">sekunder</div>
          </div>
        </div>
        <div className="message">
          <div className="heart"><img src="./heart.png" alt="heart"/></div>
          <div className="text">{this.props.date.message}</div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    date: state.date
  }
}

export default connect(mapStateToProps)(Duration);