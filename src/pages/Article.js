import React from 'react';
import {Link} from "react-router-dom";

const Article = () => {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="flex p-4 border-gray-200 border-b-2">
                {/* Logo */}
                <div className="flex-1 text-center">
                    <Link to="/">
                        <img className="object-contain w-40 ml-40" src="assets/logo.png" alt="logo"/>
                    </Link>
                </div>
                {/* Menu */}
                <div className="flex-1 text-center mt-2">
                    <Link to="/"><span className="mx-5 text-yellow-600">Home</span></Link>
                    <Link to="/"><span className="mx-5 text-gray-600">About</span></Link>
                    <Link to="/"><span className="mx-5 text-gray-600">Works</span></Link>
                    <Link to="/"><span className="mx-5 text-gray-600">Services</span></Link>
                </div>
                {/* Social */}
                <div className="flex-1 text-center mt-2 flex">
                    <a href="#"><span><img src="assets/facebook-icon.svg" className="w-6 flex-1 mx-2" alt="facebook"/></span></a>
                    <a href="#"><span><img src="assets/twitter-icon.svg" className="w-6 flex-1 mx-2" alt="twitter"/></span></a>
                    <a href="#"><span><img src="assets/google-icon.jpg" className="w-6 flex-1 mx-2" alt="google"/></span></a>
                    <a href="#"><span><img src="assets/search-icon.png" className="w-4 flex-1 mx-2 mt-1" alt="search"/></span></a>
                </div>
            </div>
            {/* Content */}
            <div className="pt-5 pb-10 mx-80">
                {/* Breadcumb */}
                <p> <span className="text-gray-700 font-bold text-xs">Blog</span><span className="text-gray-500 font-normal text-xs"> / Lorem ipsum dolor sit amet</span></p>
                
                {/* Title */}
                <p className="text-4xl pt-7 font-bold"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </p>

                {/* Date */}
                <p className="pt-2"><span className="text-gray-400 font-normal text-xs"> John Broke / 20 June 2016 / WWF</span></p>

                {/* Button Box */}
                <div className="flex items-center mt-2">
                    <div className="text-xs mx-1">
                        Topics
                    </div>
                    <div className="text-xs mx-1 p-1 bg-gray-200 text-gray-600">
                        Valuing Ecosystem Services
                    </div>
                    <div className="text-xs mx-1 p-1 border-2 border-yellow-600 text-yellow-600">
                        Reuse and recycing
                    </div>
                    <div className="text-xs mx-1 p-1 bg-gray-200 text-gray-600">
                        RED ++
                    </div>
                </div>

                {/* Sub Title */}
                <p className="text-2xl mt-7 font-semibold"> 
                Marem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. sed do eiusmod tempor incididunt ut labore. sed do eiusmod tempor incididunt ut labore.
                </p>

                {/* Heading */}
                <p className="text-xl mt-7 font-semibold"> 
                HEADING 1
                </p>

                {/* Paragraph 1 */}

                <p className="text-sm mt-2 text-gray-500"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Excepteur sint occaecat cupidatat non proident
                </p>

                {/* image */}
                <div className="mt-10">
                    <img src="https://source.unsplash.com/random"  className="object-cover h-96 w-full" alt="screen1"/>
                </div>
                {/* Caption Image */}
                <p><span className="text-gray-500 font-normal text-xs">Donec non nunc vehicula Lorem ipsum dolor sit amet</span></p>

                 {/* Paragraph 2 */}

                 <p className="text-sm mt-10 text-gray-500"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Excepteur sint occaecat cupidatat non proident
                </p>

                {/* Line */}
                <hr className="mt-10"/>
                <p className="mt-5 text-2xl text-blue-400 text-center mx-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                <hr className="mt-5"/>

                {/* Paragraph 3 */}

                <p className="text-sm mt-10 text-gray-500"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Excepteur sint occaecat cupidatat non proident
                </p>

                {/* Share Icon */}
                <div className="mt-5 flex items-center">
                    <div className="text-center">
                        <span className="text-gray-600 font-bold text-xs">SHARE ON</span>
                    </div>
                    <div className="text-center mt-2 flex">
                        <a href="#"><span><img src="assets/facebook-icon.svg" className="w-6 flex-1 mx-2" alt="facebook"/></span></a>
                        <a href="#"><span><img src="assets/twitter-icon.svg" className="w-6 flex-1 mx-2" alt="twitter"/></span></a>
                        <a href="#"><span><img src="assets/google-icon.jpg" className="w-6 flex-1 mx-2" alt="google"/></span></a>
                    </div>
                </div>

                 {/* Line */}
                 <hr className="mt-7"/>

                {/* User Publisher */}
                <div className="flex mt-7">
                    <div className="w-24">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"  className="object-cover rounded-full" alt="screen1"/>
                    </div>
                    <div className="ml-6">
                        <p className="text-gray-600 font-bold text-sm">John Username</p>
                        <p className="text-gray-600 font-light text-xs">Public Relation WWF</p>
                        <p className="text-gray-600 font-light text-xs mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut .
                        </p>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <div className="bg-gray-300 p-20 grid grid-cols-5">
                    <div className="mx-6">
                        <p className="text-gray-700 font-bold text-xs mb-3">ABOUT</p>
                        <hr style={{borderColor:"#BBBBBB"}} className="mb-2"/>
                        <a href="#"><p className="text-gray-500 font-light text-xs mb-3">Home</p></a>
                        <a href="#"><p className="text-gray-500 font-light text-xs mb-3">About Us</p></a>
                        <a href="#"><p className="text-gray-500 font-light text-xs mb-3">Contact</p></a>
                        <a href="#"><p className="text-gray-500 font-light text-xs mb-3">Social Media</p></a>
                        <a href="#"><p className="text-gray-500 font-light text-xs mb-3">BLog</p></a>
                    </div>
                    <div className="mx-6">
                        <p className="text-gray-700 font-bold text-xs mb-3">WORKS</p>
                        <hr style={{borderColor:"#BBBBBB"}} className="mb-2"/>
                        <a href="#"><p className="text-gray-500 font-light text-xs mb-3">Forest Solutions</p></a>
                        <a href="#"><p className="text-gray-500 font-light text-xs mb-3">Soy Scorecards</p></a>
                        <a href="#"><p className="text-gray-500 font-light text-xs mb-3">Palm Oil Scorecards</p></a>
                        <a href="#"><p className="text-gray-500 font-light text-xs mb-3">School Of Fist</p></a>
                        <a href="#"><p className="text-gray-500 font-light text-xs mb-3">RSPO</p></a>
                    </div>
                    <div className="mx-6"> 
                        <p className="text-gray-700 font-bold text-xs mb-3">CLIENTS</p>
                        <hr style={{borderColor:"#BBBBBB"}} className="mb-2"/>
                        <a href="#"><p className="text-gray-500 font-light text-xs mb-3">WWF International</p></a>
                        <a href="#"><p className="text-gray-500 font-light text-xs mb-3">RSPO</p></a>
                        <a href="#"><p className="text-gray-500 font-light text-xs mb-3">Lorem Ipsum</p></a>
                        <a href="#"><p className="text-gray-500 font-light text-xs mb-3">Dolor Si</p></a>
                        <a href="#"><p className="text-gray-500 font-light text-xs mb-3">Amet</p></a>
                    </div>
                    <div className="col-span-2 mx-6">
                    <p className="text-gray-700 font-bold text-xs mb-3">CONTACT US</p>
                    <p className="text-gray-500 font-light text-xs mb-3">Ut tristique non elit nec accumsan. Nunc ullamcorper metus at dui luctus non cursus odio scelerquise. Nulla imperdiet variusarcu quis faucibus. Sed at consectetur lorem</p>
                    <div>
                        <input type="text" name="message" className="p-2" placeholder="Message" style={{width:"100%",borderBottom:"1px solid #CCCCCC"}}/>
                    </div>
                    <div>
                        <input type="text" name="message" className="p-2" placeholder="Your email address" style={{width:"80%"}}/><button className=" text-white" style={{backgroundColor:"black",width:"92px",height:"40px"}}>SUBMIT</button>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default Article;