import React, { Component } from 'react'
import { render } from 'react-dom'

import ErrorBoundary from './components/ErrorBoundary';
import Spinner from './components/Spinner';
import SiteNav from './components/SiteNav';
import SiteNav from './components/Home';
import Footer from './Footer';
import Education from './Education';

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export default class Wrapper extends Component {
    render() {
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

                                
                    {/*
                     <Project /> 
                     <Home />
                     */}
          
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