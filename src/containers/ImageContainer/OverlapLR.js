import React from "react";


const OverlapLR = props => {
  const { data, lynkHorizontal } = props;
  const { imageL, imageR } = data;
  return (
    <div className="relative" style={lynkHorizontal ? { height: '60vh'} : { height: '75vh' }}>
      <div className="absolute left-0 bottom-0 z-10 h-2/3">
        <img src={imageL.image} alt="custom selection" className="h-full" />
        <p className="italic text-center text-image-subtext mt-3">{imageL.subtext}</p>
      </div>
      <div className="absolute right-0 top-0 z-0 h-2/3">
        <img src={imageR.image} alt="custom selection" className="h-full" />
        <p className="italic text-center text-image-subtext mt-3">{imageR.subtext}</p>
      </div>
    </div>
  );
}

export default OverlapLR;
