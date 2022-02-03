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
            <div style={{
                width: '60%',
                height: '60%',
              }}>
              <div className='flex' style={{
                borderTop: '1px solid #333',
                borderBottom: '1px solid #333',
                paddingTop: '25px',
                paddingBottom: '25px',
              }}>
                <img className='w-1/2' src={aboutImg} />
                <div className='w-1/2 p-8 flex justify-between flex-col'>
                  <p className='italic'>About</p>
                  <p>Hello, I'm Michelle.</p>
                  <p>
                    I'm a <span className='italic'>creative storyteller</span> that aims <br />
                    to <span className='italic'>empathize</span> and <span className='italic font-bold'>problem solve <br />
                      visually.</span>
                  </p>
                  <p>
                    With over three years of experience <br />
                    that spreads across brand identity, <br />
                    visual communication, and <br />
                    UI/UX.
                  </p>
                </div>
              </div>
              {/* button here */}
            </div>
          </div>

        </LandingContainer>
      </RootBannerContainer>
    </div>
  );
}

export default About;
