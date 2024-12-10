import React from 'react'

const Footer = () => {
    return (
        <>
            <footer
                className="site-footer footer__ico pos-rel"
                data-background="img/bg/footer_bg.png"
            >
                <div className="container">
                    <div className="row mt-none-30">
                        <div className="col-lg-4 mt-30">
                            <div className="footer__widget footer__subscribe">
                                <h2>Subscribe newsletter</h2>
                                <p>
                                    Pre-ICOs typically offer early access to the <br /> project's
                                    tokens before the main ICO.
                                </p>
                                <form action="#">
                                    <input type="text" placeholder="coindox@gmail.com" />
                                    <button>
                                        <i className="fas fa-paper-plane" />
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-8 mt-30">
                            <div className="footer__widget text-lg-end">
                                <h2>Download Documents</h2>
                                <div className="footer__document ul_li_right">
                                    <a href="#!" className="footer__document-item text-center">
                                        <div className="icon">
                                            <img src="img/icon/pdf.svg" alt="" />
                                        </div>
                                        <span className="title">
                                            <i className="fas fa-cloud-download-alt" />
                                            white paper
                                        </span>
                                    </a>
                                    <a href="#!" className="footer__document-item text-center">
                                        <div className="icon">
                                            <img src="img/icon/pdf.svg" alt="" />
                                        </div>
                                        <span className="title">
                                            <i className="fas fa-cloud-download-alt" />
                                            one paper
                                        </span>
                                    </a>
                                    <a href="#!" className="footer__document-item text-center">
                                        <div className="icon">
                                            <img src="img/icon/pdf.svg" alt="" />
                                        </div>
                                        <span className="title">
                                            <i className="fas fa-cloud-download-alt" />
                                            privacy policy
                                        </span>
                                    </a>
                                    <a href="#!" className="footer__document-item text-center">
                                        <div className="icon">
                                            <img src="img/icon/pdf.svg" alt="" />
                                        </div>
                                        <span className="title">
                                            <i className="fas fa-cloud-download-alt" />
                                            terms of sale
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom ul_li_between mt-50">
                        <div className="footer__logo mt-20">
                            <a href="index.html">
                                <img src="img/logo/logo.svg" alt="" />
                            </a>
                        </div>
                        <ul className="footer__social ul_li mt-20">
                            <li>
                                <a href="#!">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <i className="fab fa-instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <i className="fab fa-telegram-plane" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__copyright mt-35">
                    <div className="container">
                        <div className="footer__copyright-inner ul_li_between">
                            <div className="footer__copyright-text mt-15">
                                Copyright © 2023 coindox. All rights reserved.
                            </div>
                            <ul className="footer__links ul_li_right mt-15">
                                <li>
                                    <a href="#!">Privacy</a>
                                </li>
                                <li>
                                    <a href="#!">Cookies</a>
                                </li>
                                <li>
                                    <a href="#!">Terms</a>
                                </li>
                                <li>
                                    <a href="#!">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer__icon-shape">
                    <div className="icon icon--1">
                        <div data-parallax='{"x" : -80}'>
                            <img src="img/shape/f_icon1.png" alt="" />
                        </div>
                    </div>
                    <div className="icon icon--2">
                        <div data-parallax='{"x" : 80}'>
                            <img src="img/shape/f_icon2.png" alt="" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
