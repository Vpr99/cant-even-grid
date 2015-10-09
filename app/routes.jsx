import App from './components/App';

import ViewList from './components/ViewList';

let routeConfig = [
  { path: '/',
    component: App,
    indexRoute: { component: ViewList },
    childRoutes: []
  }
]

module.exports = routeConfig;
