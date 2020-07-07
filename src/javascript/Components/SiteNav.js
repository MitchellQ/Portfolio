import React, { Component, Fragment } from 'react';
import HtmlComment from './HtmlComment';

export default class SiteNav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nav: require('../../data/siteNav.json'),
            settings: require('../../data/siteSettings.json')
        }
    }

    render() {
        const { brand, navItems } = this.state.nav;

        const links = navItems.map((item, key) => {
            if (!this.state.settings.testimonialsVisible && item.name == "Testimonials") return;

            return <NavLink href={item.href} name={item.name} key={key} />
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

    buildUrl(href) {
        if (window.location.pathname == "/") {
            return `#${href}`;
        }

        return `/#${href}`
    }

    render() {
        const { href, name } = this.props;

        if (name == "Download CV") {
            return <a href={href} download>
                <i className="far fa-download pr-2"></i> {name}
            </a>
        } else {
            return <a href={this.buildUrl(href)} className="js-scroll-trigger px-3">
                {name}
            </a>
        }
    }
}