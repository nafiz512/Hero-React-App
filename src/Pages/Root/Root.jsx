import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";
import LoadingEffect from "../LoadingEffect/LoadingEffect";

const Root = () => {
    const navigation = useNavigation();

    return (
        <div>
            <Navbar />
            {navigation.state == "loading" && <LoadingEffect></LoadingEffect>}
            <div className="w-10/12 mx-auto">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default Root;
