import React from 'react'

const Contact = () => {
    return (
        <>
            <section className="ico-contact pos-rel">
                <div className="container">
                    <div className="ico-contact__wrap">
                        <h2 className="title">Contact with coindox</h2>
                        <form action="#!">
                            <div className="row">
                                <div className="col-lg-6">
                                    <input type="text" placeholder="Enter Name" />
                                </div>
                                <div className="col-lg-6">
                                    <input type="email" placeholder="Enter Mail" />
                                </div>
                                <div className="col-lg-12">
                                    <textarea
                                        name="message"
                                        id="message"
                                        cols={30}
                                        rows={10}
                                        placeholder="Enter your message..."
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="ico-contact__btn text-center mt-10">
                                    <button className="thm-btn" type="submit">
                                        send message
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div className="ico-contact__shape-img">
                            <div className="shape shape--1">
                                <div data-parallax='{"y" : -50}'>
                                    <img src="img/shape/c_shape1.png" alt="" />
                                </div>
                            </div>
                            <div className="shape shape--2">
                                <div data-parallax='{"y" : 60}'>
                                    <img src="img/shape/c_shape2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ico-contact__shape">
                    <div className="shape shape--1">
                        <img src="img/shape/f_shape1.png" alt="" />
                    </div>
                    <div className="shape shape--2">
                        <img src="img/shape/f_shape2.png" alt="" />
                    </div>
                    <div className="shape shape--3">
                        <img src="img/shape/f_shape3.png" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
