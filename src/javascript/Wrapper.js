import React, { Component } from 'react'
import { render } from 'react-dom'

import ErrorBoundary from './components/ErrorBoundary';
import Landing from './components/Landing';
import Spinner from './components/Spinner';
import SiteNav from './components/SiteNav';

import About from './About';
import Project from './Project';
import FeaturedProjects from './FeaturedProjects';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export default class Wrapper extends Component {
    constructor(props) {
        super(props);

        this.state = require('../data/siteSettings.json');
    }

    render() {
        const { testimonialsVisible, contactFormVisible } = this.state;

        return (
            <BrowserRouter>
            <ErrorBoundary>
                <Spinner />                
                <div className="site-wrap">
                    <SiteNav />
                    <Switch>
                        <Route path="/">
                            <h1>Test</h1>
                        </Route>

                        <Route path="/sam" component={Project}>
                              
                        </Route>

                    </Switch>

                    {/* <Landing />              
                    <Project />
                    <About />
                    <FeaturedProjects />
                    {testimonialsVisible ? <Testimonials /> : null}
                    {contactFormVisible ? <Contact /> : null} */}
                    <Footer />
                </div>
            </ErrorBoundary>
            </BrowserRouter>
        );
    }
}

if(document.getElementById('root')) {
    render(<Wrapper />, document.getElementById('root'))
}