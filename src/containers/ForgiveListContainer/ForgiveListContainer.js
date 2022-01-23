import React from "react";

// images
import forgive_1 from '../../assets/images/posters/forgive/forgive_1.jpg'
import forgive_2 from '../../assets/images/posters/forgive/forgive_2.jpg'
import forgive_3 from '../../assets/images/posters/forgive/forgive_3.jpg'

// imgArr
const forgiveImgList = [forgive_1, forgive_2, forgive_3]

const ForgiveListContainer = props => {
    return (
        <div className="grid ">
            {forgiveImgList.map((img, index) => {
                return <div
                    className=''
                    style={{}}
                    key={index}
                >
                    <img src={img} />
                </div>
            })}
        </div>
    );
}

export default ForgiveListContainer;
