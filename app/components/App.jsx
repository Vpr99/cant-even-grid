import React from 'react'
import { IndexRoute, Router, Route } from 'react-router'
import MasterNav from './MasterNav'
import Demo from './Demo'

let App = React.createClass({
    render() {
        return (
            <div className="App">
                <Demo />
                <section className="MasterDetailGrid">
                    <MasterNav />
                    <div className="Detail">
                        {this.props.children}
                    </div>
                </section>
            </div>

        );
    }
});

module.exports = App;
