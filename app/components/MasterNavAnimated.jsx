import React from 'react';
import {TransitionMotion, spring} from 'react-motion';
import { Router, Route, Link } from 'react-router';

const MasterNavAnimated = React.createClass({
  getInitialState() {
    return {
      pages: {
        // key is creation id
        't1': {title: 'Index', url:'/'},
        't2': {title: 'Grid', url:'/grid'},
        't3': {title: 'Navigation', url:'/navigation'},
        't4': {title: 'Tables', url:'/tables'},
        't5': {title: 'Typography', url:'/typography'},
        't6': {title: 'Lists', url:'/lists'},
        't7': {title: 'Dialogs', url:'/dialogs'},
        't8': {title: 'Forms', url:'/forms'},
        't9': {title: 'Helpers', url:'/helpers'}
      },
      value: '',
      selected: 'all'
    };
  },

  // actual animation-related logic
  getDefaultValue() {
    const {pages} = this.state;
    return Object.keys(pages)
      .reduce((configs, id) => {
        configs[id] = {
          height: spring(0),
          opacity: spring(0),
          data: pages[id],
        };
        return configs;
      }, {});
  },

  getEndValue() {
    const {pages, value, selected} = this.state;
    return Object.keys(pages)
      .reduce((configs, id) => {
        configs[id] = {
          height: spring(50, [120, 14]),
          opacity: spring(1, [120, 14]),
          data: pages[id],
        };
        return configs;
      }, {});
  },

  willEnter(id) {
    return {
      height: spring(0),
      opacity: spring(0),
      data: this.state.pages[id],
    };
  },

  willLeave(id, styleThatJustLeft) {
    return {
      height: spring(0),
      opacity: spring(1),
      data: styleThatJustLeft.data,
    };
  },

  render() {
    const {pages, value, selected} = this.state;
    return (
      <section className="MasterNav">
        <section className="main">
          <TransitionMotion defaultStyles={this.getDefaultValue()} styles={this.getEndValue()} willLeave={this.willLeave}
            willEnter={this.willEnter}>
            {configs =>
              <ul className="MasterNav">
                {Object.keys(configs).map(id => {
                    const config = configs[id];
                    const {data: {title},  ...style} = config;
                  return (
                    <li key={id} style={style}>
                      <Link to="/">{title}</Link>
                    </li>
                  );
                })}
              </ul>
            }
          </TransitionMotion>
        </section>
      </section>
    );
  },
});

export default MasterNavAnimated;
