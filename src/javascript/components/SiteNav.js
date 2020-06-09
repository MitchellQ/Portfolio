import React, { Component, Fragment } from 'react';
import HtmlComment from './HtmlComment';

export default class SiteNav extends Component {
    constructor(props) {
        super(props);

        this.state = require('../../data/sitenav.json');
    }

    render() {
        const { brand, navItems } = this.state;

        const links = navItems.map((item, key) => {
            return <NavLink href={item.href} link={item.link} key={key} />
        });
        
        return (
            <Fragment>
                <HtmlComment text={"Mobile Nav"} />
                <div className="site-mobile-menu site-navbar-target">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle"></span>
                        </div>
                    </div>
                    <div className="site-mobile-menu-body">
                        <ul className="site-nav-wrap">
                            {links}
                        </ul>
                    </div>
                </div>

                <HtmlComment text={"Main Nav"} />
                <div id="sticky-wrapper" className="sticky-wrapper" style={{height: '97px'}}>
                    <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
                        <div className="container">
                            <div className="row align-items-center">
                                <HtmlComment text={"Brand"} />
                                <div className="col-6 col-xl-2">
                                    <h1 className="mb-0 site-logo">
                                        <a href="/" className="h2 mb-0">{brand}<span className="text-primary">.</span> </a>
                                    </h1>
                                </div>

                                <HtmlComment text={"Nav items"} />
                                <div className="col-12 col-md-10 d-none d-xl-block">
                                    <nav className="site-navigation position-relative text-right" role="navigation">
                                        <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                                            {links}
                                        </ul>
                                    </nav>
                                </div>

                                <HtmlComment text={"Menu Toggle"} />
                                <div className="col-6 d-inline-block d-xl-none ml-md-0 py-3" style={{position: 'relative', top: '3px'}}>
                                    <a href="#" className="site-menu-toggle js-menu-toggle float-right"><span className="icon-menu h3"></span></a>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </Fragment>
        )
    }
}

class NavLink extends Component {
    static defaultProps = {
        href: "#",
        link: ""
    }

    render() {
        const { href, link } = this.props;

        return <li><a href={`#` + href} className="nav-link">{link}</a></li>
    }
}