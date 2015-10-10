import React from 'react';
import { IndexRoute, Router, Route } from 'react-router'
import AppNavigation from './AppNavigation';

let App = React.createClass({
    render() {
        return (
            <div className="container">
                <AppNavigation />
                {this.props.children}
            </div>
        );
    }
});

module.exports = App;
