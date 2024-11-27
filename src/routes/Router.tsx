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
    <Suspense fallback={<div>Loading</div>}>
        <Component />
    </Suspense>
);

const routes: any[] = [
    {
        path: paths.INDEX,
        element: getRouteElement(HomePage),
    },
]

export default createBrowserRouter(routes);
