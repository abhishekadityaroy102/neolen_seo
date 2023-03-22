import Head from 'next/head'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';

import { useRef } from "react";

import SwiperCore, { Navigation } from "swiper";

import Link from 'next/link'


SwiperCore.use([Navigation]);



import arrowNext from '/public/arrow-next.webp'
import LinkIcon from '/public/linkicon.webp'




export default function Events() {

    const swiperRef = useRef(null);

    return (
        
        <>

            <h2 className='text-white font-extrabold opacity-50 text-[2.3em] textShadow absolute top-[1.8em] lg:left-[1.3em] place-self-center'>Events</h2>

            <h2 className='text-white font-extrabold opacity-50 text-[2.3em] textShadow absolute bottom-[1.8em] lg:right-[1.3em] place-self-center'>Events</h2>
            
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

                        <div className='grid grid-flow-row gap-y-[1em] w-[auto] place-self-center place-content-center'>

                            {/* <div className='grid grid-flow-col grid-cols-1 gap-[1em] place-content-center place-self-center lg:h-[12em] h-[20em] lg:w-[28em] w-[20em] InfoContainer rounded-3xl relative'>

                                <h2 className='font-bold lg:text-2xl text-2xl leading-loose text-blue place-self-center text-center'>Webinar:<br></br><span className='font-light'>Metaverse & Web 3.0</span></h2>

                            </div> */}

                            <div className='grid grid-flow-col grid-cols-1 gap-[1em] place-content-center place-self-center lg:h-[30em] lg:w-[28em] w-[20em] h-[25em]  InfoContainer rounded-3xl relative'>

                                <div className='absolute w-[100%] h-[100%] bg-slate-400 rounded-3xl bg-[url("../public/post.webp")] bg-center bg-cover bg-no-repeat'>

                                </div>

                                <a href="" target="_blank" rel="noreferrer"  className='grid place-content-center absolute w-[100%] h-[100%] bg-blue bg-opacity-80 rounded-3xl z-10 lg:opacity-0 hover:opacity-100 ease-in-out duration-500 gap-y-[2em]'>

                                    <h2 className='font-bold lg:text-2xl text-2xl leading-loose text-white place-self-center text-center textShadow'>Webinar:<br></br><span className='font-medium'>Metaverse & Web 3.0</span></h2>

                                    <div className='w-[2em] h-[2em] place-self-center'>
                                    
                                        <Image src={LinkIcon} alt="img"></Image>

                                    </div>

                                </a>

                            </div>

                        </div>

                </SwiperSlide>   

            </Swiper>

            <div className="grid grid-flow-col place-self-center place-content-center absolute justify-between lg:w-[80vw] w-[95vw] z-10">

                    <div className="cursor-pointer scale-x-[-1] lg:w-[2em] w-[1em]" onClick={() => swiperRef.current.swiper.slidePrev()}>

                        <Image src={arrowNext} alt="img"></Image>

                    </div>
                    
                    <div className="cursor-pointer lg:w-[2em] w-[1em]" onClick={() => swiperRef.current.swiper.slideNext()}>

                        <Image src={arrowNext} alt="img"></Image>

                    </div>
                </div>    
            

            

        </>
    )
}