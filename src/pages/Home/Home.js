import React from "react";

// file imports
import RootContainer from "../../containers/RootContainer";
import LandingContainer from "../../containers/LandingContainer/LandingContainer";
import HomeBanner from "../../components/LandingBanners/HomeBanner";

import ProjectListContainer from "../../containers/ProjectListContainer/ProjectListContainer";

import homeLandingImage from "../../assets/images/landings/tot.png"

const Home = () => {
  return (
    <div>
      <RootContainer>
        <LandingContainer
          logoVariant="dark"
          starVariant="dark"
          style={{ zIndex: 2 }}
        >
          <HomeBanner />
        </LandingContainer>

        {/* rest of page content here... */}
        <ProjectListContainer />
      </RootContainer>
    </div>
  );
}

export default Home;
