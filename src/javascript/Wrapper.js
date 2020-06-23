import React, { Component } from 'react'
import { render } from 'react-dom'

import ErrorBoundary from './components/ErrorBoundary';
import Spinner from './components/Spinner';
import SiteNav from './components/SiteNav';
import Home from './Home';
import Footer from './Footer';
import { NotFound } from './components/Error';
import Project from './Project';

import { BrowserRouter, Switch, Route } from "react-router-dom";

export default class Wrapper extends Component {
    render() {
        return (
            <BrowserRouter>
            <ErrorBoundary>
                <Spinner />                
                <div className="site-wrap">
                    <SiteNav />

                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/projects/:name" component={Project} />
                        <Route component={NotFound} />
                    </Switch>
                    
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