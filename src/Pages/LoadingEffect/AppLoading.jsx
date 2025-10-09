import React from 'react';
import logo from '../../assets/logo.png';
const AppLoading = () => {
    return (
        <div>
            <div className="flex items-center justify-center">
                <div className="animate-spin">
                    <img
                        src={logo}
                        alt="Loading..."
                        className="h-20 w-20 opacity-90"
                    />
                </div>
                <h2 className="text-4xl font-bold ml-7">Loading ...</h2>
            </div>
        </div>
    );
};

export default AppLoading;
