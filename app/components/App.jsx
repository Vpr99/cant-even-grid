import React from 'react'
import { IndexRoute, Router, Route } from 'react-router'
import { Motion, spring } from 'react-motion'
import MasterNav from './MasterNav'

let App = React.createClass({
    render() {
        return (
            <div className="App">
                <section className="MasterDetailGrid">
                    <MasterNav />
                    <div className="Detail">
                        {this.props.children}
                    </div>
                </section>
                <Motion
                    defaultStyle={{x: 0}}
                    style={{x: spring(10)}}>
                    {value =>
                        <div>
                            {value.x}
                        </div>
                    }
                </Motion>
            </div>

        );
    }
});

module.exports = App;
