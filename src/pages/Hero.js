import React from 'react'

const Hero = () => {
    return (
        <>
            <section className="hero hero__ico pos-rel">
                <div className="hero__bg" data-background="img/bg/hero_bg.png" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="hero__content">
                                <h1 className="title mb-45">
                                    Participate in the <span>Ongoing ICO Token</span> Sale{" "}
                                </h1>
                                <div className="btns">
                                    <a className="thm-btn" href="#!">
                                        PURCHASE TOKEN
                                    </a>
                                    <a className="thm-btn thm-btn--dark" href="#!">
                                        WHITEPAPPER
                                    </a>
                                </div>
                                <div className="hero__progress mt-50">
                                    <div className="progress-title ul_li_between">
                                        <span>
                                            <span>Raised -</span> 1,450 Tokens
                                        </span>{" "}
                                        <span>
                                            <span>Target -</span> 150,000 Tokens
                                        </span>
                                    </div>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: "75%" }}
                                            aria-valuenow={75}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                    <ul className="ul_li_between">
                                        <li>Pre Sell</li>
                                        <li>Soft Cap</li>
                                        <li>Bonus</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="hero__explore-wrap text-center">
                                <div className="hero__explore text-center">
                                    <div className="scroll-down" />
                                    <span>Explore Causes</span>
                                </div>
                                <div className="hero__countdown">
                                    <h6 className="text-center">ICO Will Start in..</h6>
                                    <div
                                        className="countdown ul_li_center"
                                        data-countdown="2024/08/28"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero__shape">
                    <div className="shape shape--1">
                     <img src="img/shape/h_shape.png" alt="" />
                    </div>
                    <div className="shape shape--2">
                        <img src="img/shape/h_shape2.png" alt="" />
                    </div>
                    <div className="shape shape--3">
                        <img src="img/shape/h_shape3.png" alt="" />
                    </div>
                </div>
                <div className="hero__coin">
                    <div className="coin coin--1">
                        <img src="img/icon/coin1.png" alt="" />
                    </div>
                    <div className="coin coin--2">
                        <img src="img/icon/coin2.png" alt="" />
                    </div>
                    <div className="coin coin--3">
                        <img src="img/icon/coin3.png" alt="" />
                    </div>
                    <div className="coin coin--4">
                        <img src="img/icon/coin4.png" alt="" />
                    </div>
                    <div className="coin coin--5">
                        <img src="img/icon/coin5.png" alt="" />
                    </div>
                    <div className="coin coin--6">
                        <img src="img/icon/coin6.png" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
