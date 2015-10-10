import App from './components/App';

import Index from './components/Index';
import Grid from './components/Grid/Grid';
import Forms from './components/Forms/Forms';
import Typography from './components/Typography/Typography';
import Navigation from './components/Navigation/Navigation';
import Tables from './components/Tables/Tables';
import Lists from './components/Lists/Lists';
import Dialogs from './components/Dialogs/Dialogs';
import Helpers from './components/Helpers/Helpers';
import NotFound from './components/NotFound/NotFound';

let routeConfig = [
  { path: '/',
    component: App,
    indexRoute: { component: Index },
    childRoutes: [
        { path: '/typography', component: Typography },
        { path: '/forms', component: Forms },
        { path: '/grid', component: Grid },
        { path: '/navigation', component: Navigation },
        { path: '/tables', component: Tables },
        { path: '/lists', component: Lists },
        { path: '/dialogs', component: Dialogs },
        { path: '/helpers', component: Helpers },
        { path: '*', component: NotFound }
    ]
  }
]

module.exports = routeConfig;
