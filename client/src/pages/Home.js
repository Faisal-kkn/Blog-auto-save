import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className="max-w-screen-xl grid grid-cols-3 mx-auto gap-3 mt-5">
            <div className="overflow-hidden rounded-2xl border">
                <img src="https://uploads-ssl.webflow.com/63c16aee053f4d9ebc9e6760/63f77b6e509f138fb82880ce_Img_client_1%402x%20(2).png" alt="" className="w-full" />
                <div className="p-4">
                    <h4 className="text-sm">Category</h4>
                    <Link to='/blog/123'>
                        <h1 className="font-bold mt-1">Heading</h1>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;