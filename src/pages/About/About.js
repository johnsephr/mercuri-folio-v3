import React from "react";

// file imports
import RootBannerContainer from "../../containers/RootBannerContainer";
import LandingContainer from "../../containers/LandingContainer/LandingContainer";
import Modal from '../../components/Modal';

// images
import aboutImg from '../../assets/images/aboutimage.jpg'

const About = () => {
  return (
    <div>
      <RootBannerContainer>
        <LandingContainer
          logoVariant="dark"
          starVariant="dark"
          aboutPage
        >
          {/* page content */}
          <div className='flex justify-center items-center w-full h-full pt-10'>
            <div style={{
              width: '60%',
            }}>
              <div className='flex py-5' style={{
                borderTop: '1px solid #333',
                borderBottom: '1px solid #333',
              }}>
                <img className='w-1/2' src={aboutImg} alt="michelle" />
                <div className='w-1/2 pl-8 flex justify-between flex-col'>
                  <p className='italic text-xl'>About</p>
                  <p className='text-2xl'>Hello, I'm Michelle.</p>
                  <p className='text-2xl'>
                    I'm a <span className='italic'>creative storyteller</span> that aims <br />
                    to <span className='italic'>empathize</span> and <span className='italic font-bold'>problem solve <br />
                      visually.</span>
                  </p>
                  <p className='text-2xl'>
                    With over three years of experience <br />
                    that spreads across brand identity, <br />
                    visual communication, and <br />
                    UI/UX.
                  </p>
                </div>
              </div>
              {/* button here */}
              <Modal />
            </div>
          </div>
        </LandingContainer>
      </RootBannerContainer>
    </div>
  );
}

export default About;
