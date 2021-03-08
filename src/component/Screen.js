import React from "react";

const Screen = () => {
  return (
    <div className="bg-white lg:flex" style={{ height: "500px" }}>
      {/* Screen 1 */}
      <div
        className="bg-gray-600 md:w-full lg:w-3/5 h-full lg:border-r-2 flex items-end"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1614282635334-600d44ad88b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80')",
        }}
      >
        {/* <img src="https://source.unsplash.com/random"  className="object-cover h-full w-full" alt="screen1"/> */}
        <div className="p-6">
          <p className="text-2xl font-semibold text-white">
            Munc ullamcopper metus at dui iuctus, non cursus odio scelerscue
          </p>
          <p className="text-white font-light text-sm">
            Description description description description description
            description description description description description
            description description description description description
            description descriptiondescription description description
            description description description
          </p>
        </div>
      </div>
      {/* Screen Container */}
      <div className="invisible lg:visible md:w-full lg:w-2/5">
        {/* Screen 2 */}
        <div
          className="lg:h-1/2 bg-gray-600 flex items-end"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1611081154836-4c6351de1819?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')",
          }}
        >
          {/* <img src="https://picsum.photos/900"  className="object-cover h-full w-full" alt="screen2"/> */}
          <div className="p-4">
            <p className="text-lg font-semibold text-white">
              Munc ullamcopper metus at dui iuctus, non cursus odio scelerscue
            </p>
          </div>
        </div>
        {/* Screen 3 */}
        <div
          className="lg:h-1/2 bg-gray-600 border-t-2 flex items-end"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1537563626051-5a6859a8d099?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDgyfDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')",
          }}
        >
          {/* <img src="https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ"  className="object-cover h-full w-full" alt="screen3"/> */}
          <div className="p-4">
            <p className="text-lg font-semibold text-white">
              Munc ullamcopper metus at dui iuctus, non cursus odio scelerscue
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen;
