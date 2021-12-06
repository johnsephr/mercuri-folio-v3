import React from "react";

import tot from '../assets/images/landings/tot.png'

const RootBannerContainer = props => {
  return (

    <div className={props.tot ? 'bg-landing-tot'
      : props.lynk ? 'bg-landing-lynk'
        : props.manic ? 'bg-landing-manic'
          : props.forgive ? 'bg-landing-forgive'
            : ''}
      style={{
        paddingLeft: '5vw',
        paddingRight: '5vw',
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
      }}>
      {props.children}
    </div>
  );
}

export default RootBannerContainer;
