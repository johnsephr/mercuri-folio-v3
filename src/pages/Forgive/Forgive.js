import React from "react";

// file imports
import RootContainer from "../../containers/RootContainer";
import LandingContainer from "../../containers/LandingContainer/LandingContainer";
import ForgiveBanner from "../../components/LandingBanners/ForgiveBanner";

const Forgive = () => {
  return (
    <div>
        <RootContainer>
          <LandingContainer
            logoVariant="dark"
            starVariant="dark"
          >
            <ForgiveBanner />
          </LandingContainer>

          
        </RootContainer>
    </div>
  );
}

export default Forgive;
