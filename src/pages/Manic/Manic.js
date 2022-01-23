import React from "react";

// file imports
import RootBannerContainer from "../../containers/RootBannerContainer";
import LandingContainer from "../../containers/LandingContainer/LandingContainer";
import ManicBanner from "../../components/LandingBanners/ManicBanner";
import ManicListContainer from "../../containers/ManicListContainer/ManicListContainer";

const Manic = () => {
  return (
    <div>
         <RootBannerContainer manic={true}>
          <LandingContainer
            logoVariant="dark"
            starVariant="dark"
          >
            <ManicBanner />
          </LandingContainer>
        </RootBannerContainer>

        {/* page content */}
        <div style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: '5rem',
        paddingBottom: '5rem',
        maxWidth: '1050px'
      }}>
        
        <ManicListContainer />

      </div>
    </div>
  );
}

export default Manic;
