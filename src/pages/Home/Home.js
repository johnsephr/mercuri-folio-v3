import React from "react";

// file imports
// import RootContainer from "../../containers/RootContainer";
import LandingContainer from "../../containers/LandingContainer/LandingContainer";
import HomeBanner from "../../components/LandingBanners/HomeBanner";

import homeLandingImage from "../../assets/images/landings/tot.png"

const Home = () => {
  return (
    <div>
      {/* landing image */}
      <div className="absolute top-0" style={{ height: '100vh', zIndex: 0 }}>
        <img src={homeLandingImage} />
      </div>
        <LandingContainer
          logoVariant="dark"
          starVariant="dark"
          style={{ zIndex: 2}}
        >
          <HomeBanner />
        </LandingContainer>

        {/* rest of page content here... */}
    </div>
  );
}

export default Home;
