import React from "react";

const LogoSlider = () => {
  const logos = [
    "https://i.ibb.co/Vv5rkDK/api-partner-verzon.png",
    "https://i.ibb.co/J399KDg/api-partner-netflix.png",
    "https://i.ibb.co/TKT0F5L/api-partner-yelp.png",
    "https://i.ibb.co/HG6KR89/api-partner-adobe.png",
    "https://i.ibb.co/hMSJ1sg/api-partner-ring.png",
    "https://i.ibb.co/4RWQcMS/api-partner-nespresso.png",
    "https://i.ibb.co/Vv5rkDK/api-partner-verzon.png",
    "https://i.ibb.co/J399KDg/api-partner-netflix.png",
    "https://i.ibb.co/TKT0F5L/api-partner-yelp.png",
    "https://i.ibb.co/HG6KR89/api-partner-adobe.png",
    "https://i.ibb.co/hMSJ1sg/api-partner-ring.png",
    "https://i.ibb.co/4RWQcMS/api-partner-nespresso.png",
    "https://i.ibb.co/Vv5rkDK/api-partner-verzon.png",
    "https://i.ibb.co/J399KDg/api-partner-netflix.png",
    "https://i.ibb.co/TKT0F5L/api-partner-yelp.png",
    "https://i.ibb.co/HG6KR89/api-partner-adobe.png",
    "https://i.ibb.co/hMSJ1sg/api-partner-ring.png",
    "https://i.ibb.co/4RWQcMS/api-partner-nespresso.png",
    "https://i.ibb.co/Vv5rkDK/api-partner-verzon.png",
    "https://i.ibb.co/J399KDg/api-partner-netflix.png",
    "https://i.ibb.co/TKT0F5L/api-partner-yelp.png",
    "https://i.ibb.co/HG6KR89/api-partner-adobe.png",
    "https://i.ibb.co/hMSJ1sg/api-partner-ring.png",
    "https://i.ibb.co/4RWQcMS/api-partner-nespresso.png",
  ];

  return (
    <div className="logo-slider">
      <div className="logos-slide ">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
