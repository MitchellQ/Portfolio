import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        console.log(error.toString());
        return { hasError: true }
    }

    render() {
        if(this.state.hasError) {
            // You can render a fallback URL here
            return <h1>Something went Wrong!</h1>
        } 
        
        return this.props.children;
    }
}