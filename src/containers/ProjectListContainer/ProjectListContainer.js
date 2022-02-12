import React from "react";
import { Link } from "react-router-dom";

import projectList from "../../data/projectListData";

const ProjectListContainer = props => {
    const { logoVariant, starVariant } = props;
    return (
        <div className="grid grid-cols-2 gap-8 m-auto w-4/5">
            {projectList.map((project, index) => {
                return <div
                    key={index}
                    className={`${project.projectUrl} flex justify-self-center`}
                    style={{
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                        height: '30vw',
                        width: '30vw',
                    }}
                >
                    <Link className="h-full w-full z-50" to={project.url} />
                </div>
            })}

        </div >
    );
}

export default ProjectListContainer;
