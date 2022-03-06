import React from "react";

const LynkBanner = () => {
  return (
    <div className="h-full w-full grid pt-12">
      <div className="row-span-1" />
      <h1 className="text-5xl px-24 text-left row-span-2 mt-3" style={{color: 'white'}}>
      <p className="text-xl text-left w-full italic pb-5" style={{color: 'white'}}>Concept Development</p>
      <span className="font-bold">'Lynk'</span> is a branding concept of an<br />
        imaginary design studio in which their<br />
        personality is represented visually through<br />
        color.
      </h1>
    </div>
  );
}

export default LynkBanner;
