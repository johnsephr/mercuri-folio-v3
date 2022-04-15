import React from "react";

// images
import logoVariant1 from '../../assets/images/brand-identity/logo-variants/logo-variant-1.png'
import logoVariant2 from '../../assets/images/brand-identity/logo-variants/logo-variant-2.png'
import logoVariant3 from '../../assets/images/brand-identity/logo-variants/logo-variant-3.png'
import logoVariant4 from '../../assets/images/brand-identity/logo-variants/logo-variant-4.png'
import logoBreakdown from '../../assets/images/brand-identity/logo-variants/logo-breakdown.png'

import LGradientSm from '../../assets/images/brand-identity/gradients/L-gradient-sm.png'
import LGradientMd from '../../assets/images/brand-identity/gradients/L-gradient-md.png'
import LGradientLg from '../../assets/images/brand-identity/gradients/L-gradient-lg.png'
import RGradientXs from '../../assets/images/brand-identity/gradients/R-gradient-xs.png'
import RGradientSm from '../../assets/images/brand-identity/gradients/R-gradient-sm.png'
import RGradientLg from '../../assets/images/brand-identity/gradients/R-gradient-lg.png'


const LogoVariantsContainer = () => {
  return (
    <div className="w-full mt-32">
        {/* row 1 */}
        <div className="flex flex-row">
            <div><img src={LGradientSm} className=""/></div>
            <div><img src={logoVariant1} className=""/></div>
            <div><img src={logoVariant2} className=""/></div>
            <div><img src={RGradientSm} className=""/></div>
        </div>

        {/* row 2 */}
        <div className="flex flex-row">
            <div><img src={LGradientMd} className=""/></div>
            <div><img src={logoVariant3} className=""/></div>
            <div><img src={logoVariant4} className=""/></div>
            <div><img src={RGradientXs} className=""/></div>
        </div>
       
        {/* row 3 */}
        <div className="flex flex-row">
            <div><img src={LGradientLg} className=""/></div>
            <div><img src={logoBreakdown} className=""/></div>
            <div><img src={RGradientLg} className=""/></div>
        </div>
    </div>
  );
}

export default LogoVariantsContainer;
