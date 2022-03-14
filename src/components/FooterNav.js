import React, { Fragment } from "react";
import { useMediaPredicate } from "react-media-hook";

// 3rd party imports
import { Link } from 'react-router-dom';

// file imports
import ArrowIcon from "./ArrowIcon";

const FooterNav = props => {
    const { next, prev, dark, nextText, prevText } = props;
    const smallerThan1000 = useMediaPredicate("(max-width: 1000px)");
    const smallerThan617 = useMediaPredicate("(max-width: 617px)");
    const smallerThan420 = useMediaPredicate("(max-width: 420px)");

    return (
        <div className="h-40 flex flex-row space-between mr-auto ml-auto px-10" style={{maxWidth: '1050px'}}>
            {prev ? <div className="mr-auto">
                <Link to={prev}>
                    <ArrowIcon prev='true' dark={dark ? true : false} />
                    <p className={`inline-block pl-10 ${smallerThan420 ? 'text-base' : smallerThan617 ? 'text-lg' : smallerThan1000 ? 'text-xl' : 'text-2xl'}`}>{prevText}</p>
                </Link>
            </div> : <Fragment />}

            {next ? <div className="ml-auto">
                <Link to={next}>
                    <p className={`inline-block pr-10 ${smallerThan420 ? 'text-base' : smallerThan617 ? 'text-lg' : smallerThan1000 ? 'text-xl' : 'text-2xl'}`}>{nextText}</p>
                    <ArrowIcon next='true' dark={dark ? true : false} />
                </Link>
            </div> : <Fragment />}
        </div>
    );
}

export default FooterNav;
