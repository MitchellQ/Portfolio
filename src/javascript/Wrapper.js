import React, { Component } from 'react'
import { render } from 'react-dom'

import ErrorBoundary from './components/ErrorBoundary';
import Landing from './components/Landing';
import Spinner from './components/Spinner';
import SiteNav from './components/SiteNav';
import Footer from './Footer';
import Contact from './Contact';

export default class Wrapper extends Component {
    constructor(props) {
        super(props);

        this.state = require('../data/siteSettings.json');
    }

    render() {
        const { testimonialsVisible, featuredProjectsVisible, contactFormVisible } = this.state;

        return (
            <ErrorBoundary>
                <Spinner />
            
                <div className="site-wrap">
                    <SiteNav />
                    <Landing />
                    {contactFormVisible ? <Contact /> : null};
                    <Footer />
                </div>
            </ErrorBoundary>
        );
    }
}

if(document.getElementById('root')) {
    render(<Wrapper />, document.getElementById('root'))
}