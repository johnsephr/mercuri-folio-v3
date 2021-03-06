import React, { useState } from "react";
import { isMobile } from 'react-device-detect';
import { useMediaPredicate } from "react-media-hook";

// react icons
import { FaInstagram, FaLinkedin, FaBehance } from 'react-icons/fa';

// star icon
import starDark from '../assets/icons/star/darkstar.svg';

const Footer = props => {
    const { about } = props;
    const [hoverIG, setHoverIG] = useState(false);
    const [hoverLI, setHoverLI] = useState(false);
    const [hoverBH, setHoverBH] = useState(false);
    const smallerThan525 = useMediaPredicate("(max-width: 525px)");

    return (
        <div className={`${about && !smallerThan525 ? 'absolute bottom-0' : about && smallerThan525 ? 'mt-auto' : ''} bg-footer-grey text-footer-icon-grey h-36 w-screen flex flex-col`}>
            {/* links/icons */}
            <div className="flex justify-between inline-block mx-auto my-6">
                {/* instagram */}
                <a
                    href='https://www.instagram.com/dewdrenched/?utm_medium=copy_link'
                    target="_blank"
                    rel="noreferrer"
                    className={`text-3xl ${hoverIG ? 'text-footer-icon-grey-hover' : ''}`}
                    onMouseEnter={() => setHoverIG(true)}
                    onMouseLeave={() => setHoverIG(false)}
                >
                    <FaInstagram />
                </a>
                {/* linkedin */}
                <a
                    href='https://www.linkedin.com/in/michelle-gorski-78a5b9179/'
                    target="_blank"
                    rel="noreferrer"
                    className={`${isMobile ? 'px-16' : 'px-8'} text-3xl ${hoverLI ? 'text-footer-icon-grey-hover' : ''}`}
                    onMouseEnter={() => setHoverLI(true)}
                    onMouseLeave={() => setHoverLI(false)}
                >
                    <FaLinkedin />
                </a>
                {/* behance */}
                <a
                    href='https://www.behance.net/mchllgorski'
                    target="_blank"
                    rel="noreferrer"
                    className={`text-3xl ${hoverBH ? 'text-footer-icon-grey-hover' : ''}`}
                    onMouseEnter={() => setHoverBH(true)}
                    onMouseLeave={() => setHoverBH(false)}
                >
                    <FaBehance />
                </a>
            </div>
            {/* star */}
            <div className="flex justify-center h-8"><img src={starDark} alt='Northern star icon' /></div>
        </div>
    );
}

export default Footer;
