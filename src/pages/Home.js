import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {Header,Footer,Screen,MenuBar,Clients,SocialMedia} from "../component";
const Home = () => {
    const [hover, setHover] = useState(false);

    return (
        // All Pages
        <div className="min-h-screen">
            {/* Header */}
            <Header/>
            {/* Menu Bar */}
            <MenuBar/>
            {/* Screen  */}
            <Screen/>
            {/* Content Container */}
            <div className="flex pt-10" style={{backgroundColor:'#F5F5F5'}}>
                {/* Content */}
                <div className="invisible lg:visible w-0 lg:w-32">
                    <a href="#">
                        <img src="assets/arrow_left.png"  className="w-8 h-16 mx-8 mt-64" alt="arrow_left"/>
                    </a>
                </div>
                <div className="w-full">
                <div className="lg:grid lg:grid-cols-3">
                    {/* Card */}
                    <div className="h-80 mx-4 mt-20 lg:my-2 group">
                        <Link to="/article">
                        {/* {hover && ( */}
                            <div className="h-4/5">
                                <img src="https://picsum.photos/900"  className="object-cover h-full w-full" alt="screen2"/>
                            </div>
                        {/* )} */}
                        <div>
                            <p className="text-xs mt-2 text-gray-400">22 Oct 2020</p>
                        </div>
                        <div className="text-sm font-semibold mt-2 group-hover:text-yellow-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut nunc quis justo soda
                        </div>
                        {/* {!hover && (
                            <div className="mt-2">
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                                <p className="text-sm text-yellow-600 mt-2">Read more . . .</p>
                            </div>
                        )} */}
                        </Link>
                    </div>

                    <div className="h-80 mx-4 mt-20 lg:my-2 group">
                        <Link to="/article">
                        {/* {hover && ( */}
                            <div className="h-4/5">
                                <img src="https://picsum.photos/900"  className="object-cover h-full w-full" alt="screen2"/>
                            </div>
                        {/* )} */}
                        <div>
                            <p className="text-xs mt-2 text-gray-400">22 Oct 2020</p>
                        </div>
                        <div className="text-sm font-semibold mt-2 group-hover:text-yellow-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut nunc quis justo soda
                        </div>
                        {/* {!hover && (
                            <div className="mt-2">
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                                <p className="text-sm text-yellow-600 mt-2">Read more . . .</p>
                            </div>
                        )} */}
                        </Link>
                    </div>

                    <div className="h-80 mx-4 mt-20 lg:my-2 group" onMouseEnter={() => setHover(false)} onMouseLeave={() => setHover(true)}>
                        <Link to="/article">
                        {hover && (
                            <div className="h-4/5">
                                <img src="https://picsum.photos/900"  className="object-cover h-full w-full" alt="screen2"/>
                            </div>
                        )}
                        <div>
                            <p className="text-xs mt-2 text-gray-400">22 Oct 2020</p>
                        </div>
                        <div className="text-sm font-semibold mt-2 group-hover:text-yellow-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut nunc quis justo soda
                        </div>
                        {!hover && (
                            <div className="mt-2">
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                                <p className="text-sm text-yellow-600 mt-2">Read more . . .</p>
                            </div>
                        )}
                        </Link>
                    </div>
                    <div className="h-80 mx-4 mt-20 lg:my-2 group">
                        <Link to="/article">
                        {/* {hover && ( */}
                            <div className="h-4/5">
                                <img src="https://picsum.photos/900"  className="object-cover h-full w-full" alt="screen2"/>
                            </div>
                        {/* )} */}
                        <div>
                            <p className="text-xs mt-2 text-gray-400">22 Oct 2020</p>
                        </div>
                        <div className="text-sm font-semibold mt-2 group-hover:text-yellow-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut nunc quis justo soda
                        </div>
                        {/* {!hover && (
                            <div className="mt-2">
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                                <p className="text-sm text-yellow-600 mt-2">Read more . . .</p>
                            </div>
                        )} */}
                        </Link>
                    </div>
                    <div className="h-80 mx-4 mt-20 lg:my-2 group">
                        <Link to="/article">
                        {/* {hover && ( */}
                            <div className="h-4/5">
                                <img src="https://picsum.photos/900"  className="object-cover h-full w-full" alt="screen2"/>
                            </div>
                        {/* )} */}
                        <div>
                            <p className="text-xs mt-2 text-gray-400">22 Oct 2020</p>
                        </div>
                        <div className="text-sm font-semibold mt-2 group-hover:text-yellow-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut nunc quis justo soda
                        </div>
                        {/* {!hover && (
                            <div className="mt-2">
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                                <p className="text-sm text-yellow-600 mt-2">Read more . . .</p>
                            </div>
                        )} */}
                        </Link>
                    </div>
                    <div className="h-80 mx-4 mt-20 lg:my-2 group">
                        <Link to="/article">
                        {/* {hover && ( */}
                            <div className="h-4/5">
                                <img src="https://picsum.photos/900"  className="object-cover h-full w-full" alt="screen2"/>
                            </div>
                        {/* )} */}
                        <div>
                            <p className="text-xs mt-2 text-gray-400">22 Oct 2020</p>
                        </div>
                        <div className="text-sm font-semibold mt-2 group-hover:text-yellow-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut nunc quis justo soda
                        </div>
                        {/* {!hover && (
                            <div className="mt-2">
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                                <p className="text-sm text-yellow-600 mt-2">Read more . . .</p>
                            </div>
                        )} */}
                        </Link>
                    </div>
                </div>
                </div>
                <div className="invisible lg:visible w-0 lg:w-32">
                    <a href="#">
                        <img src="assets/arrow_right.png"  className="w-8 h-16 mx-8 mt-64" alt="arrow_right"/>
                    </a>
                </div>
            </div>

            <div className="" style={{backgroundColor:'#F5F5F5'}}>
                <div className="pt-10 pb-10">
                    <center>
                        <input id="radio1" type="radio" name="radio" className="mx-2" />
                        <input id="radio1" type="radio" name="radio" className="mx-2" />
                        <input id="radio1" type="radio" name="radio" className="mx-2" />
                        <input id="radio1" type="radio" name="radio" className="mx-2" />
                    </center>
                </div>
            </div>
            {/* Clients */}
            <Clients/>
            {/* Social Media */}
            <SocialMedia/>
            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default Home;