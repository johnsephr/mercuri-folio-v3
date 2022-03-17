import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useMediaPredicate } from "react-media-hook";

// file imports
import ArrowIcon from '../../components/ArrowIcon';

// custom logo
import customLogoDark from '../../assets/icons/logo (63x111)/Logo-Dark.svg';
import customLogoLight from '../../assets/icons/logo (63x111)/Logo-Light.svg';

// star icon
import starDark from '../../assets/icons/star/darkstar.svg'
import starLight from '../../assets/icons/star/lightstar.svg'

const LandingContainer = props => {
    const { logoVariant, starVariant, arrowVariant, aboutPage, homePage } = props;
    const smallerThan617 = useMediaPredicate("(max-width: 617px)");

    return (
        <div className={`flex flex-col ${aboutPage ? '' : 'h-screen'} root-paddings`}>
            {/* navbar */}
            <div className='w-full flex justify-between pt-8'>
                {/* logo */}
                <Link to='/'>
                    <img
                        src={logoVariant === 'dark' ? customLogoDark : customLogoLight}
                        alt="Michelle Gorski's custom logo"
                        style={smallerThan617 ? { height: '5rem' } : {}}
                    />
                </Link>
                {/* star */}
                {!homePage ? <Fragment /> : <Fragment>
                    <img
                        src={starVariant === 'dark' ? starDark : starLight}
                        alt='Northern star icon'
                        style={smallerThan617 ? { height: '2rem', margin: 'auto' } : { margin: 'auto' }}
                    />
                    {/* about link */}
                    <div className='flex items-center'><Link className='text-xl' style={logoVariant === 'light' ? { color: '#fff' } : {}} to='/about'>About</Link></div>
                </Fragment>}
            </div>

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
