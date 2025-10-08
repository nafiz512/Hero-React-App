import React from 'react';
import { Link } from 'react-router';
import { IoLogoGithub } from 'react-icons/io';
import { NavLink } from 'react-router';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'active-link' : ''
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/apps"
                    className={({ isActive }) =>
                        isActive ? 'active-link' : ''
                    }
                >
                    Apps
                </NavLink>
            </li>
            <li>
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
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
                    <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>
                <div className="navbar-end">
                    <Link
                        to={'https://github.com/nafiz512'}
                        className="btn btn-primary"
                    >
                        <IoLogoGithub className="" size={24} /> Contribute
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
