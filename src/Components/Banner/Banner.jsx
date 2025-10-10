import React from 'react';
import google from '../../assets/google.png';
import appstore from '../../assets/appstore.png';
import hero from '../../assets/hero.png';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div>
            <div className=" mx-auto mt-10">
                <div className="flex flex-col items-center justify-center text-center lg:px-40 gap-5">
                    <h1 className="lg:text-7xl text-5xl font-bold ">
                        We Build <br />
                        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                            Productive
                        </span>
                        Apps
                    </h1>
                    <p className="text-xl text-gray-500">
                        At HERO.IO , we craft innovative apps designed to make
                        everyday life simpler, smarter, and more exciting.Our
                        goal is to turn your ideas into digital experiences that
                        truly make an impact.
                    </p>
                    <div className="space-x-4 mb-5">
                        <Link
                            target="_blank"
                            to={'https://play.google.com/store'}
                        >
                            <button className="btn btn-soft py-5">
                                <img src={google} alt="" />
                                Google Play
                            </button>
                        </Link>
                        <Link
                            target="_blank"
                            to={'https://www.apple.com/app-store/'}
                        >
                            <button className="btn btn-soft py-5">
                                <img src={appstore} alt="" /> App store
                            </button>
                        </Link>
                    </div>
                    <figure>
                        <img src={hero} alt="" className="" />
                    </figure>
                </div>
            </div>
            <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white text-center space-y-6 py-10">
                <h2 className="text-3xl lg:text-5xl font-bold">
                    Trusted by Millions, Built for You
                </h2>
                <div className=" grid grid-cols-1 md:grid-cols-3 justify-center gap-10 md:gap-20 lg:gap-34">
                    <div className="space-y-4">
                        <h3 className="text-gray-300">Total Downloads</h3>
                        <h2 className="text-4xl lg:text-6xl font-extrabold">
                            29.6M
                        </h2>
                        <h4 className="text-gray-300">
                            21% more than last month
                        </h4>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-gray-300">Total Reviews</h3>
                        <h2 className="text-4xl lg:text-6xl font-extrabold">
                            906K
                        </h2>
                        <h4 className="text-gray-300">
                            46% more than last month
                        </h4>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-gray-300">Active Apps</h3>
                        <h2 className="text-4xl lg:text-6xl font-extrabold">
                            132+
                        </h2>
                        <h4 className="text-gray-300">31 more will Launch</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
