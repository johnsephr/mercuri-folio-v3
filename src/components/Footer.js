import React from "react";

// react icons
import { FaInstagram, FaLinkedin, FaBehance } from 'react-icons/fa';

// star icon
import starDark from '../assets/icons/star/darkstar.svg';

const Footer = () => {
    return (
        <div className="bg-footer-grey text-footer-icon-grey h-40 absolute bottom-0 w-screen flex flex-col">
            {/* links/icons */}
            <div className="flex justify-between inline-block mx-auto my-6">
                {/* instagram */}
                <a target="_blank" href='https://www.instagram.com/dewdrenched/?utm_medium=copy_link' className="text-3xl">
                    <FaInstagram />
                </a>
                {/* linkedin */}
                <a target="_blank" href='https://www.linkedin.com/in/michelle-gorski-78a5b9179/' className="px-8 text-3xl">
                    <FaLinkedin />
                </a>
                {/* behance */}
                <a target="_blank" href='https://www.behance.net/mchllgorski' className="text-3xl">
                    <FaBehance />
                </a>
            </div>
            {/* star */}
            <div className="flex justify-center h-8"><img src={starDark} alt='Northern star icon' /></div>
        </div>
    );
}

export default Footer;
