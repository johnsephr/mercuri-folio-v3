import React from "react";
import { useMediaPredicate } from "react-media-hook";

// file imports
import RootBannerContainer from "../../containers/RootBannerContainer";
import LandingContainer from "../../containers/LandingContainer/LandingContainer";
import LynkBanner from "../../components/LandingBanners/LynkBanner";
import FooterNav from "../../components/FooterNav";

// imgs
import lynk_sketch from '../../assets/images/lynk/lynk_sketch.jpg'
import lynk_laptop from '../../assets/images/lynk/lynk_laptop.png'
import lynk_guide from '../../assets/images/lynk/lynk_guide.png'
import lynk_landing_draft from '../../assets/images/lynk/lynk_landing_draft.jpg'

// image data payload
const dataOverlapRL = {
  imageL: {
    image: lynk_sketch,
    subtext: 'initial sketch'
  },
  imageR: {
    image: lynk_guide,
    subtext: 'guidelines'
  }
}

const dataOverlapLR = {
  imageL: {
    image: lynk_laptop,
    subtext: 'prototype'
  },
  imageR: {
    image: lynk_landing_draft,
    subtext: 'landing draft'
  }
}


const Lynk = props => {
  const { data } = props;
  const { next, prev, nextText, prevText } = data;
  const smallerThan925 = useMediaPredicate("(max-width: 925px)");
  const smallerThan680 = useMediaPredicate("(max-width: 680px)");
  const smallerThan550 = useMediaPredicate("(max-width: 550px)");

  return (
    <div>
      <RootBannerContainer lynk={true}>
        <LandingContainer
          logoVariant="dark"
          starVariant="dark"
          arrowVariant="dark"
        >
          <LynkBanner />
        </LandingContainer>
      </RootBannerContainer>

      {/* page content */}
      <div style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: smallerThan550 ? '3rem' : '6rem',
        maxWidth: '1050px'
      }}>

        {/* lynk guide img */}
        <div style={smallerThan680 ? { width: '100%' } : { height: '50vh' }}>
          <img src={lynk_guide} className={`${smallerThan680 ? 'w-full' : 'h-full'} mx-auto`} />
          <p className="italic text-center text-image-subtext mt-3">guidelines</p>
        </div>

        <p style={{ margin: '5rem 0' }}>
          ‘LYNK’ was created to be an imaginary visual and marketing creative agency.
          Specializing web/mobile design and development. Providing anything needed to successfully build
          and run a brand with, including: content writing, advertising analytics, SEO services. A company
          that prides itself on not only understanding the company they work with, but the people within it to
          contribute to the whole image produced.

          A design/brand guideline was created to fully flesh out the company idea besides a mock website.
        </p>

        {/* lynk landing draft img */}
        <div style={smallerThan925 ? { width: '100%' } : { height: '50vh' }}>
          <img src={lynk_landing_draft} className={`${smallerThan680 ? 'w-full' : 'h-full'} mx-auto`} />
          <p className="italic text-center text-image-subtext mt-3">landing draft</p>
        </div>
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

export default Lynk;

