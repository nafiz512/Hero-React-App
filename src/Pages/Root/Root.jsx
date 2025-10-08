import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import LoadingEffect from '../LoadingEffect/LoadingEffect';

const Root = () => {
    const navigation = useNavigation();

    return (
        <div className="relative min-h-screen flex flex-col">
            <Navbar />

            {navigation.state == 'loading' && <LoadingEffect></LoadingEffect>}
            <div className="flex-grow">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default Root;
