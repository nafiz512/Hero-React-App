import React from 'react';
import dicon from '../../assets/icon-downloads.png';
import sicon from '../../assets/icon-ratings.png';

const InstalledAppsList = ({ app, handleUninstall }) => {
    const { id, image, title, downloads, ratingAvg, size } = app;

    return (
        <div className=" flex flex-row card bg-base-100  shadow-sm ">
            <div className="m-3 rounded-xl">
                <img
                    src={image}
                    alt="apps img"
                    className="h-[80px] w-[80px] rounded-lg"
                />
            </div>
            <div className="flex justify-between w-full items-center pr-5">
                <div>
                    <h2 className="card-title text-xl">{title}</h2>

                    <div className="card-actions flex ">
                        <div className="flex justify-center items-center gap-2 px-2 py-1 rounded-lg text-[#00D390]">
                            <img src={dicon} className="h-5 w-5" alt="" />
                            <h2 className="text-lg">{downloads}</h2>
                        </div>
                        <div className="flex gap-2 justify-center items-center px-2 py-1 rounded-lg text-[#FF8811]">
                            <img src={sicon} className="h-5 w-5" alt="" />
                            <h2 className="text-lg">{ratingAvg}</h2>
                        </div>
                        <div className="flex gap-2 justify-center items-center px-2 py-1 rounded-lg text-gray-500 text-lg">
                            <h2>{size} MB</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        onClick={() => handleUninstall(id)}
                        className="btn btn-success text-white text-xl font-bold"
                    >
                        Uninstall
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InstalledAppsList;
