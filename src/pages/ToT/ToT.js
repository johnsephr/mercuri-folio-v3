import React from "react";
import { useMediaPredicate } from "react-media-hook";

// file imports
import RootBannerContainer from "../../containers/RootBannerContainer";
import LandingContainer from "../../containers/LandingContainer/LandingContainer";
import ToTBanner from "../../components/LandingBanners/ToTBanner";
import OverlapRL from "../../containers/ImageContainer/OverlapRL";
import SideBySide from "../../containers/ImageContainer/SideBySide";
import FooterNav from "../../components/FooterNav";

// img imports
import loFiIcons from "../../assets/images/ToT/lofi-icons.jpg";
import hiFiIcons from "../../assets/images/ToT/hifi-icons.jpg";
import socialPost from "../../assets/images/ToT/previewsocialpost.jpg";
import previewInsta from "../../assets/images/ToT/preview-insta.jpeg";

// image data payload
const dataOverlapRL = {
  imageL: {
    image: loFiIcons,
    subtext: 'initial sketch'
  },
  imageR: {
    image: hiFiIcons,
    subtext: 'lookbook'
  }
}

const dataSideBySide = {
  imageL: {
    image: socialPost,
    subtext: 'see post here',
    link: 'https://www.instagram.com/p/CN23l-onL5F/?utm_medium=share_sheet'
  },
  imageR: {
    image: previewInsta,
    subtext: 'see instagram here',
    link: 'https://www.instagram.com/treetunnels/'
  }
}

const ToT = props => {
  const { data } = props;
  const { next, nextText } = data;
  const smallerThan515 = useMediaPredicate("(max-width: 515px)");
  const smallerThan680 = useMediaPredicate("(max-width: 680px)");
  const smallerThan1200 = useMediaPredicate("(max-width: 1200px)");
  return (
    <div>
      <RootBannerContainer tot={true}>
        <LandingContainer
          logoVariant="dark"
          starVariant="dark"
          arrowVariant="light"
        >
          <ToTBanner />
        </LandingContainer>
      </RootBannerContainer>

      {/* page content */}
      <div style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: smallerThan680 ? '6rem 3rem' : '6rem',
        maxWidth: '1050px'
      }}>

        {/* lookbook img */}
        <div style={smallerThan680 ? { width: '100%' } : { height: '50vh' }}>
          <img src={hiFiIcons} className={`${smallerThan680 ? 'w-full' : 'h-full'} mx-auto`} />
          <p className="italic text-center text-image-subtext mt-3">lookbook</p>
        </div>

        <p style={{ margin: '5rem 0' }}>
          <span className="font-bold"><a href="https://tunneloftrees.co/" target="_blank" rel="noreferrer">Tunnel of Trees</a></span> describes their existence as, <span className="italic">“a music blog dedicated to taking music and turning it into a serious
            conversation about creation, expression, and authenticity.” </span>While working with them over the course of a few months, I can gladly attest to their sentiment being authentic.<br />
          <br />
          We worked together to rebrand the new visions they were bringing to their comeback from a few year hiatus.
          Taking inspiration from the team members of ToT and the song that inspired the blog name, <span className="italic">“Tunnel Of Trees” </span>
          by Deafhaven; we renewed the presence of the music blog incorporating the unique characteristics from each angle into
          the bold new era and visual edge.
        </p>

        {smallerThan1200 ? <div>
          <div className="mb-24" style={smallerThan515 ? { height: '30vh' } : { height: '50vh' }}>
            <img src={dataSideBySide.imageR.image} className={`${smallerThan515 ? 'h-full' : 'h-full'} mx-auto`} />
            <p className="italic text-center text-image-subtext mt-3"><a className="underline" href={dataSideBySide.imageR.link}>{dataSideBySide.imageR.subtext}</a></p>
          </div>
          <div style={smallerThan515 ? { height: '30vh' } : { height: '50vh' }}>
            <img src={dataSideBySide.imageL.image} className={`${smallerThan515 ? 'h-full' : 'h-full'} mx-auto`} />
            <p className="italic text-center text-image-subtext mt-3"><a className="underline" href={dataSideBySide.imageL.link}>{dataSideBySide.imageL.subtext}</a></p>
          </div>
        </div> : <SideBySide data={dataSideBySide} links />}

      </div>

      {/* FooterNav */}
      <FooterNav
        next={next}
        nextText={nextText}
        dark
      />
    </div>
  );
}

export default ToT;
