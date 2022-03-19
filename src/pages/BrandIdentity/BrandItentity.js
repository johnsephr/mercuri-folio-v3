import React from "react";

// file imports
import RootBannerContainer from "../../containers/RootBannerContainer";
import Navbar from "../../components/Navbar";
import Roles from "../../components/Roles";

// data
import brandIdentityRolesListData from '../../data/roles/brandIdentityRolesListData';

// images
import dueDate from '../../assets/images/brand-identity/due-date.png'

const BrandIdentity = () => {
  return (
    <div>
      <RootBannerContainer>
        <Navbar logoVariant="dark" />
      </RootBannerContainer>

      {/* page header */}
      <div className="pt-24" style={{ margin: '0 10vw 0 10vw' }}>
        {/* roles */}
        <Roles rolesList={brandIdentityRolesListData} rolesVariant='dark' />
        <div className="w-3/5">
          <p className="italic mt-6 inline-block w-1/2">title of project:</p><p className="italic bold mt-6 inline-block w-1/2">due date:</p><br />
          <h1 className="text-5xl inline-block w-1/2">personal <span className="italic">identity</span></h1>
          <div className="w-1/2 inline-block"><img className="w-1/3 inline-block" src={dueDate} style={{ transform: 'translateY(-10px)' }} /></div>
        </div>
      </div>




    </div>
  );
}

export default BrandIdentity;
