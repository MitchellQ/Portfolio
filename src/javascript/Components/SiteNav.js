import React, { Component, Fragment } from 'react';
import HtmlComment from './HtmlComment';

export default class SiteNav extends Component {
    constructor(props) {
        super(props);

        this.state = require('../../data/sitenav.json');
    }

    buildUrl(href) {
        if(window.location.pathname == "/") {
            return `#${href}`;
        }

        return `/#${href}`
    }

    render() {
        const { brand, navItems } = this.state;

        const links = navItems.map((item, key) => {
            return <NavLink href={this.buildUrl(item.href)} name={item.name} key={key} />
        });

        return (
            <Fragment>
                <HtmlComment text={"Nav"} />
                <nav className="navbar navbar-expand-md stickty-top px-5" >
                    <div className="container-fluid">
                        <h1 className="mb-0 site-logo">
                            <a href="/" className="h2 mb-0">{brand}<span>.</span> </a>
                        </h1>
                    </div>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#responsiveNav">
                        <span><i className="fab fa-bars menu-icon" /></span>
                    </button>

                    <div className="collapse navbar-collapse" style={{ whiteSpace: "nowrap" }} id="responsiveNav">
                        <ul className="navbar-nav ml-auto">
                            {links}
                        </ul>
                    </div>
                </nav>
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
            <a href={href} className="js-scroll-trigger px-3" download={name == "Download CV"}>
                {name == "Download CV" ? <i className="far fa-download pr-2"></i> : null}
                {name}
            </a>
        </li>
    }
}