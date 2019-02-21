import React, { Component } from 'react';
import './CalenderDate.css';

class CalenderDate extends Component {
  render() {
    return (
        <div className="CalenderDate_rectangle">
            <div className="CalenderDate_day">{this.props.day}</div>
        </div>
    );
  }
}

export default CalenderDate;
