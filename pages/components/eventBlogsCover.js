import Head from 'next/head'
import Image from 'next/image'
import Nav from './nav'
import ArrowButton from '/public/arrow-button.webp'
import Instagram from '/public/instagram.webp'
import Facebook from '/public/facebook.webp'
import LinkedIn from '/public/linkedin.webp'
import Twitter from '/public/Twitter.webp'
import CoverEvents from '/public/eventCover.webp'
import Youtube from '/public/youtube.webp'



export default function EventBlogsCover() {
  return (
        <div id='home' className='background-main background-cover grid place-content-center'>
            <Nav></Nav>
            <div className='absolute lg:left-[10.7em] lg:top-[25%] top-[16%] text-center lg:text-left lg:block grid place-content-center place-self-center'>
                <h1 className='font-extrabold lg:text-[3.7em] text-[3em] leading-tight text-blue place-self-center'>Latest Events <br></br>& Blogs</h1>
                <p className='lg:w-[28em] w-[25em] leading-[1.8em] mt-[1.7em] text-blue font-normal lg:text-sm text-sm lg:place-self-start place-self-center'>Neolen is a community of experts that provides support as well as required opportunities to the community. We envision assisting the founders of extraordinary products and services which can overtake the marketplace.</p>
                <div className='hidden lg:grid grid-flow-col h-[3em] w-[auto] ml-0 lg:mt-[3.7em] mt-[2em] p-0 place-content-center lg:place-content-start items-center'>
                    <div className=' w-[2.3em] ml-[-0.3em] mr-[1.5em] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]'><a href='https://www.instagram.com/neolen_services/' target="_blank" rel="noreferrer"><Image src={Instagram} alt="img"></Image></a></div>
                    <div className=' w-[2.3em] mr-[1.5em] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]'><a href='https://twitter.com/neolen_services' target="_blank" rel="noreferrer"><Image src={Twitter} alt="img"></Image></a></div>
                    <div className=' w-[2.3em] mr-[1.5em] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]'><a href='https://www.facebook.com/Neolenofficial/' target="_blank" rel="noreferrer"><Image src={Facebook} alt="img"></Image></a></div>
                    <div className=' w-[2.3em] lg:mr-[1.5em] mr-[0] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]'><a href='https://www.linkedin.com/company/neolen/' target="_blank" rel="noreferrer"><Image src={LinkedIn} alt="img"></Image></a></div>
                    <div className=' w-[2.3em] lg:mr-[1.5em] mr-[0] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]'><a href='https://www.youtube.com/@neolentechnologies6331' target="_blank" rel="noreferrer"><Image src={Youtube} alt="img"></Image></a></div>
                </div>
            </div>
            <div className=' place-self-center absolute lg:w-[33em] w-[20em] lg:h-[32em] h-[auto] lg:top-[7em] lg:right-[7em] bottom-[5em] grid place-content-center'>
                
                <Image src={CoverEvents} alt="img"></Image>

                


            </div>
        </div>
  )
}