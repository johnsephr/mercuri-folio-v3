import React from "react";
import { useMediaPredicate } from "react-media-hook";

const HomeBanner = () => {
  const smallerThan1400 = useMediaPredicate("(max-width: 1400px)");
  const smallerThan735 = useMediaPredicate("(max-width: 735px)");
  const smallerThan617 = useMediaPredicate("(max-width: 617px)");
  const smallerThan500 = useMediaPredicate("(max-width: 500px)");
  const smallerThan411 = useMediaPredicate("(max-width: 411px)");
  const smallerThan372 = useMediaPredicate("(max-width: 372px)");

  return (
    <div className="h-full w-full grid pt-12">
      <div className="row-span-1 w-full flex flex-col justify-center">
        <p className={`${smallerThan500 ? 'text-base' : 'text-xl'} text-left`}>Hello,</p>
      </div>
      <div className="width-full flex justify-center row-span-2">
        <h1 className={`${smallerThan372 ? 'text-base' :
          smallerThan411 ? 'text-lg' :
            smallerThan500 ? 'text-xl' :
              smallerThan617 ? 'text-2xl' :
                smallerThan735 ? 'text-3xl' :
                  smallerThan1400 ? 'text-4xl' : 'text-5xl'} inline-block tracking-wide text-left`}>I'm Michelle, a <span className="italic">visual designer</span> based in<br /> <span className="font-bold">Austin, TX.</span> I am currently available<br /> for new projects.</h1>
      </div>
    </div>
  );
}

export default HomeBanner;
