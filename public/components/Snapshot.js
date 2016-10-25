import React from 'react';
import {Link} from 'react-router';
import {getSnapshotTime} from '../utils/snapshotTime.util';

const SnapShot = ({ name, date, message, onClick}) => (
  <div className="snapshot" onClick={() => onClick(date, message)}>
    <div className="thumbnail">
      <div className="elapsed">{ getSnapshotTime(date) }</div>
    </div>
    <div className="description">
      <div className="name">{ name }</div>
      <div className="date">{ date }</div>
    </div>
  </div>
);

export default SnapShot;