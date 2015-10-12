import React from 'react';
import { IndexRoute, Router, Route } from 'react-router'
import AppNavigation from './AppNavigation';

let App = React.createClass({
    render() {
        return (
            <div className="App">
                <AppNavigation />
                <div className="Detail">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = App;
