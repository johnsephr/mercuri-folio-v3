import React from "react";

import forgiveList from "../../data/forgiveListData";

const ForgiveListContainer = props => {
    return (
        <div className="grid ">
            {forgiveList.map((poster, index) => {
                console.log(poster)
                return <div
                    className=''
                    style={{}}
                >
                    <img key={index} url={poster.url} />
                </div>
            })}
        </div>
    );
}

export default ForgiveListContainer;
