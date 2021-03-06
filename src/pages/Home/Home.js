import React from "react";

// file imports
import RootBannerContainer from "../../containers/RootBannerContainer";
import LandingContainer from "../../containers/LandingContainer/LandingContainer";
import HomeBanner from "../../components/LandingBanners/HomeBanner";

import ProjectListContainer from "../../containers/ProjectListContainer/ProjectListContainer";

const Home = () => {
  return (
    <div>
      <RootBannerContainer>
        <LandingContainer
          logoVariant="dark"
          starVariant="dark"
          arrowVariant="dark"
          style={{ zIndex: 2 }}
          homePage
        >
          <HomeBanner />
        </LandingContainer>

        <ProjectListContainer />
      </RootBannerContainer>
    </div>
  );
}

export default Home;
