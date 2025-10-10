import React from 'react';
import errorimage from '../../assets/error-404.png';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center space-y-8 bg-white py-10">
            <img src={errorimage} alt="" />
            <h2 className="text-5xl font-bold">Oops, page not found!</h2>
            <p className="text-gray-500 text-xl">
                The page you are looking for is not available.
            </p>
            <Link to={-1}>
                <button className="btn btn-primary bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-2xl font-bold">
                    Go back
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;
