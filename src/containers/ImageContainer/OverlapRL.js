import React from "react";


const OverlapRL = props => {
  return (
    <div
      className="relative"
      style={{
        height: '75vh'
      }}
    >
      <img src={props.imageL} className="absolute left-0 top-0 z-0 h-2/3" />
      <img src={props.imageR} className="absolute right-0 bottom-0 z-10 h-2/3" />
    </div>
  );
}

export default OverlapRL;
