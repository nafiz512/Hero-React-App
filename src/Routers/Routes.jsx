import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/ErrorPages/ErrorPage';
import Apps from '../Pages/Apps/Apps';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                path: '/',
                loader: () => fetch('/AppData.json'),
                Component: Home,
            },
            {
                path: '/apps',
                loader: () => fetch('/AppData.json'),
                element: <Apps />,
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
