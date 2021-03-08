import React from 'react';

const Clients = () => {
    return (
        <div className="pt-5 pb-16 text-center max-w-full">
        <div>
            <p className="font-bold text-xl">Clients</p>
        </div>
        <div className="pt-10 pb-10 flex items-center overflow-auto ">
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
    );
};

export default Clients;