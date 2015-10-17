import React from 'react';

export default class Grid extends React.Component {
    render() {
        return(
            <div>
                <h1>Grid System</h1>
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
