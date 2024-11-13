import React from "react";

const HeroSection = () => {
  const images = [
    {
      url: "https://ecomusnext-themesflat.vercel.app/images/slider/paddle-boards-2.jpg",
    },
    {
      url: "https://homez-appdir.vercel.app/_next/static/media/home-1.14c0d866.jpg",
    },
  ];
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(20, 63, 72, 0.7), rgba(20, 63, 72, 0.3)), url(${images[0].url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: 900,
      }}
    >
      {/* middle content */}
      <div>
        <h6>THE BEST WAY TO</h6>
        <h3>Find your dream surf board</h3>
        <p>We’ve more than 745,000 surf boards.</p>
        {/* search area */}
        <div></div>
      </div>
    </div>
  );
};

export default HeroSection;
