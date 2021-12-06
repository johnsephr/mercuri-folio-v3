import React from "react";

// file imports
import RootContainer from "../../containers/RootContainer";
import LandingContainer from "../../containers/LandingContainer/LandingContainer";
import ManicBanner from "../../components/LandingBanners/ManicBanner";

const Manic = () => {
  return (
    <div>
         <RootContainer>
          <LandingContainer
            logoVariant="dark"
            starVariant="dark"
          >
            <ManicBanner />
          </LandingContainer>

          
        </RootContainer>
    </div>
  );
}

export default Manic;
