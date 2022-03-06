import React from "react";

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

const ToT = props => {
  const { data } = props;
  const { next, nextText } = data;
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
        padding: '8rem',
        maxWidth: '1050px'
      }}>
        <OverlapRL imageL={loFiIcons} imageR={hiFiIcons} />

        <p style={{ margin: '5rem 0' }}>
          <span className="font-bold"><a href="https://tunneloftrees.co/" target="_blank" rel="noreferrer">Tunnel of Trees</a></span> describes their existence as, <span className="italic">“a music blog dedicated to taking music and turning it into a serious
            conversation about creation, expression, and authenticity.”</span> While working with them over the course of a few months,
          I can gladly attest to their sentiment being authentic.<br />
          <br />
          We worked together to rebrand the new visions they were bringing to their comeback from a few year hiatus.
          Taking inspiration from the team members of ToT and the song that inspired the blog name, <span className="italic">“Tunnel Of Trees”</span>
          by Deafhaven; we renewed the presence of the music blog incorporating the unique characteristics from each angle into
          the bold new era and visual edge.
        </p>

        <SideBySide imageL={socialPost} imageR={previewInsta} />
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
