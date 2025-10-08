import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import App from './App';

const Apps = () => {
    const apps = useLoaderData();

    const [search, setSearch] = useState('');
    let toMatch = search.trim().toLocaleLowerCase();
    let newList = toMatch
        ? apps.filter((el) => el.title.toLowerCase().includes(toMatch))
        : apps;
    const handleSearch = (e) => {
        console.log(e.target.value);

        setSearch(e.target.value);
    };

    return (
        <div className="max-w-7xl mx-auto mt-15 ">
            <div className="space-y-5">
                <h2 className="text-5xl font-bold text-center">
                    Our All Applications
                </h2>
                <p className="text-center text-xl text-gray-500">
                    Explore All Apps on the Market developed by us. We code for
                    Millions
                </p>
            </div>
            <div className="flex justify-between mt-8">
                <h2 className="font-bold text-2xl">
                    ({newList.length}) Apps Found
                </h2>
                <input
                    value={search}
                    onChange={handleSearch}
                    type="search"
                    name="search"
                    required
                    placeholder="Search"
                    className="border-1 border-gray-400 rounded-sm pl-4"
                />
            </div>
            <div className="grid grid-cols-4 gap-3 mt-6">
                {newList.map((app) => (
                    <App key={app.id} app={app}></App>
                ))}
            </div>
        </div>
    );
};

export default Apps;
