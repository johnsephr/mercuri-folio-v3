import React from "react";


const OverlapLR = props => {
  return (
    <div className="relative h-screen">
        <img src={props.imageL} className="absolute left-0 bottom-0 z-10 h-2/3" />
        <img src={props.imageR} className="absolute right-0 top-0 z-0 h-2/3" />
    </div>
  );
}

export default OverlapLR;
