import React from "react";

// file imports
import RootBannerContainer from "../../containers/RootBannerContainer";
import LandingContainer from "../../containers/LandingContainer/LandingContainer";
import ManicBanner from "../../components/LandingBanners/ManicBanner";
import ManicListContainer from "../../containers/ManicListContainer/ManicListContainer";
import FooterNav from "../../components/FooterNav";

const Manic = props => {
    const { next, prev } = props;
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
        padding: '4rem 0',
        maxWidth: '1050px'
      }}>
        <ManicListContainer />
      </div>

      {/* FooterNav */}
      <FooterNav prev={prev} />
    </div>
  );
}

export default Manic;
