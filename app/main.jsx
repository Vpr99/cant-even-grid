import React from 'react';
import ReactDOM, { render } from 'react-dom';

import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, Route, Link } from 'react-router'
import routeConfig from './routes.jsx';

require('./css/main.css');

main();

function main() {
    const app = document.createElement('div');
    document.body.appendChild(app);
    render(<Router history={createBrowserHistory()} routes={routeConfig} />, app);
}
