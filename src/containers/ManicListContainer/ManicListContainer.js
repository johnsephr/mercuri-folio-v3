import React from "react";

// images
import manic_1 from '../../assets/images/posters/manic/manic_1.jpg'
import manic_2 from '../../assets/images/posters/manic/manic_2.jpg'
import manic_3 from '../../assets/images/posters/manic/manic_3.jpg'

// imgArr
const manicImgList = [manic_1, manic_2, manic_3]

const ManicListContainer = props => {
    return (
        <div className="grid flex justify-center">
            {manicImgList.map((img, index) => {
                return <div
                    className=''
                    style={{
                        width: '40vw',
                        margin: '4rem 0'
                    }}
                    key={index}
                >
                    <img className="w-full" src={img} />
                </div>
            })}
        </div>
    );
}

export default ManicListContainer;
