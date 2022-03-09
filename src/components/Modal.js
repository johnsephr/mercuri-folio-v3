import React, { useState } from "react";


const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // toggles modal open/close
  const modalOpenHandler = () => setModalOpen(!modalOpen);

  return (
    <div className='flex justify-center pt-8'>
      <button className='border-solid border-2 border-stone-700 rounded-md py-1 px-3' onClick={modalOpenHandler}>Contact</button>

      {/* overlay   */}
      <div className={`${modalOpen ? '' : 'hidden'} h-screen w-screen absolute top-0 left-0 z-40`} style={{ backgroundColor: 'rgba(0, 0, 0, .3)' }}>

        {/* modal */}
        <div className="flex justify-items-center items-center h-full w-full">
          <div className="z-50 h-2/3 w-2/3 m-auto rounded-md relative" style={{ backgroundColor: 'white', maxWidth: 500, minWidth: 325, maxHeight: 900 }}>


            {/* header */}
            <h1 className="text-center text-2xl mt-5 mb-10">contact me!</h1>

            {/* body */}
            <div className="m-auto text-center">put shit here</div>

            {/* buttons */}
            <div className="flex justify-center w-full my-10">
              <button className='border-solid border-2 border-stone-700 rounded-md py-1 px-3 mx-5' onClick={modalOpenHandler}>Close</button>
              <button className='border-solid border-2 border-stone-700 rounded-md py-1 px-3 mx-5'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
