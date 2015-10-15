import React from 'react';
import {StaggeredMotion, spring} from 'react-motion';
import _ from 'lodash';
import range from 'lodash/utility/range';
import { Link } from 'react-router';

const MasterNavAnimated2 = React.createClass({
    getInitialState() {
        return {x: 0};
    },
    componentDidMount() {
        this.reveal();
    },
    reveal() {
        this.setState({x: 100});
    },
    getStyles(prevStyles) {
        // `prevStyles` is the interpolated value of the last tick
        const endValue = prevStyles.map((_, i) => {
            return i === 0 ? this.state: {
                x: spring(prevStyles[i - 1].x, [150, 50])
            };
        });
        return endValue;
    },
    render() {
        return (
            <div className="MasterNav">
                <StaggeredMotion defaultStyles={range(7).map(() => ({x: 0}))}
                styles={this.getStyles}>
                    {listItems =>
                        <li className="wut">
                            {listItems.map(({x}, i) =>
                            <Link
                                to="/typography"
                                className="pageLink"
                                key={i}
                                style={{ transform: `translateX(${x + 0}px)`}}>{x}
                            </Link>
                             )}
                    </li>
                }
            </StaggeredMotion>
        </div>
    );
},
});

export default MasterNavAnimated2;
