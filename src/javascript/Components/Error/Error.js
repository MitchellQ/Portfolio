import React from 'react';
import HtmlComment from '../HtmlComment';

export class NotFound extends React.Component {
    componentDidMount() {
        document.title  = "Page Not Found"
    }

    render() {
        return (
            <ErrorWrapper>
                <i className="fad fa-sad-tear fa-7x" />
                <h2>Page not Found</h2>
            </ErrorWrapper>
        )
    }
}

export class ServerError extends React.Component {
    componentDidMount() {
        document.title = "Something went wrong"
    }

    render() {
        return(
        <ErrorWrapper>
            <i className="fad fa-bug fa-7x" />
            <h2>Something Went Wrong</h2>
            <p>please try again later</p>
        </ErrorWrapper>
        )
    }
}

class ErrorWrapper extends React.Component {
    render() {
        return (
            <div className="row error">
                <div className="col-12">
                    {this.props.children}

                    <div className="row  mt-5">
                        <HtmlComment text="Empty column to horizontally centre content" />
                        <div className="col"></div>

                        <div className="col-auto">
                            <a className="btn btn-dark" href="/dist/files/Mitch Q CV.pdf" download>
                                <i className="fas fa-download"/> Get my Resume
                            </a>
                        </div>

                        <h5 className="col-auto pt-2">OR</h5>

                        <div className="col-auto">
                            <a className="btn btn-dark" href="/">
                                <i className="fas fa-home"/> Go Home
                            </a>
                        </div>

                        <HtmlComment text="Empty column to horizontally centre content" />
                        <div className="col"></div>
                    </div>
                </div>
            </div>
        )
    }
}