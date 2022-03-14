import React from "react";
import { useMediaPredicate } from "react-media-hook";

// images
import forgive_1 from '../../assets/images/posters/forgive/forgive_1.jpg'
import forgive_2 from '../../assets/images/posters/forgive/forgive_2.jpg'
import forgive_3 from '../../assets/images/posters/forgive/forgive_3.jpg'

// imgArr
const forgiveImgList = [forgive_1, forgive_2, forgive_3]

const ForgiveListContainer = props => {
    const smallerThan700 = useMediaPredicate("(max-width: 700px)");

    return (
        <div className={`grid flex justify-center ${smallerThan700 ? 'px-12' : 'px-24'}`}>
            {forgiveImgList.map((img, index) => {
                return <div
                    className={`${smallerThan700 ? 'my-5' : 'my-10'}`}
                    style={{
                        height: smallerThan700 ? '' : '60vh',
                        width: smallerThan700 ? '100%' : '',
                    }}
                    key={index}
                >
                    <img className={`${smallerThan700 ? 'w-full' : 'h-full'} mx-auto`} src={img} alt="forgive project img" />
                </div>
            })}
        </div>
    );
}

export default ForgiveListContainer;
