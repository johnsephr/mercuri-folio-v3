import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { useMediaPredicate } from "react-media-hook";
import { isMobile } from 'react-device-detect';

import projectList from "../../data/projectListData";

const ProjectListContainer = props => {
    const [hover, setHover] = useState(-1);
    const smallerThan900 = useMediaPredicate("(max-width: 900px");
    const smallerThan500 = useMediaPredicate("(max-width: 500px");

    const activeHoverHandler = (index) => setHover(index);
    const inactiveHoverHandler = () => setHover(-1);

    return (
        <div className={`${isMobile || smallerThan500 ? '' : 'm-auto'} ${ isMobile || smallerThan900 ? '' : 'grid grid-cols-2 gap-8 w-4/5'}`} style={{ marginBottom: '8rem' }}>
            {projectList.map((project, index) => {
                const { projectUrl, name, url } = project;
                return <div
                    key={index}
                    className={`${projectUrl} flex justify-self-center`}
                    style={{
                        backgroundPosition: 'center center',
                        backgroundSize: url === '/manic' || url === '/tot' ? 'cover' : 'cover',
                        height: isMobile || smallerThan500 ? '80vw' : isMobile || smallerThan900 ? '60vw' : '30vw',
                        width: isMobile || smallerThan500 ? '80vw' : isMobile || smallerThan900 ? '60vw' : '30vw',
                        margin: isMobile || smallerThan900 ? '5rem auto' : 'auto',
                    }}
                    onMouseLeave={inactiveHoverHandler}
                    onMouseEnter={() => activeHoverHandler(index)}
                >
                    {isMobile || hover === index ? <div className="w-full z-50" style={{ backgroundColor: 'rgba(0, 0, 0, .3)' }}>
                        <Link className="h-full w-full flex" to={url}>
                            <h1 className="m-auto inline-block text-2xl" style={{ color: 'white' }}>{name}</h1>
                        </Link>
                    </div> : <Fragment />}
                </div>
            })}

        </div >
    );
}

export default ProjectListContainer;
