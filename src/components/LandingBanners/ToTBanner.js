import React from "react";

const ToTBanner = () => {
  return (
    <div className="h-full w-full grid pt-12">
        <div className="flex items-end row-span-1 w-full px-24" >
          <p className="text-xl text-left italic pb-10" style={{color: 'white'}}>Creative Direction --- Branding Identity --- Design System</p>
          </div>
        <h1 className="text-5xl px-24 text-left row-span-2" style={{color: 'white'}}>
            <span className="font-bold">Tunnel of Trees</span> is a music blog dedicated<br />
            to taking music and turning it into a serious<br />
            conversation about creation, expression,<br />
            and authenticity.
        </h1>
    </div>
  );
}

export default ToTBanner;
