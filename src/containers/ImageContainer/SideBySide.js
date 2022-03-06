import React from "react";


const SideBySide = props => {
  const { data } = props;
  const { imageL, imageR } = data;
  return (
    <div className="relative" style={{ height: '50vh' }}>
      <div className="absolute left-0 h-full">
        <img src={imageL.image} alt="custom selection" className="h-full" />
        <p className="italic text-center text-image-subtext mt-3">{imageL.subtext}</p>
      </div>
      <div className="absolute right-0 h-full">
        <img src={imageR.image} alt="custom selection" className="h-full" />
        <p className="italic text-center text-image-subtext mt-3">{imageR.subtext}</p>
      </div>
    </div>
  );
}

export default SideBySide;
