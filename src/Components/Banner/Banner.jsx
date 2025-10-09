import React from 'react';
import google from '../../assets/google.png';
import appstore from '../../assets/appstore.png';
import hero from '../../assets/hero.png';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center justify-center text-center px-40 gap-5">
                    <h1 className="text-7xl font-bold ">
                        We Build <br />
                        <span className="text-[#632EE3]">Productive </span>
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
                    <img src={hero} alt="" className="max-w-[800px]" />
                </div>
            </div>
            <div className="bg-[#632EE3] text-white text-center space-y-6 py-10">
                <h2 className=" text-5xl font-bold">
                    Trusted by Millions, Built for You
                </h2>
                <div className="flex justify-center gap-34">
                    <div className="space-y-4">
                        <h3 className="text-gray-300">Total Downloads</h3>
                        <h2 className="text-6xl font-extrabold">29.6M</h2>
                        <h4 className="text-gray-300">
                            21% more than last month
                        </h4>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-gray-300">Total Downloads</h3>
                        <h2 className="text-6xl font-extrabold">906K</h2>
                        <h4 className="text-gray-300">
                            46% more than last month
                        </h4>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-gray-300">Total Downloads</h3>
                        <h2 className="text-6xl font-extrabold">132+</h2>
                        <h4 className="text-gray-300">31 more will Launch</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
