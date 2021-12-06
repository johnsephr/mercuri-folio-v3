import React from "react";

// file imports
import RootBannerContainer from "../../containers/RootBannerContainer";
import LandingContainer from "../../containers/LandingContainer/LandingContainer";
import ToTBanner from "../../components/LandingBanners/ToTBanner";

const ToT = () => {
  return (
    <div>
      <RootBannerContainer tot={true}>
        <LandingContainer
          logoVariant="dark"
          starVariant="dark"
        >
          <ToTBanner />
        </LandingContainer>
      </RootBannerContainer>

        {/* page content */}

        <p>
          Tunnel of Trees describes their existence as, “a music blog dedicated to taking music and turning it into a serious
          conversation about creation, expression, and authenticity.” While working with them over the course of a few months,
          I can gladly attest to their sentiment being authentic.

          We worked together to rebrand the new visions they were bringing to their comeback from a few year hiatus.
          Taking inspiration from the team members of ToT and the song that inspired the blog name, “Tunnel Of Trees”
          by Deafhaven; we renewed the presence of the music blog incorporating the unique characteristics from each angle into
          the bold new era and visual edge.
        </p>
    </div>
  );
}

export default ToT;
