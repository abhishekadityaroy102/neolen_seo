import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

import { useRef } from "react";


import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);


import Profilegb from '/public/gbprofile.jpg'
import Profilebc from '/public/bcprofile.jpg'
import Profilepaw from '/public/pawprofile.webp'
import Profilees from '/public/esprofile.webp'
import Profilepc from '/public/pcprofile.webp'
import Profiletp from '/public/tpprofile.webp'
import Profileff from '/public/ffprofile.webp'
import Profilevw from '/public/gbprofile.jpg'



import arrowNext from '/public/arrow-next.webp'

import gb from "/public/getboarded.webp"
import vw from "/public/videowiki.webp"
import es from "/public/estart.webp"
import pc from "/public/pacome.webp"
import tp from "/public/tp.webp"
import bc from "/public/bloomcap.webp"
import ff from "/public/fflogo.webp"
import paw from "/public/paw.webp"


import TestimonialDetails from "./testimonialDetails"


export default function TestimonialSlider() {

    const swiperRef = useRef(null);

    return (
        
        <div id='testimonials' className='overflow-x-hidden background-main background-portfolio grid place-content-center '>

            <h2 className='text-white font-extrabold opacity-50 text-[2.3em] textShadow absolute top-[5rem] lg:top-[3rem] 2xl:top-[5rem] lg:left-[3rem] 2xl:left-[5rem] place-self-center text-center'>Testimonial</h2>

            <h2 className='text-white font-extrabold opacity-50 text-[2.3em] textShadow absolute bottom-[5rem] lg:bottom-[3rem] 2xl:bottom-[5rem] lg:right-[3rem] 2xl:right-[5rem] place-self-center text-center'>Testimonial</h2>

            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop
                
                breakpoints={{
                320: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 2,
                },
                }} ref={swiperRef} 

                className="place-content-center w-[58em] mx-[10em] place-self-center"
            >

                <SwiperSlide className='grid grid-flow-row grid-cols-1 place-content-center place-self-center relative w-[28em] bg-slate-00'>

                        <TestimonialDetails profile = {Profilegb} logo= {gb} designation="Head of Operations ( Getboarded )" clientName="Shivam Dhawan" content="“ No matter where you go, Neolen is the coolest, most happening thing around! I just can't get enough of Neolen. I want to get a T-Shirt with Neolen on it so I can show it off to everyone. “"></TestimonialDetails>

                </SwiperSlide>  

                <SwiperSlide className='grid grid-flow-row grid-cols-1 place-content-center place-self-center relative w-[28em] bg-slate-00'>

                        <TestimonialDetails profile = {Profilebc} logo= {bc} designation="Founder ( BloomCap )" clientName="Arihant Publications" content="“ I love Neolen. I would also like to say thanks to all your staff. Thanks for the great journey, it was amazing collaborating with you guys. “"></TestimonialDetails>

                </SwiperSlide> 
                <SwiperSlide className='grid grid-flow-row grid-cols-1 place-content-center place-self-center relative w-[28em] bg-slate-00'>

                        <TestimonialDetails profile = {Profilepaw} logo= {paw} designation="Founder ( Paw Purrfect )" clientName="Karan Oberoi" content="“ I recently had a major issue with my company's network and Neolen was there to help. Their expertise and professionalism made all the difference and they got us back up and running in no time. “"></TestimonialDetails>

                </SwiperSlide> 
                <SwiperSlide className='grid grid-flow-row grid-cols-1 place-content-center place-self-center relative w-[28em] bg-slate-00'>

                        <TestimonialDetails profile = {Profilegb} logo= {vw} designation="Founder ( VideoWiki )" clientName="Shivam Dhawan" content="“ I have been working with Neolen for over a year now and I am extremely satisfied with their service. They always go above and beyond to ensure my IT needs are met and resolved in a timely manner. “"></TestimonialDetails>

                </SwiperSlide> 
                <SwiperSlide className='grid grid-flow-row grid-cols-1 place-content-center place-self-center relative w-[28em] bg-slate-00'>

                        <TestimonialDetails profile = {Profileff} logo= {tp} designation="Founder ( Trusted Predictions )" clientName="Megha Patel" content="“ Neolen's team provided us with exceptional IT support for our business. Their quick response times and technical expertise made all the difference for us. Highly recommend! “"></TestimonialDetails>

                </SwiperSlide> 
                <SwiperSlide className='grid grid-flow-row grid-cols-1 place-content-center place-self-center relative w-[28em] bg-slate-00'>

                        <TestimonialDetails profile = {Profilees} logo= {es} designation="Founder ( E-Start )" clientName="Rohit Gupta" content="“ Neolen's IT solutions have transformed the way our company operates. Their innovative technology and personalized approach have improved our productivity and efficiency. We highly recommend them to any business looking for top-notch IT support. “"></TestimonialDetails>

                </SwiperSlide> 
                

            </Swiper>

            <div className="grid grid-flow-col place-self-center place-content-center absolute justify-between lg:w-[80vw] w-[95vw] z-10">

                    <div className="cursor-pointer scale-x-[-1] lg:w-[2em] w-[1em]" onClick={() => swiperRef.current.swiper.slidePrev()}>

                        <Image src={arrowNext} alt="img"></Image>

                    </div>
                    
                    <div className="cursor-pointer lg:w-[2em] w-[1em]" onClick={() => swiperRef.current.swiper.slideNext()}>

                        <Image src={arrowNext}alt="img"></Image>

                    </div>
                    
            </div>

                
                

        </div>
    )
}