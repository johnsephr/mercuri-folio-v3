import React from "react";

// file imports
import RootBannerContainer from "../../containers/RootBannerContainer";
import LandingContainer from "../../containers/LandingContainer/LandingContainer";
import ForgiveBanner from "../../components/LandingBanners/ForgiveBanner";

const Forgive = () => {
  return (
    <div>
        <RootBannerContainer forgive={true}>
          <LandingContainer
            logoVariant="dark"
            starVariant="dark"
          >
            <ForgiveBanner />
          </LandingContainer>
        </RootBannerContainer>
    </div>
  );
}

export default Forgive;
