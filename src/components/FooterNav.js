import React, { Fragment } from "react";

// 3rd party imports
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const FooterNav = props => {
    const { next, prev } = props;
    return (
        <div className="h-40 w-screen flex">
            {prev ? <div className="absolute left-0">
                <Link to={prev}>
                    <FaArrowLeft />
                </Link>
            </div> : <Fragment />}

            {next ? <div className="absolute right-0">
                <Link to={next}>
                    <FaArrowRight />
                </Link>
            </div> : <Fragment />}
        </div>
    );
}

export default FooterNav;
