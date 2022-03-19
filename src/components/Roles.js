import React, { Fragment } from "react";
import { useMediaPredicate } from "react-media-hook";

const Roles = props => {
    const { rolesList, rolesVariant } = props;
    const smallerThan1116 = useMediaPredicate("(max-width: 1116px)");
    const smallerThan867 = useMediaPredicate("(max-width: 867px)");
    const smallerThan683 = useMediaPredicate("(max-width: 683px)");
    const smallerThan618 = useMediaPredicate("(max-width: 618px)");

    return (
        <div className={`${smallerThan867 ? 'text-base' : smallerThan1116 ? 'text-lg' : 'text-xl'} text-left italic pb-5`}>
            {rolesList.map((role, index) => {
                console.log(rolesList);
                return <Fragment>
                    <span style={rolesVariant === 'light' ? { color: 'white' } : {}}>{role}</span>
                    {index === rolesList.length - 1 ? <Fragment /> :
                        smallerThan618 ? <br /> :
                            <hr className={`${smallerThan618 ? 'w-2' : smallerThan683 ? 'w-5' : 'w-10'} h-1 bg-black inline-block mx-1`} />}
                </Fragment>
            })}
        </div>
    );
}

export default Roles;