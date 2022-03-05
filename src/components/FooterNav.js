import React, { Fragment } from "react";

// 3rd party imports
import { Link } from 'react-router-dom';

// file imports
import ArrowIcon from "./ArrowIcon";

const FooterNav = props => {
    const { next, prev, dark, nextText, prevText } = props;
    return (
        <div className="h-40 flex flex-row space-between mr-auto ml-auto px-10" style={{maxWidth: '1050px'}}>
            {prev ? <div className="mr-auto">
                <Link to={prev}>
                    <ArrowIcon prev='true' dark={dark ? true : false} />
                    <p className="inline-block pl-10 text-2xl">{prevText}</p>
                </Link>
            </div> : <Fragment />}

            {next ? <div className="ml-auto">
                <Link to={next}>
                    <p className="inline-block pr-10 text-2xl">{nextText}</p>
                    <ArrowIcon next='true' dark={dark ? true : false} />
                </Link>
            </div> : <Fragment />}
        </div>
    );
}

export default FooterNav;
