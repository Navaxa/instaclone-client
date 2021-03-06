import LayoutBasic from '../layouts/LayoutBasic';
import Error404 from '../pages/Error404';
import Home from '../pages/Home';
import User from '../pages/User';

const routes = [
    {
        path: '/',
        layout: LayoutBasic,
        component: Home,
        exact: true
    },
    {
        path: '/:username',
        layout: LayoutBasic,
        component: User,
        exact: true
    },
    {
        layout: LayoutBasic,
        component: Error404,
    }
]

export default routes;