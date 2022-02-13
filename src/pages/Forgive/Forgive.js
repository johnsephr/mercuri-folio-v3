import React from "react";

// file imports
import RootBannerContainer from "../../containers/RootBannerContainer";
import LandingContainer from "../../containers/LandingContainer/LandingContainer";
import ForgiveBanner from "../../components/LandingBanners/ForgiveBanner";

import ForgiveListContainer from "../../containers/ForgiveListContainer/ForgiveListContainer";

const Forgive = () => {
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
    </div>
  );
}

export default Forgive;
