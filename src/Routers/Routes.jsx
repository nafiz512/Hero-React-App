import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/ErrorPages/ErrorPage';
import Apps from '../Pages/Apps/Apps';
import AppDetails from '../Pages/Apps/AppDetails';
import InstalledApps from '../Pages/InstalledApps/InstalledApps';

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
                loader: () => fetch('/AppData.json'),
                element: <AppDetails />,
            },
            {
                path: '/installation',
                loader: () => fetch('/AppData.json'),
                element: <InstalledApps />,
            },
            {
                path: '*',
                Component: ErrorPage,
            },
        ],
    },
]);

export default Routes;
