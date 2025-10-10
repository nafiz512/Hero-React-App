import React from 'react';
import { Link } from 'react-router';
import { IoLogoGithub } from 'react-icons/io';
import { NavLink } from 'react-router';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const links = (
        <>
            <li className="text-xl px-3 py-2 hover:bg-gray-300 rounded-lg">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'active-link' : ''
                    }
                >
                    Home
                </NavLink>
            </li>
            <li className="text-xl px-3 py-2 hover:bg-gray-300 rounded-lg">
                <NavLink
                    to="/apps"
                    className={({ isActive }) =>
                        isActive ? ' active-link pb-0.5' : ''
                    }
                >
                    Apps
                </NavLink>
            </li>
            <li className="text-xl px-3 py-2 hover:bg-gray-300 rounded-lg">
                <NavLink
                    to="/installation"
                    className={({ isActive }) =>
                        isActive ? 'active-link' : ''
                    }
                >
                    Installation
                </NavLink>
            </li>
        </>
    );
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost bg-blue-300 lg:hidden"
                        >
                            <svg
                                size={1}
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7 "
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu font-bold dropdown-content bg-base-100 rounded-box z-1 mt-3 w-42  pl-3 shadow"
                        >
                            {links}
                        </ul>
                    </div>

                    <Link to={'/'} className="btn btn-ghost text-xl">
                        <img className="h-10 w-10" src={logo} alt="" />
                        HERO.IO
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex ">{links}</ul>
                </div>
                <div className="navbar-end">
                    <Link
                        to={'https://github.com/nafiz512'}
                        className="btn bg-linear-to-r btn-primary from-[#632EE3] to-[#9F62F2] "
                    >
                        <IoLogoGithub className="" size={24} /> Contribute
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
