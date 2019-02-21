import React, { Component } from 'react';
import CalenderDate from './CalenderDate';
import './CalenderCanvas.css';

class CalenderCanvas extends Component {
    createCalenderDates = () => {
        let calenderDates = [];
  
        for (let i = 1; i < 32; i++) {
          calenderDates.push(<CalenderDate key={i} day={i}></CalenderDate>);
        }
  
        return calenderDates;
    }

    render() {
    return (
        <div className="CalenderCanvas_rectangle">
            {this.createCalenderDates()}
        </div>
    );
  }
}

export default CalenderCanvas;
