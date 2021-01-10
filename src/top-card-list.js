import React from 'react';

function TopCardList(){
    return(
        <section className="top-cards">
            <div className="wrapper">
                <div className="grid">
                    <article className="card facebook">
                        <p className="card-title">
                            <img src="#" alt="#" />
                            @tenikalerSmith
                        </p>
                        <p className="card-followers">
                            <span className="card-follwers-number">12323</span>
                            <span className="card-followers-title">Followers</span>
                        </p>
                        <p className="card-body">
                            <img src="#" alt="#" />
                            12 Today
                        </p>
                    </article>
                    <article className="card twitter">
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
                    </article>
                </div>
            </div>
        </section>
        
    );
}

export default TopCardList