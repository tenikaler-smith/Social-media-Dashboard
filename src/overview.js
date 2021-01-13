import React from 'react'

function Overview() {
    return (
        <section className="overview">
            <div className="wrapper">
                <h2> Overview - Today </h2>
                <div className="grid" >
                    <div className="card-small" >
                        <p className="card-small-views" > Likes </p>
                        <p className="card-small-icon">
                            <img src = "images/icon-facebook.svg" alt = "" />
                        </p>
                        <p className="card-small-number" > 52 </p>
                        <p className="card-small-percentage is-danger" >
                            <span >
                                <img src = "images/icon-down.svg" alt = "" />
                                2
                            </span>
                        </p>
                    </div>
                    <div className="card-small" >
                        <p className="card-small-views" > Likes </p>
                        <p className="card-small-icon" >
                            <img src = "images/icon-instagram.svg" alt = "" />
                        </p>
                        <p className="card-small-number" > 5462 </p>
                        <p className="card-small-percentage" >
                            <span>
                                <img src = "images/icon-up.svg" alt = "" />
                                2257 %
                            </span>
                        </p>
                    </div>
                    <div className="card-small" >
                        <p className="card-small-views" > Profile Views </p>
                        <p className="card-small-icon" >
                            <img src = "images/icon-instagram.svg" alt = "" />
                        </p>
                        <p className="card-small-number" > 52 k </p>
                        <p className="card-small-percentage" >
                            <span >
                                <img src = "images/icon-up.svg" alt = "" />
                                1375 %
                            </span>
                        </p>
                    </div>
                    <div className="card-small" >
                        <p className="card-small-views" > Retweets </p>
                        <p className="card-small-icon" >
                            <img src = "images/icon-twitter.svg" alt = "" />
                        </p>
                        <p className="card-small-number" > 117 </p>
                        <p className="card-small-percentage" >
                            <span >
                                <img src = "images/icon-up.svg" alt = "" />
                                303 %
                            </span>
                        </p>
                    </div>
                    <div className="card-small" >
                        <p className="card-small-views" > Likes </p>
                        <p className="card-small-icon" >
                            <img src = "images/icon-twitter.svg" alt = "" />
                        </p>
                        <p className="card-small-number" > 507 </p>
                        <p className="card-small-percentage" >
                            <span >
                                <img src = "images/icon-up.svg" alt = "" />
                                553 %
                            </span>
                        </p>
                    </div>
                    <div className="card-small" >
                        <p className="card-small-views" > Likes </p>
                        <p className="card-small-icon" >
                            <img src = "images/icon-youtube.svg" alt = "" />
                        </p>
                        <p className="card-small-number" > 107 </p>
                        <p className="card-small-percentage is-danger" >
                            <span>
                                <img src = "images/icon-down.svg" alt = "" />
                                19
                            </span>
                        </p>
                    </div>
                    <div className="card-small" >
                        <p className="card-small-views" > Total Views </p>
                        <p className="card-small-icon" >
                            <img src = "images/icon-youtube.svg" alt = "" />
                        </p>
                        <p className="card-small-number" > 1407 </p>
                        <p className="card-small-percentage is-danger" >
                            <span>
                                <img src = "images/icon-down.svg" alt = "" />
                                12 %
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>


    );
}

export default Overview