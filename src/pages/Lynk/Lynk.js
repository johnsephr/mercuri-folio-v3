import React from "react";

// file imports
import RootBannerContainer from "../../containers/RootBannerContainer";
import LandingContainer from "../../containers/LandingContainer/LandingContainer";
import LynkBanner from "../../components/LandingBanners/LynkBanner";
import OverlapRL from "../../containers/ImageContainer/OverlapRL";
import OverlapLR from "../../containers/ImageContainer/OverlapLR";

// imgs
import lynk_sketch from '../../assets/images/lynk/lynk_sketch.jpg'
import lynk_laptop from '../../assets/images/lynk/lynk_laptop.png'
import lynk_guide from '../../assets/images/lynk/lynk_guide.jpg'
import lynk_banner from '../../assets/images/landings/lynk.jpg'

const Lynk = () => {
  return (
    <div>
      <RootBannerContainer lynk={true}>
        <LandingContainer
          logoVariant="light"
          starVariant="light"
        >
          <LynkBanner />
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

      <OverlapRL imageL={lynk_sketch} imageR={lynk_guide} />

        <p>
          ‘LYNK’ was created to be an imaginary visual and marketing creative agency.
          Specializing web/mobile design and development. Providing anything needed to successfully build
          and run a brand with, including: content writing, advertising analytics, SEO services. A company
          that prides itself on not only understanding the company they work with, but the people within it to
          contribute to the whole image produced.

          A design/brand guideline was created to fully flesh out the company idea besides a mock website.
        </p>

        <OverlapLR imageL={lynk_laptop} imageR={lynk_banner} />
      </div>
    </div>
  );
}

export default Lynk;

