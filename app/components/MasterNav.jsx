import React, { Component } from 'react';
import { Link } from 'react-router';
import { StaggeredMotion, spring } from 'react-motion';
import _ from 'lodash';

const NavLinks = [
    {label: "Index", "url":"/"},
    {label: "Grid", "url": "/grid"},
    {label: "Navigation", "url":"/navigation"},
    {label: "Tables", "url":"/tables"},
    {label: "Typography", "url":"/typography"},
    {label: "Lists", "url":"/lists"},
    {label: "Dialogs", "url":"/dialogs"},
    {label: "Helpers", "url":"/helpers"},
    {label: "Forms", "url":"/forms"}
];

const MasterNav = React.createClass({
    getInitialState() {
        return {x: 0, opacity: 0};
    },
    componentDidMount() {
        this.setState({
            x: spring(0, [1000, 80]),
            opacity: spring(1, [1000, 80])}
        );
    },
    handleMouseDown() {
        console.log('mouseDown');
    },
    getStyles(prevStyles) {
        // `prevStyles` is the interpolated value of the last tick
        const endValue = prevStyles.map((_, i) => {
            return i === 0 ? this.state: {
                x: spring(prevStyles[i - 1].x, [1000, 80]),
                opacity: spring(prevStyles[i - 1].opacity, [1000, 80])
            };
        });
        return endValue;
    },
    render() {
        return (
            <StaggeredMotion defaultStyles={NavLinks.map(() => ({x: -100, opacity: 0}))} styles={this.getStyles}>
                {navListItems =>
                    <div className="MasterNav" >
                        {navListItems.map(({x, opacity}, i) =>
                            <li className={this.state.active ? 'active' : 'asdf'}
                                key={i}
                                style={{
                                    opacity: `${opacity}`,
                                    transform: `translateX(${x + 0}px)`
                                }}>
                                <Link
                                    to={NavLinks[i].url}
                                    className="navLink" >
                                    {NavLinks[i].label}
                                </Link>
                            </li>
                         )}
                     </div>
                 }
            </StaggeredMotion>
        );
    },
});

export default MasterNav;
