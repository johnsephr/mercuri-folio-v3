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
                    transform: 'rotate(270deg)'
                } : prev ? {
                    transform: 'rotate(90deg)'
                } : {
                    transform: 'rotate(0deg)'
                }}
                alt='Arrow Icon'
            />
        </Fragment>
    );
}

export default ArrowIcon;
