import React from 'react';
import './card.css'

function Card({name, userName, icon, followers, todayFollowers, iconToday}) {
  const cardClass = `card ${name}`
  return (
    <article className={cardClass}>
      <p className="card-title">
        <img src={icon} alt="#" />
        {userName}
      </p>
      <p className="card-followers">
        <span className="card-follwers-number">{followers}</span>
        <span className="card-followers-title"> Followers </span>
      </p>
      <p className="card-today">
        <img src={iconToday} alt="#" />
        {todayFollowers} Today
      </p>
    </article>
  );
}

export default Card