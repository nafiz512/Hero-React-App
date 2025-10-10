import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import App from './App';

import AppLoading from '../LoadingEffect/AppLoading';

const Apps = () => {
    const apps = useLoaderData();
    const [search, setSearch] = useState('');
    const [filteredApps, setFilteredApps] = useState(apps);
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
        setIsSearching(true);
    };

    useEffect(() => {
        const toMatch = search.trim().toLowerCase();

        const result = toMatch
            ? apps.filter((el) => el.title.toLowerCase().includes(toMatch))
            : apps;

        setFilteredApps(result);

        const timer = setTimeout(() => setIsSearching(false), 300);
        return () => clearTimeout(timer);
    }, [search, apps]);

    const handleShowAll = () => {
        setSearch('');
        setFilteredApps(apps);
    };

    return (
        <div className="max-w-7xl mx-auto mt-15">
            {/* Header */}
            <div className="space-y-5">
                <h2 className="text-5xl font-bold text-center">
                    Our All Applications
                </h2>
                <p className="text-center text-xl text-gray-500">
                    Explore all apps on the market developed by us. We code for
                    millions.
                </p>
            </div>

            {/* Search bar */}
            <div className="flex justify-between mt-8">
                <h2 className="font-bold text-xl  lg:text-2xl">
                    ({filteredApps.length}) Apps Found
                </h2>
                <input
                    value={search}
                    onChange={handleSearch}
                    type="search"
                    name="search"
                    placeholder="Search"
                    className="border border-gray-400 rounded-sm h-10 w-[200px] lg:w-xs pl-4 bg-gray-100"
                />
            </div>

            {/* Searching indicator */}
            <div>{isSearching && <AppLoading></AppLoading>}</div>

            {/* No results */}
            {!filteredApps.length && !isSearching && (
                <div className="flex flex-col space-y-6 py-10 justify-center items-center">
                    <h2 className="text-4xl font-bold text-orange-800">
                        No Apps Found
                    </h2>
                    <button onClick={handleShowAll} className="btn btn-primary">
                        Show All
                    </button>
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3 mt-6 ml-1">
                {filteredApps.map((app) => (
                    <App key={app.id} app={app} />
                ))}
            </div>
        </div>
    );
};

export default Apps;
