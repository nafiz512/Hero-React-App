import React from 'react';
import logo from '../../assets/logo.png';
const LoadingEffect = () => {
    return (
        <div className="max-w-7xl mx-auto mt-28">
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70">
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

export default LoadingEffect;
