import React from 'react';
import ReactDOM from 'react-dom';

import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, Route, Link } from 'react-router'
import routeConfig from './routes.jsx';

main();

function main() {
    const app = document.createElement('div');
    document.body.appendChild(app);
    ReactDOM.render(<Router history={createBrowserHistory()} routes={routeConfig} />, app);
}
