import Image from 'next/image'

import LinkIcon from '/public/linkicon.webp'
import Startup from '/public/startupCover.webp'
import Event from '/public/eventCover.webp'


import Link from 'next/link'

export default function OtherLinks() {
    return (
        
        <div id='otherlinks' className='background-main background-portfolio grid place-content-center lg:grid-flow-col gap-x-[2em] '>

            <h2 className='text-white font-extrabold opacity-50 text-[2.3em] textShadow absolute top-[5rem] lg:top-[3rem] 2xl:top-[5rem] lg:left-[3rem] 2xl:left-[5rem] place-self-center text-center'>Startup Support</h2>

            <h2 className='text-white font-extrabold opacity-50 text-[2.3em] textShadow absolute bottom-[5rem] lg:bottom-[3rem] 2xl:bottom-[5rem] lg:right-[3rem] 2xl:right-[5rem] place-self-center text-center'>Events & Blogs</h2>

            <div className='grid lg:grid-flow-col gap-y-[2em] grid-flow-row place-content-center place-self-center'>

                <Link href='/startup-support'>

                    <a className='cursor-pointer InfoContainer hover:bg-white duration-500 ease-in-out rounded-xl lg:w-[25em] w-[20em] h-[23em] lg:h-[20em] grid relative place-content-center lg:place-content-start lg:text-left text-center lg:mt-[8em]'>

                        <div className='lg:ml-[1.5em] lg:mt-[1.5em] grid grid-flow-row place-content-center lg:place-content-start'>

                            <h3 className='mt-[4em] font-extrabold lg:text-2xl text-2xl leading-[1.2em] text-blue grid grid-flow-col lg:place-content-start place-content-center'>Special Support for<br></br>Indian Startups<a href='' className='hidden lg:grid place-content-center place-self-center pt-[0.1em] ml-[1em] w-[0.8em] lg:w-[auto] cursor-pointer'><Image src={LinkIcon} alt="img"></Image></a></h3>

                            <p className='lg:w-[25em] w-[22em] text-center lg:text-left leading-[1.8em] lg:mt-[1em] mt-[1em] text-blue font-normal lg:text-sm text-sm lg:place-self-start place-self-center'>We look forward to working with early-stage Indian Startups. We provide tech experts to market experts, strategize and add value to their business.</p>

                            <div className='absolute place-self-center lg:w-[13em] w-[6em] lg:top-[-8em] top-[1em]'><Image src={Startup} alt="img"></Image></div>

                        </div>

                    </a>

                </Link>

            </div>

            <div className='grid lg:grid-flow-col grid-flow-row place-content-center place-self-center'>

                <Link href='/events-blogs/ '>

                    <a className='cursor-pointer InfoContainer hover:bg-white duration-500 ease-in-out rounded-xl lg:w-[25em] w-[20em] h-[23em] lg:h-[20em] grid relative place-content-center lg:place-content-start lg:text-left text-center lg:mt-[8em] mt-[2em]'>

                        <div className='lg:ml-[1.5em] lg:mt-[1.5em] grid grid-flow-row place-content-center lg:place-content-start'>

                            <h3 className='mt-[4em] font-extrabold lg:text-2xl text-2xl leading-[1.2em] text-blue grid grid-flow-col lg:place-content-start place-content-center'>Check Out our<br></br>Latest Events<a href='' className='hidden lg:grid place-content-center place-self-center pt-[0.1em] ml-[1em] w-[0.8em] lg:w-[auto] cursor-pointer'><Image src={LinkIcon} alt="img"></Image></a></h3>

                            <p className='lg:w-[25em] w-[22em] text-center lg:text-left leading-[1.8em] lg:mt-[1em] mt-[1em] text-blue font-normal lg:text-sm text-sm lg:place-self-start place-self-center'>Neolen is a community of experts that provides latest opportunities to the community. We envision assisting the founders of extraordinary products and services which can overtake the marketplace.</p>

                            <div className='absolute place-self-center lg:w-[13em] w-[5.5em] lg:top-[-8em] top-[1em]'><Image src={Event} alt="img"></Image></div>

                        </div>

                    </a>

                </Link>

                

            </div>

        </div>

    )}