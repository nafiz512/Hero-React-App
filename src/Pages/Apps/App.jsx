import React from 'react';
import dicon from '../../assets/icon-downloads.png';
import sicon from '../../assets/icon-ratings.png';

const App = ({ app }) => {
    const { image, title, downloads, ratingAvg } = app;
    return (
        <div>
            <div className="justify-between card bg-base-100 max-w-96 shadow-sm h-full">
                <div className=" flex items-center justify-center m-5 rounded-xl">
                    <img
                        src={image}
                        alt="apps img"
                        className="h-[250px] w-full rounded-lg"
                    />
                </div>
                <div className="card-body">
                    <h2 className="card-title text-xl">{title}</h2>

                    <div className="card-actions flex justify-between">
                        <div className="flex justify-center items-center gap-2 bg-[#F1F5E8] px-2 py-1 rounded-lg text-[#00D390]">
                            <img src={dicon} className="h-5 w-5" alt="" />
                            <h2 className="text-lg">{downloads}</h2>
                        </div>
                        <div className="flex gap-2 justify-center items-center bg-[#FFF0E1] px-2 py-1 rounded-lg text-[#FF8811]">
                            <img src={sicon} className="h-5 w-5" alt="" />
                            <h2 className="text-lg">{ratingAvg}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
