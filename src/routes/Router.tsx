import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import paths from './paths';

const UsersPage = lazy(() => import('../pages/Users'));

interface Routes {
    path: string;
    element: React.ReactNode;
}

const getRouteElement = (Component: React.ElementType): React.ReactNode => (
    <Suspense fallback={<div>Loading</div>}>
        <Component />
    </Suspense>
);

const routes: Routes[] = [
    { path: paths.INDEX, element: getRouteElement(UsersPage) },
]

export default createBrowserRouter(routes);
