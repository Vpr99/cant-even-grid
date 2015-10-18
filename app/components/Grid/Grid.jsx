import React, { Component } from 'react';
import _ from 'lodash';
import SpringText from '../Helpers/SpringText';

export default class Grid extends Component {
    render() {
        console.log(SpringText)
        return(
            <div>
                <SpringText text="Grid" />
                <h2>Grid sizes</h2>
                <h3>Size 1 of 1</h3>
                <section className="grid-example grid-example-1">
                    <div></div>
                </section>
                <h3>4 column</h3>
                <section className="grid-example grid-example-2">
                    <div></div>
                    <div></div>
                </section>
                <h3>8 column</h3>
                <section className="grid-example grid-example-4">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </section>
                <section className="grid-example grid-example-6">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </section>
                <section className="grid-example grid-example-9">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </section>
            </div>

        )
    }
}
