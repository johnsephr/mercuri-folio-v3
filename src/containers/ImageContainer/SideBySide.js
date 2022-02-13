import React from "react";


const SideBySide = props => {
  return (
    <div className="relative" style={{
        height: '50vh'
    }}>
        <img src={props.imageL} className="absolute left-0 h-full" />
        <img src={props.imageR} className="absolute right-0 h-full" />
    </div>
  );
}

export default SideBySide;
