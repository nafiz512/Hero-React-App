import App from '../Apps/App';

import { Link, useLoaderData } from 'react-router';

const Trendings = () => {
    const apps = useLoaderData();
    let appData = apps.filter((el) => el.id <= 8);

    return (
        <div className="space-y-5 my-15 flex flex-col items-center justify-center">
            <h2 className="text-center text-5xl font-bold">Trending Apps</h2>
            <p className="text-center text-xl text-gray-500">
                Explore All Trending Apps on the Market developed by us
            </p>
            <div className="grid grid-cols-4 gap-3">
                {appData.map((app) => (
                    <App key={app.id} app={app}></App>
                ))}
            </div>
            <Link to={'/apps'}>
                <button className="btn btn-primary">Show All</button>
            </Link>
        </div>
    );
};

export default Trendings;
