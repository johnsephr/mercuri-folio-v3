import React from "react";


const HomeBanner = () => {
  return (
    <div className="h-full w-full grid pt-12">
        <p className="text-xl text-left row-span-1 w-full">Hello,</p>
        <h1 className="text-5xl px-24 text-left row-span-2 mt-3">I'm Michelle, a <span className="italic">Designer</span> based in<br /> <span className="font-bold">Austin, TX.</span> I am currently available<br /> for new projects.</h1>
    </div>
  );
}

export default HomeBanner;
