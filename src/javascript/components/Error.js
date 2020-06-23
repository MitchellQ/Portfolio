import React from 'react';

export class NotFound extends React.Component {
    render() {
        return <h1>404</h1>
    }
}

export class ServerError extends React.Component {
    render() {
        return <h1>Whoops - Something went Wrong!</h1>
    }
}