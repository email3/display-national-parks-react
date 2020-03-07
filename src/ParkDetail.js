import React from 'react';

const ParkDetail = props => {
  return (
    <div className="park">
      <div className="parkImage">
        <a href="{props.image}" target="parkImage" className="thumbnail">
          <img alt="thumbnail" src={props.thumbnail} />
        </a>
        <div className="metadata">
          <div className="text">Location: {props.location}</div>
          <div className="text">Established: {props.established}</div>
          <div className="text">Area: {props.area}</div>
          <div className="text">Visitors: {props.recreationVisitors}</div>
        </div>
      </div>
      <div className="content">
        <a href="/" className="parkName">
          {props.name}
        </a>
        <div className="text">{props.description}</div>
      </div>
    </div>
  );
};

export default ParkDetail;
