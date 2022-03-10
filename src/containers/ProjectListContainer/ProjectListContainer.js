import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";

import projectList from "../../data/projectListData";

const ProjectListContainer = props => {
    const [hover, setHover] = useState(-1);

    const activeHoverHandler = (index) => setHover(index);
    const inactiveHoverHandler = () => setHover(-1);

    return (
        <div className="grid grid-cols-2 gap-8 m-auto w-4/5" style={{marginBottom: '8rem'}}>
            {projectList.map((project, index) => {
                const { projectUrl, name, url } = project;
                return <div
                    key={index}
                    className={`${projectUrl} flex justify-self-center`}
                    style={{
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                        height: '30vw',
                        width: '30vw',
                    }}
                    onMouseLeave={inactiveHoverHandler}
                    onMouseEnter={() => activeHoverHandler(index)}
                >

                    {hover === index ? <div className="w-full z-50" style={{backgroundColor: 'rgba(0, 0, 0, .3)'}}>
                        <Link className="h-full w-full flex" to={url}>
                            <h1 className="m-auto inline-block text-2xl" style={{color: 'white'}}>{name}</h1>
                        </Link>
                    </div> : <Fragment />}
                </div>
            })}

        </div >
    );
}

export default ProjectListContainer;
