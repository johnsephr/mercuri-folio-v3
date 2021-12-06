import React from "react";

// file imports
import RootContainer from "../../containers/RootContainer";
import LandingContainer from "../../containers/LandingContainer/LandingContainer";
import LynkBanner from "../../components/LandingBanners/LynkBanner";

const Lynk = () => {
  return (
    <div>
         <RootContainer>
          <LandingContainer
            logoVariant="light"
            starVariant="light"
          >
            <LynkBanner />
          </LandingContainer>
        </RootContainer>
    </div>
  );
}

export default Lynk;

