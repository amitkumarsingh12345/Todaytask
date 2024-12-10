import React from 'react'

const Slidebar = () => {
    return (
        <>
            <aside className="slide-bar">
                <div className="close-mobile-menu">
                    <a className="tx-close" href="javascript:void(0);" />
                </div>
                {/* side-mobile-menu start */}
                <nav className="side-mobile-menu">
                    <a className="header__logo mb-30" href="#!">
                        <img src="img/logo/logo.svg" alt="" />
                    </a>
                    <div className="header-mobile-search">
                        <form role="search" method="get" action="#">
                            <input type="text" placeholder="Search Keywords" />
                            <button type="submit">
                                <i className="ti-search" />
                            </button>
                        </form>
                    </div>
                    <ul id="mobile-menu-active">
                        <li className="dropdown">
                            <a href="index.html">Home</a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="index.html">
                                        <span>Home Blockchain</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="home-2.html">
                                        <span>Home Mining</span>
                                    </a>
                                </li>
                                <li className="active">
                                    <a href="home-3.html">
                                        <span>Home ICO</span>
                                    </a>
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
                        <li className="dropdown">
                            <a href="#!">Blog</a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="blog.html">Blog</a>
                                </li>
                                <li>
                                    <a href="blog-single.html">Blog Details</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="contact.html">Get in touch</a>
                        </li>
                    </ul>
                </nav>
                {/* side-mobile-menu end */}
            </aside>
            <div className="body-overlay" />
        </>
    )
}

export default Slidebar
