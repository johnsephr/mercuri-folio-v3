import React, { Fragment } from "react";
import { useMediaPredicate } from "react-media-hook";

// file imports
import RootBannerContainer from "../../containers/RootBannerContainer";
import LandingContainer from "../../containers/LandingContainer/LandingContainer";
// import Modal from '../../components/Modal';
import Footer from "../../components/Footer";

// images
import aboutImg from '../../assets/images/aboutimage.png'

const About = () => {
  const smallerThan1400 = useMediaPredicate("(max-width: 1400px)");
  const smallerThan1220 = useMediaPredicate("(max-width: 1220px)");
  const smallerThan1025 = useMediaPredicate("(max-width: 1025px)");
  const smallerThan880 = useMediaPredicate("(max-width: 880px)");
  const smallerThan800 = useMediaPredicate("(max-width: 800px)");
  const smallerThan745 = useMediaPredicate("(max-width: 745px)");
  const smallerThan600 = useMediaPredicate("(max-width: 600px)");
  const smallerThan525 = useMediaPredicate("(max-width: 525px)");
  const smallerThan450 = useMediaPredicate("(max-width: 450px)");
  const smallerThan380 = useMediaPredicate("(max-width: 380px)");
  const smallerThan335 = useMediaPredicate("(max-width: 335px)");
  const smallerThan315 = useMediaPredicate("(max-width: 315px)");
  const smallerThan280 = useMediaPredicate("(max-width: 280px)");

  return (
    <div className={`${smallerThan525 ? 'flex flex-col' : ''}`}>
      <RootBannerContainer>
        <LandingContainer
          logoVariant="dark"
          starVariant="dark"
          aboutPage
        >
          {/* page content */}
          <div className={`flex justify-center items-center w-full h-full pt-10 ${smallerThan525 ? 'mb-8' : ''}`}>
            <div style={smallerThan280 ? { width: '100%' } :
              smallerThan315 ? { width: '95%' } :
                smallerThan335 ? { width: '85%' } :
                  smallerThan380 ? { width: '80%' } :
                    smallerThan450 ? { width: '70%' } : { width: '60%' }}>
              <div className={`flex ${smallerThan1025 ? 'flex-col' : ''} 
              ${smallerThan525 ? 'py-4' : 'py-8'}`}
                style={{
                  borderTop: '1px solid #333',
                  borderBottom: '1px solid #333',
                }}>
                <div className={`${smallerThan1025 ? 'w-full justify-center' : 'w-1/2 pr-5'}`}>
                  <img className={`${smallerThan1025 ? 'w-1/2 mx-auto' : 'w-full'}`} src={aboutImg} alt="michelle"
                    style={smallerThan525 ? { width: '100%' } :
                      smallerThan600 ? { width: '75%' } :
                        smallerThan745 ? { width: '65%' } :
                          smallerThan800 ? { width: '60%' } :
                            smallerThan880 ? { width: '55%' } : {}} />
                </div>
                <div className={`${smallerThan450 ? 'text-base' :
                  smallerThan1220 ? 'text-md' :
                    smallerThan1400 ? 'text-xl' : 'text-2xl'} 
                ${smallerThan880 ? 'w-full' : 'w-1/2'} 
                ${smallerThan1025 ? 'text-center mx-auto' : ''}
                ${smallerThan1025 ? '' : 'pl-5'} flex justify-between flex-col`}>
                  <p className={`${smallerThan1220 ? 'text-base' : smallerThan1400 ? 'text-md' : 'text-xl'} ${smallerThan1025 ? 'my-1.5' : ''} italic`}>About</p>
                  <p className={`${smallerThan1025 ? 'my-1.5' : ''}`}>Hello, I'm Michelle.</p>
                  <p className={`${smallerThan1025 ? 'my-1.5' : ''}`}>
                    I'm a <span className='italic'>creative storyteller</span> that aims <br />
                    to <span className='italic'>empathize</span> and <span className='italic font-bold'>problem solve <br />
                      visually.</span>
                  </p>
                  <p className={`${smallerThan1025 ? 'mt-1.5' : ''}`}>
                    Over four years of experience <br />
                    spreading across brand design and <br />
                    visual communication comes a <br />
                    Figma and ProCreate <span className="italic">wizard</span>.
                  </p>
                </div>
              </div>
              {/* button here */}
              {/* <Modal /> */}
            </div>
          </div>
        </LandingContainer>
      </RootBannerContainer>
      {smallerThan525 ? <Footer about /> : <Fragment />}
    </div>
  );
}

export default About;
