import React from 'react';
import "./card-small.css";

function CardSmall({icon, pageView,growth}) {
  return (
    <div className="card-small">
      <p className="card-small-views"> Likes </p>
      <p className="card-small-icon">
        <img src={icon} alt="" />
      <p className="card-small-number"> {pageView} </p>
      </p>
      <p className="card-small-percentage is-danger">
        <span>
          <img src="images/icon-down.svg" alt="" />
          {growth}%
        </span>
      </p>
    </div>
  );
}

export default CardSmall
