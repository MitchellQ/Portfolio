import React from 'react';

export default class Spinner extends React.Component {
    componentDidMount() {
        $(".loader").delay(1000).fadeOut("slow");
        $("#overlayer").delay(1000).fadeOut("slow");
    }

    render() {
        return (
            <React.Fragment>
                <div id="overlayer" />
                <div className="loader">
                    <div className="spinner-border text-accent" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}