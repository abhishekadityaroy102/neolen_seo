import Head from "next/head";
import Footer from './footer'
import Image from "next/image"
import Saly from '/public/Saly.webp'
import logo from '/public/logo.webp'
import ArrowButton from '/public/arrow-button.webp'
import Page2 from './page2';
import alt from '/public/alt.webp'
import React, { useState } from 'react';
import {sendDataToAirTable} from "../api/utils"


function SalesTemplate(){

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
 
    email: '',
  });
  const { email } = formData;
  const handleFormSubmit = (e) => {
     
    e.preventDefault();
    setLoading(true);
 
    if ( email !== '') {
      sendDataToAirTable({
        data: {
         
          Email: email,
         
          Source: 'Landing Page',
        },
        onComplete: () => {
          setLoading(false);
          setFormData({ email: ''});
          window.open("https://docs.google.com/document/d/1IzMpB2_HH857PitFSDAUuOI-kF-Ck07I2r8GQqeEWnk/edit")
        },
      });
    } else {
      setLoading(false);
    }
  
  };

 return (
  <div>
    <div id='home' className='background-main background-cover grid place-content-center scroll-smooth'>
           
   
 
            <div className='absolute lg:left-[10.7em] lg:top-[10%] top-[5%] text-center lg:text-left lg:block grid place-content-center place-self-center'>
            <div className='grid place-content-start place-self-center mb-[1em]'>
                <Image src={logo} alt="coverimage"></Image>
            </div>
                <h1 className='font-extrabold lg:text-[3em] text-[2em] leading-tight text-blue place-self-center pb-2'>Free Sales <br></br>Plan Template!</h1>
                <p className='lg:w-[28em] w-[25em] leading-[2em] mt-[1em] text-blue font-normal lg:text-sm text-sm lg:mb-[2em] place-self-center'>Download this template from Neolen, and build your sales plan. Make it simple for your team, direct reports, and execs to understand what your goals are, how you'll accomplish them, and any support you'll need.</p>
             
                <form onSubmit={handleFormSubmit} className= 'relative grid place-content-center grid-cols-1 lg:grid-flow-col grid-flow-row justify-end lg:shadow-lg rounded-full mt-[2em] lg:w-[33em] lg:h-[3.2em] h-[auto] '>
                <input  type="email" onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }  className="grid place-self-start  text-base py-[1em] font-normal border-none text-gray-700 bg-white rounded-full h-[100%] w-[100%] pl-[1em]" id="email"placeholder="Email" />
                <button type="submit"  className='lg:absolute right-0 grid place-content-center grid-flow-col w-[15em] lg:w-[16em] lg:h-[100%] h-[auto] place-self-center justify-end bg-blue button-shadow rounded-full text-sm text-white font-semibold lg:py-4 hover:bg-white hover:text-blue ease-in-out duration-300 mt-[2em] lg:mt-0 lg:ml-[-4em] py-[0.8em] '><span className="place-self-center">UNLOCK ACCESS</span>
                <div className='grid place-content-center place-self-center ml-[0.5em] w-[4.5em] h-[auto]'><Image src={alt} alt="imgarrow"></Image></div></button>
                </form>
            </div>
            <div className='absolute lg:w-[30em] w-[18em] h-[auto] lg:top-[12%] place-self-center lg:right-[7em] bottom-[3em] '> <Image src={Saly} alt="coverimage"></Image>
            </div>
        </div>
 
            <div>
              <Page2></Page2>
            </div>
          <div className='background-footer2 background-main grid place-content-center'>
        <Footer></Footer>
      </div>
  </div>
 )
}
 
 
export default SalesTemplate
