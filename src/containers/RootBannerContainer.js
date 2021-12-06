import React from "react";

const RootBannerContainer = props => {
  return (
    // <div>
    <div style={{ paddingLeft: '5vw', paddingRight: '5vw' }}>
        {props.children}
    </div>
  );
}

export default RootBannerContainer;
