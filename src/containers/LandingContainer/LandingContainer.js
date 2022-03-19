import React, { Fragment } from 'react';
import { useMediaPredicate } from "react-media-hook";

// file imports
import ArrowIcon from '../../components/ArrowIcon';
import Navbar from '../../components/Navbar';

const LandingContainer = props => {
    const { logoVariant, starVariant, arrowVariant, aboutPage, homePage } = props;

    return (
        <div className={`flex flex-col ${aboutPage ? '' : 'h-screen'} root-paddings`}>
            {/* navbar */}
           <Navbar logoVariant={logoVariant} starVariant={starVariant} homePage={homePage} />

            {/* landing banner */}
            <div className={aboutPage ? 'flex flex-col' : 'h-5/6 flex'}>
                {props.children}
            </div>

            {/* scroll arrow */}
            <ArrowIcon dark={arrowVariant === 'dark' ? true : false} className="absolute bottom-0 left-0" />
        </div>
    );
}

export default LandingContainer;
