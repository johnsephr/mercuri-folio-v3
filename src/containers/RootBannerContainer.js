import React from "react";

const RootBannerContainer = props => {
  const { tot, lynk, manic, forgive } = props;
  return (
    <div className={tot ? 'bg-landing-tot'
      : lynk ? 'bg-landing-lynk'
        : manic ? 'bg-landing-manic'
          : forgive ? 'bg-landing-forgive'
            : ''}
      style={{
        paddingLeft: '5vw',
        paddingRight: '5vw',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
      {props.children}
    </div>
  );
}

export default RootBannerContainer;
