import React from "react";


const SideBySide = props => {
  return (
    <div className="relative" style={{
        height: '50vh'
    }}>
        <img src={props.imageL} alt="custom selection" className="absolute left-0 h-full" />
        <img src={props.imageR} alt="custom selection" className="absolute right-0 h-full" />
    </div>
  );
}

export default SideBySide;
