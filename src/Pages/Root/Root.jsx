import React from 'react';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <h2>Nav</h2>
            <Outlet></Outlet>
            <h2>footer</h2>
        </div>
    );
};

export default Root;
