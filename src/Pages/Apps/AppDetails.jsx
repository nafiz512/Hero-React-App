import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import dicon from '../../assets/icon-downloads.png';
import ricon from '../../assets/icon-ratings.png';
import vicon from '../../assets/icon-review.png';
import { ToastContainer, toast } from 'react-toastify';

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import AppNotFound from '../ErrorPages/AppNotFound';

const AppDetails = () => {
    const { id } = useParams();
    const apps = useLoaderData();

    let list = JSON.parse(localStorage.getItem('installed')) || [];
    const [active, setActive] = useState(list.find((el) => el == id));

    const data = apps.find((el) => el.id == id);
    if (!data) {
        return <AppNotFound></AppNotFound>;
    }

    const {
        title,
        image,
        companyName,
        description,
        reviews,
        size,
        ratingAvg,
        downloads,
    } = data;
    let data2 = data.ratings;
    data2 = [...data2].reverse();

    const handleInstall = () => {
        list.push(id);
        localStorage.setItem('installed', JSON.stringify(list));
        setActive(true);
        toast.success(`Yahoo !! ${title} is installed Successfully`, {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
            //transition: Bounce,
        });
    };

    return (
        <div className="max-w-7xl mx-auto">
            <ToastContainer
                position="top-center"
                autoClose={5000}
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

            <div className="flex mt-12 border-b border-gray-400 pb-10">
                <div>
                    <img
                        className="max-h-[350px] max-w-[350px]"
                        src={image}
                        alt=""
                    />
                </div>
                <div className="w-full">
                    <div className=" border-b border-gray-400 ml-7">
                        <h2 className="text-3xl">{title}</h2>
                        <p className="text-xl">
                            <span className="text-gray-500">Developed by </span>
                            <span className="text-[#632EE3]">
                                {companyName}
                            </span>
                        </p>
                    </div>
                    <div className="flex gap-8 mt-7 ml-7">
                        <div className="">
                            <img src={dicon} className="h-10" alt="" />
                            <h2 className="text-lg ">Downloads</h2>
                            <h2 className="text-4xl font-bold">{downloads}</h2>
                        </div>
                        <div className="">
                            <img src={ricon} className="h-10" alt="" />
                            <h2 className="text-lg ">Downloads</h2>
                            <h2 className="text-4xl font-bold">{ratingAvg}</h2>
                        </div>
                        <div className="">
                            <img src={vicon} className="h-10" alt="" />
                            <h2 className="text-lg ">Downloads</h2>
                            <h2 className="text-4xl font-bold">{reviews}</h2>
                        </div>
                    </div>
                    <div>
                        <button
                            onClick={handleInstall}
                            className="btn btn-success text-lg mt-7 ml-7"
                            disabled={active}
                        >
                            {active ? 'Installed' : `Install Now (${size} MB)`}
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <h1 className="font-bold text-2xl">Raintings</h1>
                <div>
                    <BarChart
                        width={1280}
                        height={350}
                        data={data2}
                        layout="vertical"
                    >
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip />
                        <Bar dataKey="count" fill="#FF8811" barSize={30} />
                    </BarChart>
                </div>
            </div>
            <h1 className="font-bold text-2xl">Description</h1>
            <p>{description}</p>
        </div>
    );
};

export default AppDetails;
