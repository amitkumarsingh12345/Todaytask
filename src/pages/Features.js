import React from 'react'

const Features = () => {
    return (
        <>
            <section className="features pos-rel pb-150 mb-0-pb">
                <div className="container">
                    <div className="sec-title text-center mb-95">
                        <h5 className="sec-title__subtitle">WHAY CHOOSE US</h5>
                        <h2 className="sec-title__title mb-25">Why choose our token?</h2>
                    </div>
                    <div className="feature__wrap pos-rel ul_li_between">
                        <div className="feature__item text-center">
                            <div className="icon">
                                <img src="img/icon/f_01.svg" alt="" />
                            </div>
                            <h4>
                                Mobile payment <br /> make easy
                            </h4>
                        </div>
                        <div className="feature__item text-center">
                            <div className="icon">
                                <img src="img/icon/f_02.svg" alt="" />
                            </div>
                            <h4>
                                Investment <br /> Projects
                            </h4>
                        </div>
                        <div className="feature__item text-center">
                            <div className="icon">
                                <img src="img/icon/f_03.svg" alt="" />
                            </div>
                            <h4>
                                Lifetime free <br /> transaction
                            </h4>
                        </div>
                        <div className="feature__item text-center">
                            <div className="icon">
                                <img src="img/icon/f_04.svg" alt="" />
                            </div>
                            <h4>
                                Protect the <br /> identity
                            </h4>
                        </div>
                        <div className="feature__item text-center">
                            <div className="icon">
                                <img src="img/icon/f_05.svg" alt="" />
                            </div>
                            <h4>
                                Security your <br /> money
                            </h4>
                        </div>
                        <div className="feature__line-shape">
                            <img src="img/shape/f_shape.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="feature__sec-shape">
                    <img src="img/shape/s_shape1.png" alt="" />
                </div>
            </section>
        </>
    )
}

export default Features