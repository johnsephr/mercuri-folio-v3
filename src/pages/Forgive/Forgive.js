import React from "react";

// file imports
import RootBannerContainer from "../../containers/RootBannerContainer";
import LandingContainer from "../../containers/LandingContainer/LandingContainer";
import ForgiveBanner from "../../components/LandingBanners/ForgiveBanner";
import ForgiveListContainer from "../../containers/ForgiveListContainer/ForgiveListContainer";
import FooterNav from "../../components/FooterNav";

const Forgive = props => {
  const { data } = props;
  const { next, nextText, prev, prevText } = data;
  return (
    <div>
      <RootBannerContainer forgive={true}>
        <LandingContainer
          logoVariant="dark"
          starVariant="dark"
          arrowVariant="dark"
        >
          <ForgiveBanner />
        </LandingContainer>
      </RootBannerContainer>

      {/* page content} */}
      <div style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '3rem 0',
        maxWidth: '1050px'
      }}>
        <ForgiveListContainer />
      </div>

      {/* FooterNav */}
      <FooterNav
        next={next}
        prev={prev}
        nextText={nextText}
        prevText={prevText}
        dark
      />
    </div>
  );
}

export default Forgive;
