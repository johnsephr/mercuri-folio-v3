import React, { Fragment } from "react";
import { useMediaPredicate } from "react-media-hook";

// icons
import darkArrow from '../assets/icons/arrow/darkarrow.svg';
import lightArrow from '../assets/icons/arrow/lightarrow.svg';

const ArrowIcon = props => {
    const { next, prev, dark } = props;
    const smallerThan1000 = useMediaPredicate("(max-width: 1000px)");
    const smallerThan617 = useMediaPredicate("(max-width: 617px)");

    return (
        <Fragment>
            <img
                className="inline-block"
                src={dark ? darkArrow : lightArrow}
                style={next ? {
                    transform: 'rotate(270deg)',
                    height: smallerThan617 ? '2.25rem' : smallerThan1000 ? '2.6rem' : '3rem',
                } : prev ? {
                    transform: 'rotate(90deg)',
                    height: smallerThan617 ? '2.25rem' : smallerThan1000 ? '2.6rem' : '3rem',
                } : {
                    transform: 'rotate(0deg)',
                    height: smallerThan617 ? '2.25rem' : '3rem',
                    position: 'absolute',
                    left: '5vw',
                    bottom: '25%',
                }}
                alt='Arrow Icon'
            />
        </Fragment>
    );
}

export default ArrowIcon;
