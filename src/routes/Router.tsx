import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import paths from './paths';

const UsersPage = lazy(() => import('../pages/Users'));

interface Routes {
    path: string;
    element: React.ElementType;
}

const error = <div>Error</div>;

const getRouteElement = (Component: React.ElementType): React.ReactNode => (
    <Suspense fallback={<div>Loading</div>}>
        <Component />
    </Suspense>
);

const routes: any[] = [
    {
        path: paths.INDEX,
        element: getRouteElement(UsersPage),
    },
    {
        path: paths.USERS,
        element: getRouteElement(UsersPage),
        errorElement: error,
        // nested routes that render child component in Outlet
        children: [
            {
                path: `${paths.USERS}${paths.NEW_USER}`,
                // element: 
            }
        ]
    },
]

export default createBrowserRouter(routes);
