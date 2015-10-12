import React from 'react';
import { Router, Route, Link } from 'react-router';

export default class AppNavigation extends React.Component {
    render() {
        return(
            <div>
                <ul className="AppNavigation">
                    <li><Link to="/">Index</Link></li>
                    <li><Link to="/grid">Grid</Link></li>
                    <li><Link to="/navigation">Navigation</Link></li>
                    <li><Link to="/tables">Tables</Link></li>
                    <li><Link to="/typography">Typography</Link></li>
                    <li><Link to="/lists">Lists</Link></li>
                    <li><Link to="/dialogs">Dialogs</Link></li>
                    <li><Link to="/helpers">Helpers</Link></li>
                    <li><Link to="/forms">Forms</Link></li>
                </ul>
            </div>
        )
    }
}
