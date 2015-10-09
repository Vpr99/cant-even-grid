import App from './components/App';

import ViewList from './components/ViewList/ViewList';
import Forms from './components/Forms/Forms';
import Type from './components/Type/Type';
import NotFound from './components/NotFound/NotFound';


let routeConfig = [
  { path: '/',
    component: App,
    indexRoute: { component: ViewList },
    childRoutes: [
        { path: '/forms', component: Forms },
        { path: '/type', component: Type },
        { path: '*', component: NotFound }
    ]
  }
]

module.exports = routeConfig;
