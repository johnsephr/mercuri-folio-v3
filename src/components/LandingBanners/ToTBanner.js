import React from "react";

const ToTBanner = () => {
  return (
    <div className="h-full w-full grid pt-12">
      <div className="row-span-1 w-full" />
      <h1 className="text-5xl px-24 text-left row-span-2" style={{ color: 'white' }}>
        <div className="text-xl text-left italic pb-5" style={{ color: 'white' }}>
          <span>Creative Direction</span>
          <hr className="w-10 h-1 bg-black inline-block mx-1" />
          <span>Branding Identity</span>
          <hr className="w-10 h-1 bg-black inline-block mx-1" />
          <span>Design System</span>
        </div>

        <span className="font-bold">Tunnel of Trees</span> is a music blog dedicated<br />
        to taking music and turning it into a serious<br />
        conversation about creation, expression,<br />
        and authenticity.
      </h1>
    </div>
  );
}

export default ToTBanner;
