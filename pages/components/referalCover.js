import Image from 'next/image'
import Nav from './nav'
import Instagram from '/public/instagram.webp'
import Facebook from '/public/facebook.webp'
import LinkedIn from '/public/linkedin.webp'
import Twitter from '/public/Twitter.webp'
import Youtube from '/public/youtube.webp'
import { useState } from 'react';
import { sendDataToAirTable } from '../api/utils';


export default function ReferalCover() {
  //  const [showForm, setShowForm] = useState(true);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      whatsappNo: '',
      message: '',
    });
    const { name, email, whatsappNo, message } = formData;
    const handleFormSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      if (name !== '' && email !== '' && message !== '') {
        sendDataToAirTable({
          data: {
            'First Name': name,
            Email: email,
            Phone: whatsappNo,
            Message: message,
          },
          onComplete: () => {
            setLoading(false);
            setFormData({ name: '', email: '', whatsappNo: '', message: '' });
          },
        });
      } else {
        setLoading(false);
      }
    };
  return (
        <div id='home' className='background-form-referal background-cover grid place-content-center lg:h-[100vh] h-[80rem]'>
            <Nav></Nav>
            <div className='absolute lg:left-[10.7em] lg:top-[20%] top-[16%] text-center lg:text-left lg:block grid place-content-center place-self-center'>
                <h1 className='font-extrabold lg:text-[3.7em] text-[3em] leading-tight text-blue place-self-center'>Stop Wasting<br></br>Leads and<br></br>Earn Money</h1>
                <p className='lg:w-[28em] w-[25em] leading-[1.8em] mt-[1.7em] text-blue font-normal lg:text-[0.85em] text-sm place-self-center'>Refer A company or individual who needs IT Services and if they become our client you will get 1000$. We will also give a discount to your referred company or individual.</p>
                <div className='hidden lg:grid grid-flow-col h-[3em] w-[auto] ml-0 lg:mt-[3.7em] mt-[2em] p-0 place-content-center lg:place-content-start items-center'>
                    <div className=' w-[2.3em] ml-[-0.3em] mr-[1.5em] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]'><a href='https://www.instagram.com/neolen_services/' target="_blank" rel="noreferrer"><Image src={Instagram} alt="img"></Image></a></div>
                    <div className=' w-[2.3em] mr-[1.5em] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]'><a href='https://twitter.com/neolen_services' target="_blank" rel="noreferrer"><Image src={Twitter} alt="img"></Image></a></div>
                    <div className=' w-[2.3em] mr-[1.5em] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]'><a href='https://www.facebook.com/Neolenofficial/' target="_blank" rel="noreferrer"><Image src={Facebook} alt="img"></Image></a></div>
                    <div className=' w-[2.3em] lg:mr-[1.5em] mr-[0] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]'><a href='https://www.linkedin.com/company/neolen/' target="_blank" rel="noreferrer"><Image src={LinkedIn} alt="img"></Image></a></div>
                    <div className=' w-[2.3em] lg:mr-[1.5em] mr-[0] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]'><a href='https://www.youtube.com/@neolentechnologies6331' target="_blank" rel="noreferrer"><Image src={Youtube} alt="img"></Image></a></div>
                </div>
            </div>
            <div className=' place-self-center absolute lg:w-[35em] w-[33em] lg:h-[35em] h-[40em] lg:top-[7em] lg:right-[7em] bottom-[5em] grid place-content-center bg-[url("../public/startup-form.webp")] bg-center bg-contain bg-no-repeat'>

                <form onSubmit={handleFormSubmit} className='grid grid-flow-row gap-y-[1em] absolute lg:right-[auto] place-self-center lg:bottom-[auto] bottom-[auto] '>

                        <div className='grid grid-flow-row gap-y-[0.5em] text-base'>

                            <label className='text-base font-bold text-blue place-self-center lg:place-self-start'>Name :</label>
                            <input type = "text" name = "name"value={name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className='px-[1em] py-[0.5em] rounded-md lg:w-[20em] w-[20em] place-self-center lg:place-self-start bg-white bg-opacity-80 text-blue font-semibold'></input>

                        </div>

                        <div className='grid grid-flow-row gap-y-[0.5em] text-base'>

                            <label className='text-base font-bold text-blue place-self-center lg:place-self-start'>Email :</label>
                            <input type = "email" name = "email" value={email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className='px-[1em] py-[0.5em] rounded-md lg:w-[20em] w-[20em] place-self-center lg:place-self-start bg-white bg-opacity-80 text-blue font-semibold'></input>

                        </div>

                        <div className='grid grid-flow-row gap-y-[0.5em] text-base'>

                            <label className='text-base font-bold text-blue place-self-center lg:place-self-start'>Whatsapp No.(Optional):</label>
                            <input type = "tel" name = "email" value={whatsappNo}
          onChange={(e) =>
            setFormData({ ...formData, whatsappNo: e.target.value })
          } required className='px-[1em] py-[0.5em] rounded-md lg:w-[20em] w-[20em] place-self-center lg:place-self-start bg-white bg-opacity-80 text-blue font-semibold'></input>

                        </div>

                        <div className='grid grid-flow-row gap-y-[0.5em] text-base'>

                            <label className='text-base font-bold text-blue place-self-center lg:place-self-start'>Message :</label>
                            <textarea type = "text-area" name = "message" value={message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          } required className='px-[1em] py-[0.5em] rounded-md lg:w-[20em] w-[20em] place-self-center lg:place-self-start bg-white bg-opacity-80 text-blue font-medium h-[5em] text-base'></textarea>

                        </div>

                        <button type='submit' disabled={loading} className='bg-white lg:py-[0.6em] py-[0.4em] px-[1em] button-shadow m-0 rounded-full text-blue text-base font-semibold hover:bg-blue hover:text-white ease-in-out duration-300 lg:w-[70%] w-[50%] lg:place-self-center place-self-center '>Refer Client</button>

                    </form>

            </div>
        </div>
  )
}
