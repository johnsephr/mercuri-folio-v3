import React, { useState } from "react";


const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState('');

  // toggles modal open/close
  const modalOpenHandler = () => setModalOpen(!modalOpen);

  // submit form
  const submitForm = ev => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus('SUCCESS')
      } else {
        setStatus('ERROR');
      }
    };
    xhr.send(data);
  };

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

            {/* form */}
            <form
              // className={biggerThan1500 ? classes.form : classes.mobileForm}
              onSubmit={submitForm}
              action="https://formspree.io/mwkrkrno"
              method="POST"
              noValidate
              autoComplete="off"
            >
              {/* add your custom form HTML here */}

              {/* <label>Name/Company Name:</label> */}
              <input type="text" name="name" label="Company Name" /><br />
              <input type="text" name="email" label="Email" /><br />
              <input type="text" name="phone_number" label="Phone Number" /><br />
              <input type="text" name="message" label="Message" /><br />

              {status === "SUCCESS" ? <p>Thanks!</p> : <button variant='contained'>Submit</button>}
              {/* {status === "SUCCESS" ? <p>Thanks!</p> : <Button variant='contained' className={classes.submitBtn} type="submit">Submit</Button>} */}

              {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </form>

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
