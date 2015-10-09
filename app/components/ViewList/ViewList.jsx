import React from 'react';
import { Router, Route, Link } from 'react-router';

export default class ViewList extends React.Component {
    render() {
        return(
            <div>
                <h1>Shows all the views.</h1>
                <ul>
                    <li><Link to="/forms">Forms</Link></li>
                </ul>
            </div>
        )
    }
}
