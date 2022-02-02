import React from "react";

// file imports
import RootBannerContainer from "../../containers/RootBannerContainer";
import LandingContainer from "../../containers/LandingContainer/LandingContainer";

import aboutImg from '../../assets/images/aboutimage.jpg'

const About = () => {
  return (
    <div>
      <RootBannerContainer>
        <LandingContainer
          logoVariant="dark"
          starVariant="dark"
        >
          {/* page content */}
          <div className='flex justify-center items-center w-full h-full'>
            <div className='flex' style={{
              width: '80%',
              height: '80%',
              borderTop: '1px solid #333',
              borderBottom: '1px solid #333',
              paddingTop: '25px',
              paddingBottom: '25px',
            }}>
                <img className='w-1/2' src={aboutImg} />
              <div className='w-1/2 p-8'>lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum</div>
            </div>
          </div>

        </LandingContainer>
      </RootBannerContainer>
    </div>
  );
}

export default About;
