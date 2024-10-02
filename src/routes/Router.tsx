import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import paths from './paths';

const UsersPage = lazy(() => import('../pages/Users'));
const HomePage = lazy(() => import('../pages/Home'));
const AddUser = lazy(() => import('../components/Forms/AddUser'));
const EditUser = lazy(() => import('../components/Forms/EditUser'));
const DeleteUser = lazy(() => import('../components/Forms/DeleteUser'));

interface Routes {
    path: string;
    element: React.ElementType;
}

// ideal future state: proper error handling and rendering of loading states
const error = <div>Error</div>;

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
    {
        path: paths.USERS,
        element: getRouteElement(UsersPage),
        errorElement: error,
        children: [
            {
                path: `${paths.USERS}${paths.NEW_USER}`,
                element: getRouteElement(AddUser)
            },
            {
                path: `${paths.USERS}${paths.EDIT_USER}/:id`,
                element: getRouteElement(EditUser)
            },
            {
                path: `${paths.USERS}${paths.DELETE_USER}/:id`,
                element: getRouteElement(DeleteUser)
            },
        ]
    },
]

export default createBrowserRouter(routes);
