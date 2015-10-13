import App from './components/App';
import Index from './components/Index/Index';
import Grid from './components/Grid/Grid';
import Typography from './components/Typography/Typography';
import Navigation from './components/Navigation/Navigation';
import Forms from './components/Forms/Forms';
import Tables from './components/Tables/Tables';
import Lists from './components/Lists/Lists';
import Dialogs from './components/Dialogs/Dialogs';
import Helpers from './components/Helpers/Helpers';
import NotFound404 from './components/NotFound404/NotFound404';

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
        { path: '*', component: NotFound404 }
    ]
  }
]

module.exports = routeConfig;
