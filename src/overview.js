import React from 'react';
import CardSmall from './card-small'
//* import Card from './card.js';
import "./overview.css"

const cardSmallList=[
    {
        icon:'images/icon-facebook.svg',
        pageViews : '87',
        growth: 3,
        key: 1,
    },
    {
        icon:'images/icon-twitter.svg',
        pageViews : '234',
        growth: 3257,
        key: 2,
    },
    {
        icon:'images/icon-instagram.svg',
        pageViews : '212',
        growth: 1375,
        key:3,
    },
    {
        icon:'images/icon-youtube.svg',
        pageViews : '22',
        growth:303,
        key: 4,
    },
    {
        icon:'images/icon-linkedin.svg',
        pageViews : '23',
        growth:-3,
        key: 5,
    },
    {
        icon:'images/icon-github.svg',
        pageViews : '21',
        growth: 3,
        key: 6,
    }
]

export default function Overview() {
    return (
        <section className="overview">
            <div className="wrapper">
                <h2> Overview - Today </h2>
                <div className="grid" >
                {
                //*? otra alternativa
                cardSmallList.map(({icon, pageViews, growth, key}) =>
                    <CardSmall
                        icon={icon}
                        key={key}
                        pageViews = {pageViews}
                        growth={growth}
                    />)
                }

                    {/* {
                        cardSmallList.map((cardSmallData) =>
                        <CardSmall key={cardSmallData.key} {...cardSmallData} />)
                    } */}
                </div>
            </div>
        </section>
    );
}

//* export default Overview