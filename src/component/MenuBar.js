import React from 'react';

const MenuBar = () => {
    return (
        <div className="invisible lg:visible lg:p-2 text-center lg:mt-2 lg:mb-2">
        {/* Menu List */}
            <a href="#"><span className="mx-5 text-yellow-600">RSPO</span></a>
            <a href="#"><span className="mx-5 text-gray-600">WWF International</span></a>
            <a href="#"><span className="mx-5 text-gray-600">WWF Tigers Alive  Initiative</span></a>
            <a href="#"><span className="mx-5 text-gray-600">World Resources Institute</span></a>
            <a href="#"><span className="mx-5 text-gray-600">The Coral Triangle</span></a>
        </div>
    );
};

export default MenuBar;