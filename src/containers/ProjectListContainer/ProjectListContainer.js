import React from "react";
import { Link } from "react-router-dom";

import projectList from "../../data/projectListdata";

// custom logo
import customLogoDark from "../../assets/icons/logo (63x111)/Logo-Dark.svg";
import customLogoLight from "../../assets/icons/logo (63x111)/Logo-Light.svg";

// star icon
import starDark from "../../assets/icons/star/darkstar.svg"
import starLight from "../../assets/icons/star/lightstar.svg"

const ProjectListContainer = props => {
    const { logoVariant, starVariant } = props;
    return (
        <div className="grid grid-cols-2 gap-8 p-48">
            {projectList.map((arr, index, project) => {
                 return <div className="bg-landing-tot h-96"><Link className="" to={project.url}>{project.name}</Link></div>
            })}
                
        </div>
    );
}

export default ProjectListContainer;
