import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="lg:flex p-4 border-gray-200 border-b-2">
            {/* Logo */}
            <div className="flex-1 text-center">
                <Link to="/">
                    <img className="object-contain w-40 lg:ml-40" src="assets/logo.png" alt="logo"/>
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
            <div className="invisible lg:visible flex-1 text-center lg:mt-2 flex">
                <a href="#"><span><img src="assets/facebook-icon.svg" className="w-6 flex-1 mx-2" alt="facebook"/></span></a>
                <a href="#"><span><img src="assets/twitter-icon.svg" className="w-6 flex-1 mx-2" alt="twitter"/></span></a>
                <a href="#"><span><img src="assets/google-icon.jpg" className="w-6 flex-1 mx-2" alt="google"/></span></a>
                <a href="#"><span><img src="assets/search-icon.png" className="w-4 flex-1 mx-2 mt-1" alt="search"/></span></a>
            </div>
        </div>
    );
};

export default Header;