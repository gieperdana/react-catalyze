import React, { useState } from 'react';

const Home = () => {
    const [hover, setHover] = useState(true);

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
                    <a href="#"><span className="mx-5 text-yellow-600">Home</span></a>
                    <a href="#"><span className="mx-5 text-gray-600">About</span></a>
                    <a href="#"><span className="mx-5 text-gray-600">Works</span></a>
                    <a href="#"><span className="mx-5 text-gray-600">Services</span></a>
                </div>
                {/* Social */}
                <div className="flex-1 text-center mt-2 flex">
                    <a href="#"><span><img src="assets/facebook-icon.svg" className="w-6 flex-1 mx-2" alt="facebook"/></span></a>
                    <a href="#"><span><img src="assets/twitter-icon.svg" className="w-6 flex-1 mx-2" alt="twitter"/></span></a>
                    <a href="#"><span><img src="assets/google-icon.jpg" className="w-6 flex-1 mx-2" alt="google"/></span></a>
                    <a href="#"><span><img src="assets/search-icon.png" className="w-4 flex-1 mx-2 mt-1" alt="search"/></span></a>
                </div>
            </div>
            {/* Menu Bar */}
            <div className="p-2 text-center mt-2 mb-2">
                {/* Menu List */}
                <a href="#"><span className="mx-5 text-yellow-600">RSPO</span></a>
                <a href="#"><span className="mx-5 text-gray-600">WWF International</span></a>
                <a href="#"><span className="mx-5 text-gray-600">WWF Tigers Alive  Initiative</span></a>
                <a href="#"><span className="mx-5 text-gray-600">World Resources Institute</span></a>
                <a href="#"><span className="mx-5 text-gray-600">The Coral Triangle</span></a>
            </div>
            {/* Screen  */}
            <div className="bg-white flex" style={{height:'500px'}}>
                {/* Screen 1 */}
                <div className="bg-gray-600 w-3/5 h-full border-r-2 flex items-end" style={{backgroundImage:"url('https://i.picsum.photos/id/1073/536/354.jpg?hmac=2TFoFh7Q5tt1soIJWcMPmAzO8253cMKXCXq9M8z202o')"}}>
                    {/* <img src="https://source.unsplash.com/random"  className="object-cover h-full w-full" alt="screen1"/> */}
                    <div className="p-6">
                        <p className="text-2xl font-semibold text-white">Munc ullamcopper metus at dui iuctus, non cursus odio scelerscue</p>
                        <p className="text-white font-light text-sm">
                            Description description description description description description description description description description description
                            description description description description description descriptiondescription description description description description description
                        </p>
                    </div>
                </div>
                {/* Screen Container */}
                <div className="w-2/5">
                    {/* Screen 2 */}
                    <div className="h-1/2 bg-gray-600 flex items-end" style={{backgroundImage:"url('https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0')"}}>
                        {/* <img src="https://picsum.photos/900"  className="object-cover h-full w-full" alt="screen2"/> */}
                        <div className="p-4">
                            <p className="text-lg font-semibold text-white">Munc ullamcopper metus at dui iuctus, non cursus odio scelerscue</p>
                        </div>
                    </div>
                    {/* Screen 3 */}
                    <div className="h-1/2 bg-gray-600 border-t-2 flex items-end" style={{backgroundImage:"url('https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60')"}}>
                        {/* <img src="https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ"  className="object-cover h-full w-full" alt="screen3"/> */}
                        <div className="p-4">
                        <p className="text-lg font-semibold text-white">Munc ullamcopper metus at dui iuctus, non cursus odio scelerscue</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Content Container */}
            <div className="flex pt-10" style={{backgroundColor:'#F5F5F5'}}>
                {/* Content */}
                <div className="w-32">
                    <a href="#">
                        <img src="assets/arrow_left.png"  className="w-8 h-16 mx-8 mt-64" alt="arrow_left"/>
                    </a>
                </div>
                <div className="w-full">
                <div className="grid grid-cols-3">
                    {/* Card */}
                    <div className="h-80 mx-4 my-2 group">
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
                    </div>

                    <div className="h-80 mx-4 my-2 group">
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
                    </div>

                    <div className="h-80 mx-4 my-2 group" onMouseEnter={() => setHover(false)} onMouseLeave={() => setHover(true)}>
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
                    </div>
                    <div className="h-80 mx-4 my-2 group">
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
                    </div>
                    <div className="h-80 mx-4 my-2 group">
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
                    </div>
                    <div className="h-80 mx-4 my-2 group">
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
                    </div>
                </div>
                </div>
                <div className="w-32">
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
            <div className="pt-5 pb-16 text-center mt-1">
                <div>
                    <p className="font-bold text-xl">Clients</p>
                </div>
                <div className="mt-10 flex items-center">
                    <span className="mx-9">
                        <img src="assets/client1.png"  className="w-32 h-18 mx-8" alt="client1"/>
                    </span>
                    <span className="mx-9">
                        <img src="assets/client2.png"  className="w-32 h-18 mx-8" alt="client2"/>
                    </span>
                    <span className="mx-9">
                        <img src="assets/client3.png"  className="w-28 h-15 mx-8" alt="client3"/>
                    </span>
                    <span className="mx-9">
                        <img src="assets/client4.png"  className="w-28 h-15 mx-8" alt="client4"/>
                    </span>
                    <span className="mx-9">
                        <img src="assets/client5.png"  className="w-32 h-18 mx-8" alt="client5"/>
                    </span>
                    <span className="mx-9">
                        <img src="assets/client6.png"  className="w-32 h-18 mx-8" alt="client6"/>
                    </span>
                </div>
            </div>
            {/* Social Media */}
            <div className="pt-2 pb-10">
                {/* Content */}
                <div className="mx-28 grid grid-cols-3">
                    {/* Card */}
                    <div className="" style={{height:"700px"}}>
                        <img src="assets/facebook.png"  className="w-96 h-full" alt="facebook"/>
                    </div>

                    <div className="" style={{height:"700px"}}>
                        <img src="assets/twitter.png"  className="w-96 h-full" alt="twitter"/>
                    </div>

                    <div className="" style={{height:"700px"}}>
                        <img src="assets/instagram.png"  className="w-96 h-full" alt="instagram"/>
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

export default Home;