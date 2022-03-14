import React from "react";
import { useMediaPredicate } from "react-media-hook";

const ToTBanner = () => {
  const smallerThan1116 = useMediaPredicate("(max-width: 1116px)");
  const smallerThan867 = useMediaPredicate("(max-width: 867px)");
  const smallerThan683 = useMediaPredicate("(max-width: 683px)");
  const smallerThan618 = useMediaPredicate("(max-width: 618px)");
  const smallerThan455 = useMediaPredicate("(max-width: 455px)");
  const smallerThan414 = useMediaPredicate("(max-width: 414px)");

  return (
    <div className="h-full w-full grid pt-12">
      <div className="row-span-1 w-full" />
      <h1 className={`${smallerThan414 ? 'text-base' :
        smallerThan455 ? 'text-lg' :
          smallerThan618 ? 'text-xl' :
            smallerThan683 ? 'text-2xl' :
              smallerThan867 ? 'text-3xl' :
                smallerThan1116 ? 'text-4xl' : 'text-5xl'} 
                ${smallerThan414 ? 'pl-0' :
          smallerThan683 ? 'pl-8' :
            smallerThan867 ? 'pl-12' : 'pl-24'} text-left row-span-2`} style={{ color: 'white' }}>

        {/* roles */}
        <div className={`${smallerThan867 ? 'text-base' : smallerThan1116 ? 'text-lg' : 'text-xl'} text-left italic pb-5`} style={{ color: 'white' }}>
          <span>Creative Direction</span>
          {smallerThan618 ? <br /> : <hr className={`${smallerThan618 ? 'w-2' : smallerThan683 ? 'w-5' : 'w-10'} h-1 bg-black inline-block mx-1`} />}
          <span>Branding Identity</span>
          {smallerThan618 ? <br /> : <hr className={`${smallerThan618 ? 'w-2' : smallerThan683 ? 'w-5' : 'w-10'} h-1 bg-black inline-block mx-1`} />}
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
