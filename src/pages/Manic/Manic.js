import React from "react";
import { useMediaPredicate } from "react-media-hook";

// file imports
import RootBannerContainer from "../../containers/RootBannerContainer";
import LandingContainer from "../../containers/LandingContainer/LandingContainer";
import ManicBanner from "../../components/LandingBanners/ManicBanner";
import ManicListContainer from "../../containers/ManicListContainer/ManicListContainer";
import FooterNav from "../../components/FooterNav";

const Manic = props => {
  const { data } = props;
  const { prev, prevText } = data;
  const smallerThan550 = useMediaPredicate("(max-width: 550px)");
  return (
    <div>
      <RootBannerContainer manic={true}>
        <LandingContainer
          logoVariant="dark"
          starVariant="dark"
          arrowVariant="dark"
        >
          <ManicBanner />
        </LandingContainer>
      </RootBannerContainer>

      {/* page content */}
      <div style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: smallerThan550 ? '3rem' : '6rem',
        maxWidth: '1050px'
      }}>
        <ManicListContainer />
      </div>

      {/* FooterNav */}
      <FooterNav
        prev={prev}
        prevText={prevText}
        dark
      />
    </div>
  );
}

export default Manic;
