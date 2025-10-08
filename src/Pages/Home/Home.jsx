import React, { use } from 'react';
import Banner from '../../Components/Banner/Banner';
import Trendings from '../Trendings/Trendings';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto">
                <Trendings></Trendings>
            </div>
        </div>
    );
};

export default Home;
