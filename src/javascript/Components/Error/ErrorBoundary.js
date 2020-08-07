import React from 'react';

import { DeveloperError } from './Error';

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
            return <DeveloperError />
        } 
        
        return this.props.children;
    }
}