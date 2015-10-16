import React from 'react';
import {StaggeredMotion, spring} from 'react-motion';
import _ from 'lodash';
import range from 'lodash/utility/range';
import { Link } from 'react-router';

const NavLinks = [
    {name: "Index", "url":"/"},
    {name: "Grid", "url": "/grid"},
    {name: "Navigation", "url":"/navigation"},
    {name: "Tables", "url":"/tables"},
    {name: "Typography", "url":"/typography"},
    {name: "Lists", "url":"/lists"},
    {name: "Dialogs", "url":"/dialogs"},
    {name: "Helpers", "url":"/helpers"},
    {name: "Forms", "url":"/forms"}
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
                                    {NavLinks[i].name}
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
