import React from "react";

// file imports
import RootBannerContainer from "../../containers/RootBannerContainer";
import LandingContainer from "../../containers/LandingContainer/LandingContainer";
import HomeBanner from "../../components/LandingBanners/HomeBanner";

import ProjectListContainer from "../../containers/ProjectListContainer/ProjectListContainer";

import homeLandingImage from "../../assets/images/landings/tot.png"

const Home = () => {
  return (
    <div>
      <RootBannerContainer>
        <LandingContainer
          logoVariant="dark"
          starVariant="dark"
          style={{ zIndex: 2 }}
        >
          <HomeBanner />
        </LandingContainer>

        <ProjectListContainer />
      </RootBannerContainer>
      {/* rest of page content here... */}
    </div>
  );
}

export default Home;
