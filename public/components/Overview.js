import React from 'react';
import {connect} from 'react-redux';
import {setDate} from '../actions/snapshot.actions';

import Snapshot from './Snapshot';

const data = [
  {
    name: 'Sexy time :)',
    date: '2016-08-08 21:00',
    message: 'Tills du får ta på mig'
  },
  {
    name: 'Stefan tillbaka från Arvika',
    date: '2016-08-07 19:30',
    message: 'Tills vi får vara ensamma tillsammans'
  },
  {
    name: 'Krotien Resan',
    date: '2016-08-05 16:00',
    message: 'Tills vi får kramas igen'
  },
];

function playSound() {
  const audio = new Audio('notification.mp3');
  audio.play();
}

const Overview = ({dispatch, history}) => (
  <div className="overview">
    <div className="logo">
      <div>NEMO</div>
      <div>Never Miss a Moment</div>
      <div style={{ cursor: 'pointer'}} onClick={ () => playSound() }>play</div>

    </div>

    {
      data.map((moment, i) => (
        <Snapshot {...moment} onClick={(date, message) => {
          dispatch(setDate(date, message));
          history.push('/moment');
        }} key={i}/>
      ))
    }
  </div>
);

export default connect()(Overview);