import Head from 'next/head'
import Image from 'next/image'
import StartupOverviewImage from '/public/referalOverview.webp'
import Ststep1 from '/public/stup2.webp'
import Ststep2 from '/public/stup1.webp'
import Ststep3 from '/public/startupCover.webp'

import Line from '/public/line.webp'



export default function StartupOverview() {
    return (
        <div id='portfolio' className='background-overview grid place-content-center'>

            <h2 className='text-white font-extrabold opacity-50 text-[2.3em] textShadow absolute top-[5rem] lg:top-[3rem] 2xl:top-[5rem] lg:left-[3rem] 2xl:left-[5rem] place-self-center'>Overview</h2>
            
            <h2 className='text-white font-extrabold opacity-50 text-[2.3em] textShadow absolute bottom-[5rem] lg:bottom-[3rem] 2xl:bottom-[5rem] lg:right-[3rem] 2xl:right-[5rem] place-self-center'>Overview</h2>

            
            <div className='grid grid-cols-1 gap-y-[13em] w-[60em] bg-slate-00 h[10em] place-self-center'>
            
                <div className='hidden lg:grid grid-flow-col grid-cols-3 gap-[1em] place-content-center col-span-8 lg:min-h-[22em] w-[100%] min-h-[28em] p-5 InfoContainer rounded-3xl relative ease-in-out duration-300'>

                    <div className='absolute top-[2em] lg:top-[auto] lg:left-[3em] grid place-self-center place-content-center '>

                        <h3 className='font-extrabold lg:text-[2em] text-[1.8em] leading-[1.5em] text-blue grid grid-flow-col lg:place-content-start place-content-center'>How can we help you?</h3>

                        <p className=' lg:w-[34em] w-[22em] text-center lg:text-left leading-[1.8em] lg:mt-[2em] mt-[1em] text-blue font-normal lg:text-sm text-sm lg:place-self-start place-self-center'>We look forward to working with early-stage Indian Startups. We provide tech experts to market experts, strategize and add value to their business.<br></br><br></br>Neolen is a community of experts that provides support as well as required opportunities to young startups. We envision assisting the founders of extraordinary products and services which can overtake the marketplace.</p>
                        
                    </div>

                    <div className=' hidden lg:block absolute place-self-center ml-[10em] py-[5em] px-[1.5px] lineShadow opacity-80 rounded-full bg-white'>
                    </div>

                    <div className='grid place-self-center absolute grid-cols-1 gap-[1em] lg:gap-[2em] place-content-center lg:right-[5em] col-span-1 min-h-full top-[10em] lg:top-[auto] bg-slate-00 lg:w-[14em] w-[10em] '>
                        
                        <Image src={StartupOverviewImage} alt="img"></Image>

                    </div>
                    
                </div>

                <div className='grid place-content-center place-self-center gap-x-[20em] lg:grid-flow-col lg:grid-cols-3 gap-y-[5em]'>

                    <div className='hidden lg:grid grid-flow-col gap-x-[19.5em] absolute place-self-center z-[0]'>

                        <Image src={Line} alt="img"></Image>
                        <Image src={Line} alt="img"></Image>

                    </div>

                    <div className='grid grid-flow-row gap-[1em] place-content-center place-self-center lg:min-h-[22em] w-[20em] min-h-[22em] p-5 InfoContainer rounded-3xl relative z-[10]'>
                        
                        <div className='absolute bottom-[1em] lg:w-[18em] w-[auto] place-self-center grid place-content-start grid-flow-row'>

                            <h3 className='font-extrabold lg:text-base text-base leading-[1.5em] text-blue grid grid-flow-col lg:place-self-start w-[auto] lg:text-left text-center'>Get In Touch with<br></br>us and our Experts</h3>

                            <p className=' lg:w-[20em] w-[22em] text-center lg:text-left leading-[1.8em] lg:mt-[1em] mt-[1em] text-blue font-normal lg:text-sm text-sm lg:place-self-start place-self-center'>Our experts will analyze your startup to determine if we can help you.</p>

                        </div>

                        <h3 className='text-white font-extrabold opacity-60 text-[6.5em] right-[0.4em] top-[-0.2em] textShadow absolute place-self-center'>1</h3>

                        <div className='absolute lg:w-[12em] w-[10em] lg:left-[-1em] left-[0em] lg:top-[-3em] top-[-2em]'>

                            <Image src={Ststep1} alt="img"></Image>

                        </div>

                    </div>

                    <div className='grid grid-flow-row gap-[1em] place-content-center place-self-center lg:min-h-[22em] w-[20em] min-h-[22em] p-5 InfoContainer rounded-3xl relative z-[10]'>
                        
                        <div className='absolute bottom-[1em] lg:w-[18em] w-[auto] place-self-center grid place-content-start grid-flow-row'>

                            <h3 className='font-extrabold lg:text-base text-base leading-[1.5em] text-blue grid grid-flow-col lg:place-self-start w-[auto] lg:text-left text-center'>Receive Advice and<br></br>Guidance form our Experts</h3>

                            <p className=' lg:w-[20em] w-[22em] text-center lg:text-left leading-[1.8em] lg:mt-[1em] mt-[1em] text-blue font-normal lg:text-sm text-sm lg:place-self-start place-self-center'>After analyzing your start up, you can get free mentorship sessions from our experts on how can you grow your business.</p>

                        </div>

                        <h3 className='text-white font-extrabold opacity-60 text-[6.5em] right-[0.4em] top-[-0.2em] textShadow absolute place-self-center'>2</h3>

                        <div className='absolute lg:w-[12em] w-[10em] lg:left-[-1em] left-[0em] lg:top-[-3em] top-[-2em]'>

                            <Image src={Ststep2} alt="img"></Image>

                        </div>

                    </div>

                    <div className='grid grid-flow-row gap-[1em] place-content-center place-self-center lg:min-h-[22em] w-[20em] min-h-[22em] p-5 InfoContainer rounded-3xl relative z-[10]'>
                        
                        <div className='absolute bottom-[1em] lg:w-[18em] w-[auto] place-self-center grid place-content-start grid-flow-row'>

                            <h3 className='font-extrabold lg:text-base text-base leading-[1.5em] text-blue grid grid-flow-col lg:place-self-start w-[auto] lg:text-left text-center'>Pave your own path<br></br>to success with Us.</h3>

                            <p className=' lg:w-[20em] w-[22em] text-center lg:text-left leading-[1.8em] lg:mt-[1em] mt-[1em] text-blue font-normal lg:text-sm text-sm lg:place-self-start place-self-center'>Once you are through with the process, we will provide you with any support or resources required.</p>

                        </div>

                        <h3 className='text-white font-extrabold opacity-60 text-[6.5em] right-[0.4em] top-[-0.2em] textShadow absolute place-self-center'>3</h3>

                        <div className='absolute lg:w-[12em] w-[10em] lg:left-[-1em] left-[0em] lg:top-[-3em] top-[-2em]'>

                            <Image src={Ststep3} alt="img"></Image>

                        </div>

                    </div>

                </div>

            </div>         
            



        </div>
    )
}