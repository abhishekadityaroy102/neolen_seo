import Image from 'next/image'
import ContactImg from '/public/contactimg.webp'
import React, { useState } from 'react';
import { sendDataToAirTable } from '../api/utils';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export default function ContactUs({classes}) {
    const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    
    message: '',
  });
  const { name, email,  message } = formData;
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (name !== '' && email !== '' && message !== '') {
      sendDataToAirTable({
        data: {
          'First Name': name,
          Email: email,
          Message: message,
          Source: 'Contact page',
        },
        onComplete: () => {
          setLoading(false);
          setFormData({ name: '', email: '',  message: '' });
        },
      });
    } else {
      setLoading(false);
    }
  };

    return (
        
        <>

            <h2 className='text-white font-extrabold opacity-50 text-[2.3em] textShadow absolute top-[5rem] lg:top-[3rem] 2xl:top-[5rem] lg:left-[3rem] 2xl:left-[5rem] place-self-center'>Contact Us</h2>

            <h2 className='text-white font-extrabold opacity-50 text-[2.3em] textShadow absolute bottom-[5rem] lg:bottom-[3rem] 2xl:bottom-[5rem] lg:right-[3rem] 2xl:right-[5rem] place-self-center'>Contact Us</h2>
            
                
            <div className='grid lg:grid-flow-col grid-flow-row lg:grid-cols-2 grid-rows-2 gap-[1em] place-content-center place-self-center lg:h-[30em] lg:w-[60em] h-[45em] w-[21em] p-5 InfoContainer rounded-3xl relative'>

                <div className='grid grid-flow-row place-self-center place-content-center'>

                    <div className='lg:w-[18em] w-[7em] p-[0] my-[-1em] absolute top-[-1.5em] left-[-1.5em]'><Image src={ContactImg} alt="img-contact"></Image></div>

                    <div className='grid grid-flow-row place-content-center lg:place-content-start absolute lg:left-[3em] lg:bottom-[2em] place-self-center top-[3em] lg:top-[auto] lg:text-left text-center'>

                        <h2 className='font-extrabold lg:text-[2.8em] text-[2em] leading-[1.2em] text-blue place-self-center lg:place-self-start'>Let's Have a<br></br>Chat !</h2>

                        <p className=' lg:w-[22em] w-[20em] leading-[1.8em] lg:mt-[2em] mt-[1em] text-[0.7zem] text-blue font-normal lg:text-sm'>We’re here to help and answer any question you might have. We look forward to hearing from you !!! 🙂</p>

                    </div>

                </div>

                <form onSubmit= {handleFormSubmit}
                  className='grid grid-flow-row gap-y-[1em] absolute lg:right-[3em] place-self-center lg:bottom-[auto] bottom-[2em]'>

                    <div className='grid grid-flow-row gap-y-[0.5em] text-base'>

                        <label className='text-base font-bold text-blue place-self-center lg:place-self-start'>Name :</label>
                        <input type = "text" name = "name" value={name} required onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                  className='px-[1em] py-[0.5em] rounded-md lg:w-[28em] w-[20em] place-self-center lg:place-self-start bg-white bg-opacity-60 text-blue font-semibold' placeholder='John Doe'></input>

                    </div>

                    <div className='grid grid-flow-row gap-y-[0.5em] text-base'>

                        <label className='text-base font-bold text-blue place-self-center lg:place-self-start'>Email :</label>
                        <input type = "email" name = "email" value={email} required  onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className='px-[1em] py-[0.5em] rounded-md lg:w-[28em] w-[20em] place-self-center lg:place-self-start bg-white bg-opacity-60 text-blue font-semibold' placeholder='youremail@mail.com'></input>

                    </div>

                    <div className='grid grid-flow-row gap-y-[0.5em] text-base'>

                        <label className='text-base font-bold text-blue place-self-center lg:place-self-start'>Message :</label>
                        <textarea type = "text-area" name = "message" value = {message} required onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                } className='px-[1em] py-[0.5em] rounded-md lg:w-[28em] w-[20em] place-self-center bg-white bg-opacity-60 text-blue font-medium h-[9em] text-base' placeholder='Your message here...'></textarea>

                    </div>

                    <button type='submit' disabled={loading} className='bg-white lg:py-[0.6em] py-[0.4em] px-[1.2em] button-shadow m-0 rounded-full text-blue text-base font-semibold hover:bg-blue hover:text-white ease-in-out duration-300 lg:w-[40%] w-[50%] lg:place-self-start place-self-center '>Contact Us</button>
                    <ToastContainer autoClose={5000}/> 

                    


                </form>

            </div>

        </>
    )
}