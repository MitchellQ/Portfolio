import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ErrorBoundary from './Components/Error/ErrorBoundary';
import Spinner from './Components/Spinner';
import SiteNav from './Components/SiteNav';
import Home from './Home';
import Footer from './Sections/Footer';
import { NotFound } from './Components/Error/Error';
import Project from './Sections/Project';

export default class Wrapper extends React.Component {
    render() {
        return (
            <React.Fragment>

                <div className="expander">
                <BrowserRouter>
                    <ErrorBoundary>
                        <Spinner />

                        <SiteNav />

                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/Projects/:name" component={Project} />
                            <Route component={NotFound} />
                        </Switch>

                    </ErrorBoundary>
                </BrowserRouter>
                </div>

                <Footer />

            </React.Fragment>
        );
    }
}

if (document.getElementById('root')) {
    render(<Wrapper />, document.getElementById('root'))
}