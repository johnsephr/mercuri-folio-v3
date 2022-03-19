import React from "react";

// file imports
import RootBannerContainer from "../../containers/RootBannerContainer";
import Navbar from "../../components/Navbar";
import Roles from "../../components/Roles";

// data
import brandIdentityRolesListData from '../../data/roles/brandIdentityRolesListData';

// images
import dueDate from '../../assets/images/brand-identity/due-date.png';
import scribbledPortrait from '../../assets/images/brand-identity/scribbled-portrait.png';
import darkStar from '../../assets/icons/star/darkstar.svg';

const BrandIdentity = () => {
  return (
    <div>
      <RootBannerContainer>
        <Navbar logoVariant="dark" />
      </RootBannerContainer>

      <div style={{ margin: '0 10vw 0 10vw' }}>
        {/* page header */}
        <div className="py-28">
          {/* roles */}
          <Roles rolesList={brandIdentityRolesListData} rolesVariant='dark' />
          <div className="w-3/5">
            <p className="italic mt-6 inline-block w-1/2">title of project:</p><p className="italic bold mt-6 inline-block w-1/2">due date:</p><br />
            <h1 className="text-5xl inline-block w-1/2">personal <span className="italic">identity</span></h1>
            <div className="w-1/2 inline-block"><img className="w-1/3 inline-block" src={dueDate} style={{ transform: 'translateY(-10px)' }} /></div>
          </div>
        </div>

        {/* image and bio */}
        <div>
          <div className="w-1/5 inline-block"><img src={scribbledPortrait} className="w-full" /></div>
          <div className="w-1/5 ml-10 inline-block h-full flex flex-col">
            {/* star */}
            <div className="h-8 mb-4"><img src={darkStar} className="h-full" /></div>
            {/* bio */}
            <p className="text-xl">I'm Michelle. <br />
              I'm a <span className="italic">visual designer</span> <br />
              that lives in the weird <br />
              city of <span className="italic">Austin, TX.</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BrandIdentity;
