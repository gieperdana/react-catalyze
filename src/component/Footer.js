import React from 'react';

const Footer = () => {
    return (
        <div className="bg-gray-300 p-7 lg:p-20 lg:grid lg:grid-cols-5">
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
                <input type="text" name="message" className="p-2" placeholder="Your email address" style={{width:"80%"}}/><button className=" text-white text-xs lg:text-sm p-3" style={{backgroundColor:"black",width:"20%"}}>SUBMIT</button>
            </div>
            </div>
        </div>
    );
};

export default Footer;