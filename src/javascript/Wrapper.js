import React, { Component } from 'react'
import { render } from 'react-dom'

import ErrorBoundary from './components/ErrorBoundary';
import Landing from './components/Landing';
import Spinner from './components/Spinner';
import SiteNav from './components/SiteNav';
import Footer from './Footer';

export default class Wrapper extends Component {
    render() {
        return (
            <ErrorBoundary>
                <Spinner />
            
                <div className="site-wrap">
                    <SiteNav />
                    <Landing />
                    <Footer />
                </div>
            </ErrorBoundary>
        );
    }
}

if(document.getElementById('root')) {
    render(<Wrapper />, document.getElementById('root'))
}