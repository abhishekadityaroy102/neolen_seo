import Head from 'next/head'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

import { useRef } from "react";

import SwiperCore, { Navigation } from "swiper";


import arrowNext from '/public/arrow-next.webp'
import LinkIcon from '/public/linkicon.webp'
import Link from 'next/link';


SwiperCore.use([Navigation]);

export default function Blogs() {

    const swiperRef = useRef(null);

    return (
        
        <>

            <h2 className='text-white font-extrabold opacity-50 text-[2.3em] textShadow absolute top-[5rem] lg:top-[3rem] 2xl:top-[5rem] lg:left-[3rem] 2xl:left-[5rem] place-self-center'>Blogs</h2>

            <h2 className='text-white font-extrabold opacity-50 text-[2.3em] textShadow absolute bottom-[5rem] lg:bottom-[3rem] 2xl:bottom-[5rem] lg:right-[3rem] 2xl:right-[5rem] place-self-center'>Blogs</h2>
            

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

                <SwiperSlide className='grid grid-flow-row gap-[1em]  place-content-center place-self-center relative w-[28em] bg-slate-00'>

                        <Link href="https://blogs.neolen.com/2023/02/07/transform-your-workflow-with-ai-lead-generation-streamline-optimize-and-succeed/" target="_blank" className='grid grid-flow-row gap-y-[1em] w-[auto] place-self-center place-content-center'>

                            <a target="_blank" rel="noreferrer" className='grid lg:grid-flow-col lg:grid-cols-2 gap-[-1em] place-content-center place-self-center lg:h-[14em] h-[23em] lg:w-[28em] w-[20em] InfoContainer rounded-3xl relative px-[1em] hover:bg-opacity-80 hover:bg-white ease-in-out duration-500 cursor-pointer'>
                                

                                <div className='lg:w-[10em] lg:h-[10em] w-[18em] h-[8em] rounded-3xl blog-background-1 bg-no-repeat bg-center bg-cover absolute place-self-center lg:left-[1em] top-[1em] lg:top-[auto]'>

                                </div>

                                <div className=' grid grid-flow-row place-content-center lg:w-[14.5em] lg:h-[10em] place-self-center lg:right-[1em] absolute gap-y-[1em] w-[18em] bottom-[1em] lg:bottom-[auto]'>
                                    
                                    <h2 className='font-bold lg:text-[1em] text-[1em] leading-tight text-blue place-self-start text-left'>Transform Your Workflow with AI Lead Generation: Streamline, Optimize, and Succeed</h2> 
                                    

                                    <p className='font-normal text-sm text-blue'>AI lead generation is the use of artificial intelligence technology to identify and qualify potential customers, also known as leads.…</p>
                                   

                                </div>          

                            </a>
                            

                        </Link>



                        <Link href="https://blogs.neolen.com/2023/01/08/converting-text-to-video-with-high-resolution/" target="_blank" className='grid grid-flow-row gap-y-[1em] w-[auto] place-self-center place-content-center'>

                            <a  target="_blank" rel="noreferrer" className='grid lg:grid-flow-col lg:grid-cols-2 gap-[-1em] place-content-center place-self-center lg:h-[14em] h-[23em] lg:w-[28em] w-[20em] InfoContainer rounded-3xl relative px-[1em] hover:bg-opacity-80 hover:bg-white ease-in-out duration-500 cursor-pointer'>
    

                            <div className='lg:w-[10em] lg:h-[10em] w-[18em] h-[8em] rounded-3xl blog-background-2 bg-no-repeat bg-center bg-cover absolute place-self-center lg:left-[1em] top-[1em] lg:top-[auto]'>

                            </div>

                            <div className=' grid grid-flow-row place-content-center lg:w-[14.5em] lg:h-[10em] place-self-center lg:right-[1em] absolute gap-y-[1em] w-[18em] bottom-[1em] lg:bottom-[auto]'>
                                
                                <h2 className='font-bold lg:text-[1em] text-[1em] leading-tight text-blue place-self-start text-left'>Converting Text to Video with High Resolution.</h2> 
                                

                                <p className='font-normal text-sm text-blue'>Converting Text-to-video has always seemed like a frivolous and extremely difficult endeavour, the existing technology offers barely any choices or options when it comes to such conversions.....</p>
                            

                            </div>          

                            </a>


                        </Link>

                        </SwiperSlide>

                    <SwiperSlide className='grid grid-flow-row gap-[1em]  place-content-center place-self-center relative w-[28em] bg-slate-00'>

<Link href="https://blogs.neolen.com/2023/01/08/measuring-the-trp-of-any-show-channel-or-movie-with-an-accuracy-of-up-to-98/" target="_blank" className='grid grid-flow-row gap-y-[1em] w-[auto] place-self-center place-content-center'>

<a target="_blank" rel="noreferrer" className='grid lg:grid-flow-col lg:grid-cols-2 gap-[-1em] place-content-center place-self-center lg:h-[14em] h-[23em] lg:w-[28em] w-[20em] InfoContainer rounded-3xl relative px-[1em] hover:bg-opacity-80 hover:bg-white ease-in-out duration-500 cursor-pointer'>
    

    <div className='lg:w-[10em] lg:h-[10em] w-[18em] h-[8em] rounded-3xl blog-background-3 bg-no-repeat bg-center bg-cover absolute place-self-center lg:left-[1em] top-[1em] lg:top-[auto]'>

    </div>

    <div className=' grid grid-flow-row place-content-center lg:w-[14.5em] lg:h-[10em] place-self-center lg:right-[1em] absolute gap-y-[1em] w-[18em] bottom-[1em] lg:bottom-[auto]'>
        
        <h2 className='font-bold lg:text-[1em] text-[1em] leading-tight text-blue place-self-start text-left'>Measuring the TRP of any   show with an accuracy of up to 98%</h2> 
        

        <p className='font-normal text-sm text-blue'>One of the most crucial aspects of any media company or channel is measuring TRP because it can be used to determine entertainment ratings.....</p>
       

    </div>          

</a>


</Link>
<Link href="https://blogs.neolen.com/2023/01/08/resume-breakdown-and-matching-them-with-the-perfect-work-opportunities/" target="_blank" className='grid grid-flow-row gap-y-[1em] w-[auto] place-self-center place-content-center'>

<a  target="_blank" rel="noreferrer" className='grid lg:grid-flow-col lg:grid-cols-2 gap-[-1em] place-content-center place-self-center lg:h-[14em] h-[23em] lg:w-[28em] w-[20em] InfoContainer rounded-3xl relative px-[1em] hover:bg-opacity-80 hover:bg-white ease-in-out duration-500 cursor-pointer'>
    

    <div className='lg:w-[10em] lg:h-[10em] w-[18em] h-[8em] rounded-3xl blog-background-4 bg-no-repeat bg-center bg-cover absolute place-self-center lg:left-[1em] top-[1em] lg:top-[auto]'>

    </div>

    <div className=' grid grid-flow-row place-content-center lg:w-[14.5em] lg:h-[10em] place-self-center lg:right-[1em] absolute gap-y-[1em] w-[18em] bottom-[1em] lg:bottom-[auto]'>
        
        <h2 className='font-bold lg:text-[1em] text-[1em] leading-tight text-blue place-self-start text-left'>Resume breakdown and matching them with the perfect work opportunities.</h2> 
        

        <p className='font-normal text-sm text-blue'>The perfect CV requires weeks of laborious work and ingenuity, but even with all that effort, getting your dream job still requires more than just the perfect resume....</p>




        
       

    </div>          

</a>


</Link>
</SwiperSlide>


                <SwiperSlide className='grid grid-flow-row gap-[1em]  place-content-center place-self-center relative w-[28em] bg-slate-00'>

                    <Link href="https://blogs.neolen.com/2023/02/07/developing-a-script-to-video-tool-for-limitless-video-content-creation/" target="_blank" className='grid grid-flow-row gap-y-[1em] w-[auto] place-self-center place-content-center'>

                        <a target="_blank" rel="noreferrer" className='grid lg:grid-flow-col lg:grid-cols-2 gap-[-1em] place-content-center place-self-center lg:h-[14em] h-[23em] lg:w-[28em] w-[20em] InfoContainer rounded-3xl relative px-[1em] hover:bg-opacity-80 hover:bg-white ease-in-out duration-500 cursor-pointer'>
                            

                            <div className='lg:w-[10em] lg:h-[10em] w-[18em] h-[8em] rounded-3xl blog-background-5 bg-no-repeat bg-center bg-cover absolute place-self-center lg:left-[1em] top-[1em] lg:top-[auto]'>

                            </div>

                            <div className=' grid grid-flow-row place-content-center lg:w-[14.5em] lg:h-[10em] place-self-center lg:right-[1em] absolute gap-y-[1em] w-[18em] bottom-[1em] lg:bottom-[auto]'>
                                
                                <h2 className='font-bold lg:text-[1em] text-[1em] leading-tight text-blue place-self-start text-left'>Developing a script to video tool for limitless video content creation.</h2> 
                                

                                <p className='font-normal text-sm text-blue'>Picture software that transforms the video production industry as we know it. Envision a virtual encyclopedia for all your video…</p>
                                

                            </div>          

                        </a>
                        

                    </Link>



                    <Link href="https://blogs.neolen.com/2023/02/07/creating-indias-number-1-online-olympiads-platform-capable-of-handling-100000-users/" target="_blank" className='grid grid-flow-row gap-y-[1em] w-[auto] place-self-center place-content-center'>

                        <a  target="_blank" rel="noreferrer" className='grid lg:grid-flow-col lg:grid-cols-2 gap-[-1em] place-content-center place-self-center lg:h-[14em] h-[23em] lg:w-[28em] w-[20em] InfoContainer rounded-3xl relative px-[1em] hover:bg-opacity-80 hover:bg-white ease-in-out duration-500 cursor-pointer'>


                        <div className='lg:w-[10em] lg:h-[10em] w-[18em] h-[8em] rounded-3xl blog-background-6 bg-no-repeat bg-center bg-cover absolute place-self-center lg:left-[1em] top-[1em] lg:top-[auto]'>

                        </div>

                        <div className=' grid grid-flow-row place-content-center lg:w-[14.5em] lg:h-[10em] place-self-center lg:right-[1em] absolute gap-y-[1em] w-[18em] bottom-[1em] lg:bottom-[auto]'>
                            
                            <h2 className='font-bold lg:text-[1em] text-[1em] leading-tight text-blue place-self-start text-left'>Creating India’s number 1 online Olympiads platform capable of handling 100,000 users.</h2> 
                            

                            <p className='font-normal text-sm text-blue'>A company that offers online Olympiads is a game-changer in the world of education and assessment. This level of flexibility…</p>
                        

                        </div>          

                        </a>


                    </Link>

                </SwiperSlide>

                <SwiperSlide className='grid grid-flow-row gap-[1em]  place-content-center place-self-center relative w-[28em] bg-slate-00'>

                    <Link href="https://blogs.neolen.com/2023/01/23/creating-a-personalised-metaverse-for-hosting-strategic-games-and-sports-betting/" target="_blank" className='grid grid-flow-row gap-y-[1em] w-[auto] place-self-center place-content-center'>

                        <a target="_blank" rel="noreferrer" className='grid lg:grid-flow-col lg:grid-cols-2 gap-[-1em] place-content-center place-self-center lg:h-[14em] h-[23em] lg:w-[28em] w-[20em] InfoContainer rounded-3xl relative px-[1em] hover:bg-opacity-80 hover:bg-white ease-in-out duration-500 cursor-pointer'>
                            

                            <div className='lg:w-[10em] lg:h-[10em] w-[18em] h-[8em] rounded-3xl blog-background-7 bg-no-repeat bg-center bg-cover absolute place-self-center lg:left-[1em] top-[1em] lg:top-[auto]'>

                            </div>

                            <div className=' grid grid-flow-row place-content-center lg:w-[14.5em] lg:h-[10em] place-self-center lg:right-[1em] absolute gap-y-[1em] w-[18em] bottom-[1em] lg:bottom-[auto]'>
                                
                                <h2 className='font-bold lg:text-[1em] text-[1em] leading-tight text-blue place-self-start text-left'>Creating a personalised Metaverse for hosting strategic games and sports betting.</h2> 
                                

                                <p className='font-normal text-sm text-blue'>Creating a virtual platform that seamlessly blends technology and design is no small feat.</p>
                                

                            </div>          

                        </a>
                        

                    </Link>



                    <Link href="https://blogs.neolen.com/2023/01/24/top-10-sale-lead-generation-tools-in-the-market/" target="_blank" className='grid grid-flow-row gap-y-[1em] w-[auto] place-self-center place-content-center'>

                        <a  target="_blank" rel="noreferrer" className='grid lg:grid-flow-col lg:grid-cols-2 gap-[-1em] place-content-center place-self-center lg:h-[14em] h-[23em] lg:w-[28em] w-[20em] InfoContainer rounded-3xl relative px-[1em] hover:bg-opacity-80 hover:bg-white ease-in-out duration-500 cursor-pointer'>


                        <div className='lg:w-[10em] lg:h-[10em] w-[18em] h-[8em] rounded-3xl blog-background-8 bg-no-repeat bg-center bg-cover absolute place-self-center lg:left-[1em] top-[1em] lg:top-[auto]'>

                        </div>

                        <div className=' grid grid-flow-row place-content-center lg:w-[14.5em] lg:h-[10em] place-self-center lg:right-[1em] absolute gap-y-[1em] w-[18em] bottom-[1em] lg:bottom-[auto]'>
                            
                            <h2 className='font-bold lg:text-[1em] text-[1em] leading-tight text-blue place-self-start text-left'>Top 10 sale lead generation tools in the market.</h2> 
                            

                            <p className='font-normal text-sm text-blue'>Welcome to the exciting world of sales lead generation. Whether you’re a small business owner just starting out, or a seasoned sales professional looking to take your game to the next level...</p>
                        

                        </div>          

                        </a>


                    </Link>

                </SwiperSlide>

                <SwiperSlide className='grid grid-flow-row gap-[1em]  place-content-center place-self-center relative w-[28em] bg-slate-00'>

                    <Link href="https://blogs.neolen.com/2023/01/29/efficiency-productivity-and-cost-savings-combating-business-losses-with-ai-lead-generation-tools/" target="_blank" className='grid grid-flow-row gap-y-[1em] w-[auto] place-self-center place-content-center'>

                        <a target="_blank" rel="noreferrer" className='grid lg:grid-flow-col lg:grid-cols-2 gap-[-1em] place-content-center place-self-center lg:h-[14em] h-[23em] lg:w-[28em] w-[20em] InfoContainer rounded-3xl relative px-[1em] hover:bg-opacity-80 hover:bg-white ease-in-out duration-500 cursor-pointer'>
                            

                            <div className='lg:w-[10em] lg:h-[10em] w-[18em] h-[8em] rounded-3xl blog-background-9 bg-no-repeat bg-center bg-cover absolute place-self-center lg:left-[1em] top-[1em] lg:top-[auto]'>

                            </div>

                            <div className=' grid grid-flow-row place-content-center lg:w-[14.5em] lg:h-[10em] place-self-center lg:right-[1em] absolute gap-y-[1em] w-[18em] bottom-[1em] lg:bottom-[auto]'>
                                
                                <h2 className='font-bold lg:text-[1em] text-[1em] leading-tight text-blue place-self-start text-left'>Combating business losses with AI lead generation tools.</h2> 
                                

                                <p className='font-normal text-sm text-blue'>AI lead generation is the use of artificial intelligence technology to identify and qualify potential customers, also known as leads....</p>
                                

                            </div>          

                        </a>
                        

                    </Link>


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