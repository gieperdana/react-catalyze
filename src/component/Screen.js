import React from "react";

const Screen = () => {
  return (
    <div className="bg-white lg:flex" style={{ height: "500px" }}>
      {/* Screen 1 */}
      <div
        className="bg-gray-600 md:w-full lg:w-3/5 h-full lg:border-r-2 flex items-end"
        style={{
          backgroundImage:
            "url('https://i.picsum.photos/id/1073/536/354.jpg?hmac=2TFoFh7Q5tt1soIJWcMPmAzO8253cMKXCXq9M8z202o')",
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
              "url('https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0')",
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
              "url('https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60')",
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
