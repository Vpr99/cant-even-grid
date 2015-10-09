import React from 'react';
import { IndexRoute, Router, Route } from 'react-router'

let App = React.createClass({
    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        );
    }
});

module.exports = App;
