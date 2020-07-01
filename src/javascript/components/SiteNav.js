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
            return <NavLink href={item.href} name={item.name} key={key} />
        });
        
        return (
            <Fragment>                
                <HtmlComment text={"Nav"} />
                <nav className="navbar navbar-expand-md stickty-top">
                    <div className="container-fluid">
                    <h1 className="mb-0 site-logo">
                                        <a href="/" className="h2 mb-0">{brand}<span>.</span> </a>
                                    </h1>
                    </div>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#responsiveNav">
                        <span><i className="fab fa-bars" /></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="responsiveNav">
                        <ul className="navbar-nav ml-auto">
                            {links}
                        </ul>
                    </div>
                   
                </nav>

                {/* <HtmlComment text={"Main Nav"} />
                <div id="sticky-wrapper" className="sticky-wrapper" style={{height: '97px'}}>
                    <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
                        <div className="container">
                            <div className="row align-items-center">
                                <HtmlComment text={"Brand"} />
                                <div className="col-6 col-xl-2">
                                    <h1 className="mb-0 site-logo">
                                        <a href="/" className="h2 mb-0">{brand}<span>.</span> </a>
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
                    </header> */}
             
            </Fragment>
        )
    }
}

class NavLink extends Component {
    static defaultProps = {
        href: "",
        name: ""
    }

    render() {
        const { href, name } = this.props;

        return <li>
            <a href={href} className="nav-item js-scroll-trigger" download={name == "Download CV"}>
                { name == "Download CV" ? <i className="far fa-download pr-2"></i> : null }
                {name}
            </a>
        </li>
    }
}

{/*
                <HtmlComment text={"Main Nav"} />
                <div id="sticky-wrapper" className="sticky-wrapper" style={{height: '97px'}}>
                    <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
                        <div className="container">
                            <div className="row align-items-center">
                                <HtmlComment text={"Brand"} />
                                <div className="col-6 col-xl-2">
                                    <h1 className="mb-0 site-logo">
                                        <a href="/" className="h2 mb-0">{brand}<span>.</span> </a>
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
                </div> */}