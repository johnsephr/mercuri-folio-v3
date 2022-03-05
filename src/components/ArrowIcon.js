import React, { Fragment } from "react";

// icons
import darkArrow from '../assets/icons/arrow/darkarrow.svg';
import lightArrow from '../assets/icons/arrow/lightarrow.svg';

const ArrowIcon = props => {
    const { next, prev, dark } = props;
    return (
        <Fragment>
            <img
                className="inline-block"
                src={dark ? darkArrow : lightArrow}
                style={next ? {
                    transform: 'rotate(270deg)',
                    height: '3rem'
                } : prev ? {
                    transform: 'rotate(90deg)',
                    height: '3rem'
                } : {
                    transform: 'rotate(0deg)',
                    height: '3rem',
                    position: 'absolute',
                    left: '5vw',
                    bottom: '5vw',
                }}
                alt='Arrow Icon'
            />
        </Fragment>
    );
}

export default ArrowIcon;
