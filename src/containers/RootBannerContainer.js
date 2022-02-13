import React from "react";

const RootBannerContainer = props => {
  const { tot, lynk, manic, forgive } = props;
  return (
    <div className={tot ? 'bg-landing-tot'
      : lynk ? 'bg-landing-lynk'
        : manic ? 'bg-landing-manic'
          : forgive ? 'bg-landing-forgive'
            : ''}
      style={tot ? {
        paddingLeft: '5vw',
        paddingRight: '5vw',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundSize: '105% 105%'
      } : {
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
