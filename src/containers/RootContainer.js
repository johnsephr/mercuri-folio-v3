import React from "react";

const RootContainer = props => {
  return (
    <div style={{ marginLeft: '5vw', marginRight: '5vw' }}>
        {props.children}
    </div>
  );
}

export default RootContainer;
