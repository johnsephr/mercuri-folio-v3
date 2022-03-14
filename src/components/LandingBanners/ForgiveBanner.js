import React from "react";
import { useMediaPredicate } from "react-media-hook";

const ForgiveBanner = () => {
  const smallerThan1116 = useMediaPredicate("(max-width: 1116px)");
  const smallerThan867 = useMediaPredicate("(max-width: 867px)");
  const smallerThan683 = useMediaPredicate("(max-width: 683px)");
  const smallerThan618 = useMediaPredicate("(max-width: 618px)");
  const smallerThan455 = useMediaPredicate("(max-width: 455px)");
  const smallerThan414 = useMediaPredicate("(max-width: 414px)");

  return (
    <div className="h-full w-full grid pt-12">
      <div className="row-span-1" />
      <h1 className={`${smallerThan414 ? 'text-base' :
        smallerThan455 ? 'text-lg' :
          smallerThan618 ? 'text-xl' :
            smallerThan683 ? 'text-2xl' :
              smallerThan867 ? 'text-3xl' :
                smallerThan1116 ? 'text-4xl' : 'text-5xl'} 
                ${smallerThan414 ? 'pl-0' :
          smallerThan683 ? 'pl-8' :
            smallerThan867 ? 'pl-12' : 'pl-24'} text-left row-span-2 mt-3`} style={{ color: 'black' }}>
        <p className="text-xl text-left italic pb-5" style={{ color: 'black' }}>Concept Development</p>
        'Forgive' is a concept poster series aiming<br />
        to illustrate the ever-changing energy in the<br />
        pursuit of growing as a human.
      </h1>
    </div>
  );
}

export default ForgiveBanner;
