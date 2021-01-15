import React from 'react';
import Card from './card'
import './top-card-list.css'

const cardListData = [
    { 
        id:1,
        name: 'facebook',
        userName: '@tenikaler_Smith',
        icon: 'images/icon-facebook.svg',
        followers: '4223',
        todayFollowers: 22,
        iconToday: 'images/icon-up.svg',

    },
    {
        id: 2,
        name:'twitter',
        userName:'@teniSmith23',
        icon: 'images/icon-twitter.svg',
        followers: '123',
        todayFollowers: 3234,
        iconToday: 'images/icon-up.svg',
    },
    {
        id: 3,
        name: 'instagram',
        userName:'@tenismith2339',
        icon: 'images/icon-instagram.svg',
        followers: '2K',
        todayFollowers: 233,
        iconToday: 'images/icon-up.svg',
    },
    {
        id:4,
        name: 'youtube',
        userName:'@tsmith',
        icon: 'images/icon-youtube.svg',
        followers: '4k',
        todayFollowers: 33,
        iconToday: 'images/icon-up.svg',
    },
    {
        id:5,
        name: 'linkedin',
        userName:'@tenikalerSmith',
        icon: 'images/icon-linkedin.svg',
        followers: '4k',
        todayFollowers: 7,
        iconToday: 'images/icon-up.svg',
    },
    {
        id:6,
        name: 'github',
        userName:'@ArciSmith',
        icon: 'images/icon-github.svg',
        followers: '4k',
        todayFollowers: 3,
        iconToday: 'images/icon-up.svg',
    },
]

function TopCardList(){
    return(
        <section className="top-cards">
            <div className="wrapper">
                <div className="grid">

                {
                    cardListData.map ((cardData) =>
                    <Card key={cardData.id} {...cardData}
                    />)
                }

                    {/* <article className="card twitter">
                        <p className="card-title">
                            <img src="#" alt="#" />
                            @tenikalerSmith
                        </p>
                        <p className="card-followers">
                            <span className="card-follwers-number">4k</span>
                            <span className="card-followers-title">Followers</span>
                        </p>
                        <p className="card-body">
                            <img src="#" alt="#" />
                            4 Today
                        </p>
                    </article>
                    <article className="card instagram">
                        <p className="card-title">
                            <img src="#" alt="#" />
                            @tenikalerSmith
                        </p>
                        <p className="card-followers">
                            <span className="card-follwers-number">10k</span>
                            <span className="card-followers-title">Followers</span>
                        </p>
                        <p className="card-body">
                            <img src="#" alt="#" />
                            100 Today
                        </p>
                    </article> */}
                </div>
            </div>
        </section>
    );
}

export default TopCardList