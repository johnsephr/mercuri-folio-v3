import React from "react";

// file imports
import RootBannerContainer from "../../containers/RootBannerContainer";
import LandingContainer from "../../containers/LandingContainer/LandingContainer";
import LynkBanner from "../../components/LandingBanners/LynkBanner";

const Lynk = () => {
  return (
    <div>
      <RootBannerContainer>
        <LandingContainer
          logoVariant="light"
          starVariant="light"
        >
          <LynkBanner />
        </LandingContainer>

      {/* page content */}

      <p>
        ‘LYNK’ was created to be an imaginary visual and marketing creative agency.
        Specializing web/mobile design and development. Providing anything needed to successfully build
        and run a brand with, including: content writing, advertising analytics, SEO services. A company
        that prides itself on not only understanding the company they work with, but the people within it to
        contribute to the whole image produced.

        A design/brand guideline was created to fully flesh out the company idea besides a mock website.
      </p>
      </RootBannerContainer>
    </div>
  );
}

export default Lynk;

