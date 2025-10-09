import React, { useState } from 'react';
import InstalledAppsList from './InstalledAppsList';
import { useLoaderData } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';

const InstalledApps = () => {
    const [list, setList] = useState(
        JSON.parse(localStorage.getItem('installed')) || []
    );
    const apps = useLoaderData();

    const [appList, setAppList] = useState(
        apps.filter((el) => list.includes(el.id.toString()))
    );

    const handleUninstall = (id, title) => {
        const updatedList = list.filter((el) => el != id);

        setAppList(appList.filter((app) => app.id.toString() != id));
        setList(updatedList);
        toast.success(`${title} is Uninstalled Successfully`, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
            //transition: Bounce,
        });
    };
    const handleSort = (type) => {
        let sorted = [...appList];

        if (type === 'ascending') {
            sorted.sort((a, b) => a.downloads - b.downloads);
        } else if (type === 'descending') {
            sorted.sort((a, b) => b.downloads - a.downloads);
        } else {
            console.log('Invalid sort type');
        }

        setAppList(sorted);
    };
    localStorage.setItem('installed', JSON.stringify(list));
    return (
        <div>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                // transition={Bounce}
            />
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
                    <div>
                        <select
                            defaultValue="Sort by Downloads"
                            className="select"
                        >
                            <option disabled={true}>Sort by Downloads</option>
                            <option onClick={() => handleSort('ascending')}>
                                Low-High
                            </option>
                            <option onClick={() => handleSort('descending')}>
                                High-Low
                            </option>
                        </select>
                    </div>
                </div>
                <div className="grid gap-3 my-6">
                    {appList.map((app) => (
                        <InstalledAppsList
                            key={app.id}
                            app={app}
                            handleUninstall={handleUninstall}
                        ></InstalledAppsList>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InstalledApps;
