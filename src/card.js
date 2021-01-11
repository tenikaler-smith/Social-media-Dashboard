import React from 'react';
import './card.css'

function Card() {
  return (
    <article className="card facebook">
      <p className="card-title">
        <img src="#" alt="#" />
        @tenikalerSmith
      </p>
      <p className="card-followers">
        <span className="card-follwers-number"> 12323 </span>
        <span className="card-followers-title"> Followers </span>
      </p>
      <p className="card-body">
        <img src="#" alt="#" />
        12 Today
      </p>
    </article>
  );
}

export default Card