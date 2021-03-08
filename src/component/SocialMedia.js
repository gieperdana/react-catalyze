import React from "react";

const SocialMedia = () => {
  return (
    <div className="pb-10">
      {/* Content */}
      <div className="mx-5 lg:mx-28 lg:grid lg:grid-cols-3">
        {/* Card */}
        <div className="mt-10 lg:mt-0" style={{ height: "700px" }}>
          <img
            src="assets/facebook.png"
            className="w-96 h-full"
            alt="facebook"
          />
        </div>

        <div className="mt-10 lg:mt-0" style={{ height: "700px" }}>
          <img src="assets/twitter.png" className="w-96 h-full" alt="twitter" />
        </div>

        <div className="mt-10 lg:mt-0" style={{ height: "700px" }}>
          <img
            src="assets/instagram.png"
            className="w-96 h-full"
            alt="instagram"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
