import React from 'react';

const Park = props => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
    </div>
  );
};

export default Park;
