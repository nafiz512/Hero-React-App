import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/ErrorPages/ErrorPage';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage />,
        children: [
            { index: true, path: '/', Component: Home },
            {
                path: '/apps',
                element: <h2>apps</h2>,
            },
            {
                path: '/apps/:id',

                element: <h1>details app</h1>,
            },
            {
                path: '/installation',
                element: <h2>installation</h2>,
            },
        ],
    },
]);

export default Routes;
