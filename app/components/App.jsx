import React from 'react'
import { IndexRoute, Router, Route } from 'react-router'
import MasterNavAnimated from './MasterNavAnimated'
import Demo2 from './Demo2'

let App = React.createClass({
    render() {
        return (
            <div className="App">
                <section className="MasterDetailGrid">
                    <MasterNavAnimated />
                    <div className="Detail">
                        {this.props.children}
                    </div>
                </section>
            </div>

        );
    }
});

module.exports = App;
