import React from 'react'
import MasterNav from './MasterNav'
import { TransitionMotion, spring } from 'react-motion'
import RouteTransition from './RouteTransition'
import _ from 'lodash';
import range from 'lodash/utility/range';
import Demo from './Demo';

let App = React.createClass({
    render() {
        return <div className="App">
            <section className="MasterDetailGrid">
                <MasterNav />
                <Demo />
                <div className="Detail">
                    <RouteTransition pathname={this.props.location.pathname} defaultStyles={{opacity: 0, scale: 0}}>
                        {this.props.children}
                    </RouteTransition>
                </div>
            </section>
        </div>;
    }
});

module.exports = App;
