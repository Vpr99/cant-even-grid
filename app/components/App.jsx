import React from 'react'
import { IndexRoute, Router, Route } from 'react-router'
import MasterNavAnimated2 from './MasterNavAnimated2'
import Demo from './Demo'

let App = React.createClass({
    render() {
        return (
            <div className="App">
                <Demo />
                <section className="MasterDetailGrid">
                    <MasterNavAnimated2 />
                    <div className="Detail">
                        {this.props.children}
                    </div>
                </section>
            </div>

        );
    }
});

module.exports = App;
