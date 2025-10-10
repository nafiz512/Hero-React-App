import React from 'react';
import errorapp from '../../assets/App-Error.png';
import { Link } from 'react-router';

const AppNotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center space-y-8 bg-white py-10">
            <img src={errorapp} alt="" />
            <h2 className="text-5xl font-bold">OPPS!! APP NOT FOUND</h2>
            <p className="text-gray-500 text-xl">
                The App you are requesting is not found on our system. please
                try another apps
            </p>
            <Link to={-1}>
                <button className="btn btn-primary bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-2xl font-bold">
                    Go back
                </button>
            </Link>
        </div>
    );
};

export default AppNotFound;
