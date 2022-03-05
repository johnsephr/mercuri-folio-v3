import React from "react";

// file imports
import RootBannerContainer from "../../containers/RootBannerContainer";
import LandingContainer from "../../containers/LandingContainer/LandingContainer";
import ForgiveBanner from "../../components/LandingBanners/ForgiveBanner";
import ForgiveListContainer from "../../containers/ForgiveListContainer/ForgiveListContainer";
import FooterNav from "../../components/FooterNav";

const Forgive = props => {
  const { next, prev } = props;
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

      {/* page content} */}
      <div style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '4rem 0',
        maxWidth: '1050px'
      }}>
        <ForgiveListContainer />
      </div>

      {/* FooterNav */}
      <FooterNav next={next} prev={prev} />
    </div>
  );
}

export default Forgive;
