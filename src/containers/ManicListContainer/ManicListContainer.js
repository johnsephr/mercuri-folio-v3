import React from "react";

// images
import manic_1 from '../../assets/images/posters/manic/manic_1.jpg'
// import manic_2 from '../../assets/images/posters/manic/manic_2.jpg'
import manic_3 from '../../assets/images/posters/manic/manic_3.jpg'

// imgArr
const manicImgList = [
    {image: manic_1, text1: '"I HATE EVERYBODY" by ', text2: 'Halsey'}, 
    {image: manic_3, text1: '"3am" by ', text2: 'Halsey'}
]

const ManicListContainer = props => {
    return (
        <div className="grid flex justify-center">
            {manicImgList.map((item, index) => {
                const { image, text1, text2 } = item;
                return <div
                    className=''
                    style={{
                        width: '40vw',
                        margin: '4rem 0'
                    }}
                    key={index}
                >
                    <img className="w-full" src={image} alt="manic" />
                    <p className="text-center mt-3">{text1}<span className="font-bold">{text2}</span></p>
                </div>
            })}
        </div>
    );
}

export default ManicListContainer;
