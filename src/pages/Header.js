import React from 'react'

const Header = () => {
    return (
        <>
            <header className="site-header header--transparent ico-header">
                <div className="header__main-wrap stricky">
                    <div className="container mxw_1640">
                        <div className="header__main ul_li_between">
                            <div className="header__left ul_li">
                                <div className="header__logo">
                                    <a href="index.html">
                                        <img src="img/logo/logo.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="main-menu__wrap ul_li navbar navbar-expand-xl">
                                <nav className="main-menu collapse navbar-collapse">
                                    <ul>
                                        <li className="menu-item-has-children active has-mega-menu">
                                            <a href="index.html">Home</a>
                                            <ul className="submenu mega-menu">
                                                <li>
                                                    <div className="mega-menu-content mxw_1505">
                                                        <div className="row">
                                                            <div className="col col-md-3">
                                                                <div className="demo-pic">
                                                                    <a href="index.html">
                                                                        <img
                                                                            src="img/demo/demo-1.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                </div>
                                                                <h3>Blockchain</h3>
                                                            </div>
                                                            <div className="col col-md-3">
                                                                <div className="demo-pic">
                                                                    <a href="home-2.html">
                                                                        <img
                                                                            src="img/demo/demo-2.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                </div>
                                                                <h3>Bitcoin Mining</h3>
                                                            </div>
                                                            <div className="col col-md-3">
                                                                <div className="demo-pic">
                                                                    <a href="home-3.html">
                                                                        <img
                                                                            src="img/demo/demo-3.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                </div>
                                                                <h3>ICO</h3>
                                                            </div>
                                                            <div className="col col-md-3">
                                                                <div className="demo-pic coming-soon">
                                                                    <img
                                                                        src="img/demo/coming-soon.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <h3>Coming Soon</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="scrollspy-btn" href="#about">
                                                about
                                            </a>
                                        </li>
                                        <li>
                                            <a className="scrollspy-btn" href="#roadmap">
                                                Roadmap
                                            </a>
                                        </li>
                                        <li>
                                            <a className="scrollspy-btn" href="#team">
                                                Team
                                            </a>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="#!">Blog</a>
                                            <ul className="submenu">
                                                <li>
                                                    <a href="blog.html">Blog</a>
                                                </li>
                                                <li>
                                                    <a href="blog-single.html">Blog Details</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="header__action ul_li">
                                <div className="d-xl-none">
                                <a className="header__bar hamburger_menu" onClick={() => {}}>
  <div className="header__bar-icon">
    <span />
    <span />
    <span />
    <span />
  </div>
</a>

                                </div>
                                <div className="header__language">
                                    <div className="dropdown">
                                        <button
                                            className="dropdown-toggle"
                                            type="button"
                                            id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <img src="img/icon/us_flag.png" alt="" />
                                            ENGLISH <i className="fas fa-chevron-down" />
                                        </button>
                                        <div
                                            className="dropdown-menu"
                                            aria-labelledby="dropdownMenuButton1"
                                        >
                                            <a className="dropdown-item" href="index.html">
                                                <img src="img/icon/chn_flag.png" alt="" />
                                                China
                                            </a>
                                            <a className="dropdown-item" href="index.html">
                                                <img src="img/icon/rsa_flag.png" alt="" />
                                                Russia
                                            </a>
                                            <a className="dropdown-item" href="index.html">
                                                <img src="img/icon/in_flag.png" alt="" />
                                                India
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="header__account">
                                    <a href="#!">
                                        <i className="fas fa-user" />
                                        LOGIN
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
