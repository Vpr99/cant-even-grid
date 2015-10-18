import React, { Component } from 'react'
import _ from 'lodash'
import { StaggeredMotion, spring } from 'react-motion';

const SpringText = React.createClass({
    getInitialState() {
        return {x: 0, opacity: 0};
    },
    componentDidMount() {
        this.setState({
            x: spring(0, [1000, 80]),
            opacity: spring(1, [1000, 80])}
        )
    },
    taggify(string, tag) {
        let taggedChars = []

        _.map(string, function(char) {
            taggedChars.push(`${char}`)
        })
        return taggedChars
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
        let taggedText = this.taggify(`${this.props.text}`,'span')
        return(
            <StaggeredMotion defaultStyles={taggedText.map(() => ({x: -100, opacity: 0}))} styles={this.getStyles}>
                {taggedText =>
                    <h1 className="page-title" >
                        {taggedText.map(({x, opacity}, i) =>
                            <span key={i}
                                style={{
                                    opacity: `${opacity}`,
                                    transform: `translateX(${x + 0}px)`,
                                    position: `absolute`
                                }}>
                                o
                            </span>
                         )}
                     </h1>
                 }
            </StaggeredMotion>
        );
    },
});

export default SpringText;
