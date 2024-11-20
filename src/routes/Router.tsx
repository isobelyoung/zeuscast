import React, { lazy, ReactNode, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import paths from './paths';

const HomePage = lazy(() => import('../pages/Home'));

interface IRoutes {
    path: string;
    element?: React.ElementType | React.ReactNode;
    errorElement?: React.ElementType | JSX.Element;
    children?: IRoutes[];
}

const error: JSX.Element = <div>Error</div>;

const getRouteElement = (Component: React.ElementType): React.ReactNode => (
    // potentially abstract suspense wrapper
    <Suspense fallback={<div>Loading</div>}>
        <Component />
    </Suspense>
);

const routes: any[] = [
    {
        path: paths.INDEX,
        element: getRouteElement(HomePage),
    },
    // {
    //     path: paths.USERS,
    //     element: getRouteElement(UsersPage),
    //     errorElement: error,
    //     // nested routes that render child component in Outlet
    //     children: [
    //         {
    //             path: `${paths.USERS}${paths.NEW_USER}`,
    //         }
    //     ]
    // },
]

export default createBrowserRouter(routes);
