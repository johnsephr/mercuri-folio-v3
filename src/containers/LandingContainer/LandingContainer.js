import React from 'react';
import { Link } from 'react-router-dom';

// custom logo
import customLogoDark from '../../assets/icons/logo (63x111)/Logo-Dark.svg';
import customLogoLight from '../../assets/icons/logo (63x111)/Logo-Light.svg';

// star icon
import starDark from '../../assets/icons/star/darkstar.svg'
import starLight from '../../assets/icons/star/lightstar.svg'

const LandingContainer = props => {
    const { logoVariant, starVariant, aboutPage } = props;
    return (
        <div className='flex flex-col h-screen root-paddings'>
            {/* navbar */}
            <div className='w-full flex justify-between pt-8'>
                {/* logo */}
                <Link to='/'>
                    <img
                        // className='pl-12'
                        src={logoVariant === 'dark' ? customLogoDark : customLogoLight}
                        alt="Michelle Gorski's custom logo"
                    />
                </Link>
                {/* star */}
                <img
                    // className=''
                    src={starVariant === 'dark' ? starDark : starLight}
                    alt='Northern star icon'
                />
                {/* about link */}
                <div className='flex items-center'><Link className='text-xl' style={logoVariant === 'light' ? { color: '#fff' } : {}} to='/about'>About</Link></div>
            </div>

            {/* landing banner */}
            <div className={aboutPage ? 'flex' : 'h-5/6 flex'}>
                {props.children}
            </div>
        </div>
    );
}

export default LandingContainer;
