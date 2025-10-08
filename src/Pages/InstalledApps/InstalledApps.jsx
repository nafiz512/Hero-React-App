import React from 'react';
import InstalledAppsList from './InstalledAppsList';
import { useLoaderData } from 'react-router';

const InstalledApps = () => {
    let list = JSON.parse(localStorage.getItem('installed')) || [];
    let apps = useLoaderData();
    let Applist = apps.filter((el) => {
        return list.includes(el.id.toString());
    });

    return (
        <div>
            <div className="max-w-7xl mx-auto mt-15 ">
                <div className="space-y-5">
                    <h2 className="text-5xl font-bold text-center">
                        Your Installed Apps
                    </h2>
                    <p className="text-center text-xl text-gray-500">
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </div>
                <div className="flex justify-between mt-8">
                    <h2 className="font-bold text-2xl">
                        ({list.length}) Apps Found
                    </h2>
                    <h2>sort by</h2>
                </div>
                <div className="grid gap-3 mt-6">
                    {Applist.map((app) => (
                        <InstalledAppsList
                            key={app.id}
                            app={app}
                        ></InstalledAppsList>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InstalledApps;
