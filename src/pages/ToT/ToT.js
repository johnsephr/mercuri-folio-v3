import React from "react";

// file imports
import RootContainer from "../../containers/RootContainer";
import LandingContainer from "../../containers/LandingContainer/LandingContainer";
import ToTBanner from "../../components/LandingBanners/ToTBanner";

const ToT = () => {
  return (
    <div>
      <RootContainer>
        <LandingContainer
          logoVariant="dark"
          starVariant="dark"
        >
          <ToTBanner />
        </LandingContainer>
      </RootContainer>
    </div>
  );
}

export default ToT;
