import React from 'react';

const Home = () => {
    return (
        // All Pages
        <div className="min-h-screen">
            {/* Header */}
            <div className="flex p-4 border-gray-200 border-b-2">
                {/* Logo */}
                <div className="flex-1 text-center">
                    <img className="object-contain w-40 ml-40" src="assets/logo.png" alt="logo"/>
                </div>
                {/* Menu */}
                <div className="flex-1 text-center mt-2">
                    <span className="mx-5 text-yellow-600">Home</span>
                    <span className="mx-5 text-gray-600">About</span>
                    <span className="mx-5 text-gray-600">Works</span>
                    <span className="mx-5 text-gray-600">Services</span>
                </div>
                {/* Social */}
                <div className="flex-1 text-center mt-2 flex">
                    <span><img src="assets/facebook-icon.svg" className="w-6 flex-1 mx-2" alt="facebook"/></span>
                    <span><img src="assets/twitter-icon.svg" className="w-6 flex-1 mx-2" alt="twitter"/></span>
                    <span><img src="assets/google-icon.jpg" className="w-6 flex-1 mx-2" alt="google"/></span>
                    <span><img src="assets/search-icon.png" className="w-4 flex-1 mx-2 mt-1" alt="search"/></span>
                </div>
            </div>
            {/* Menu Bar */}
            <div className="p-2 text-center mt-2 mb-2">
                {/* Menu List */}
                <span className="mx-5 text-yellow-600">RSPO</span>
                <span className="mx-5 text-gray-600">WWF International</span>
                <span className="mx-5 text-gray-600">WWF Tigers Alive  Initiative</span>
                <span className="mx-5 text-gray-600">World Resources Institute</span>
                <span className="mx-5 text-gray-600">The Coral Triangle</span>
            </div>
            {/* Screen  */}
            <div className="bg-white flex" style={{height:'500px'}}>
                {/* Screen 1 */}
                <div className="bg-gray-600 w-3/5 h-full border-r-2">
                    <img src="https://source.unsplash.com/random"  className="object-cover h-full w-full" alt="screen1"/>
                </div>
                {/* Screen Container */}
                <div className="w-2/5">
                    {/* Screen 2 */}
                    <div className="h-1/2 bg-gray-600">
                        <img src="https://picsum.photos/900"  className="object-cover h-full w-full" alt="screen2"/>
                    </div>
                    {/* Screen 3 */}
                    <div className="h-1/2 bg-gray-600 border-t-2">
                        <img src="https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ"  className="object-cover h-full w-full" alt="screen3"/>
                    </div>
                </div>
            </div>
            {/* Content Container */}
            <div style={{backgroundColor:'#F5F5F5'}}>
                {/* Content */}
                <div className="bg-red-200 mx-28 grid grid-cols-3">
                    {/* Card */}
                    <div className="h-80 bg-yellow-100">

                    </div>

                    <div className="h-80 bg-yellow-200">

                    </div>

                    <div className="h-80 bg-yellow-300">

                    </div>
                    <div className="h-80 bg-yellow-400">

                    </div>
                    <div className="h-80 bg-yellow-500">

                    </div>
                    <div className="h-80 bg-yellow-600">

                    </div>
                </div>
            </div>
            {/* Clients */}
            <div className="bg-green-100 p-10 text-center">
                <span className="mx-9">Client Logo</span>
                <span className="mx-9">Client Logo</span>
                <span className="mx-9">Client Logo</span>
                <span className="mx-9">Client Logo</span>
                <span className="mx-9">Client Logo</span>
            </div>
            {/* Social Media */}
            <div style={{backgroundColor:'#F5F5F5'}}>
                {/* Content */}
                <div className="bg-red-200 mx-28 grid grid-cols-3">
                    {/* Card */}
                    <div className="h-96 bg-yellow-100">

                    </div>

                    <div className="h-96 bg-yellow-200">

                    </div>

                    <div className="h-96 bg-yellow-300">

                    </div>
                    
                </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-300 p-20 grid grid-cols-5">
                <div className="mx-6">
                    About
                    <hr />
                </div>
                <div className="mx-6">
                    Works
                    <hr />
                </div>
                <div className="mx-6"> 
                    Clients
                    <hr />
                </div>
                <div className="col-span-2 mx-6">
                    Contact US
                </div>
            </div>
        </div>
    );
};

export default Home;