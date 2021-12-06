import React from "react";

// file imports
import RootBannerContainer from "../../containers/RootBannerContainer";
import LandingContainer from "../../containers/LandingContainer/LandingContainer";
import ManicBanner from "../../components/LandingBanners/ManicBanner";

const Manic = () => {
  return (
    <div>
         <RootBannerContainer>
          <LandingContainer
            logoVariant="dark"
            starVariant="dark"
          >
            <ManicBanner />
          </LandingContainer>
        </RootBannerContainer>
    </div>
  );
}

export default Manic;
