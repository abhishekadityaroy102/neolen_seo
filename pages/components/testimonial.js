import Image from 'next/image'

import gb from '/public/getboarded.webp'

export default function Testimonial() {
    return (
        
        <div id='testimonials' className='background-main background-portfolio grid place-content-center'>

            <h2 className='text-white font-extrabold opacity-50 text-[2.3em] textShadow absolute top-[5rem] lg:top-[3rem] 2xl:top-[5rem] lg:left-[3rem] 2xl:left-[5rem]'>Testimonial</h2>

            <h2 className='text-white font-extrabold opacity-50 text-[2.3em] textShadow absolute bottom-[10rem] lg:bottom-[3rem] 2xl:bottom-[5rem] lg:right-[3rem] 2xl:right-[5rem]'>Testimonial</h2>
                
                <div className='grid grid-flow-col grid-cols-2 gap-x-[1em] place-content-center place-self-center relative'>

                    <div className='grid grid-flow-row gap-y-[1em] w-[100%] place-self-center place-content-center'>
                    
                        <div className='grid grid-flow-col grid-cols-2 gap-[1em] place-content-center place-self-center h-[12em] w-[28em] p-5 InfoContainer rounded-3xl relative'>

                            <div className='profile w-[12em] place-self-start place-content-center absolute left-[-0.5em]'><Image src={""} alt="img"></Image></div>

                            <div className='grid grid-flow-row grid-row-2 pt-[0.5em] place-self-center place-content-center bg-slate-00 absolute right-[2.5em]'>

                                <div className='w-[12em]' ><Image src={gb} alt="img"></Image></div>

                                <h3 className='text-blue text-base font-semibold'>John Doe<br></br><p className='text-blue text-base font-light italic'>Head of Operations ( Getboarded )</p></h3>
                            
                            </div>

                        </div>

                        <div className='grid grid-flow-col grid-cols-2 gap-[1em] place-content-center place-self-center h-[12em] w-[28em] InfoContainer rounded-3xl relative'>

                            <p className='w-[30em] leading-[2em] text-blue font-normal text-sm place-self-center absolute'>“ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. “</p>

                        </div>

                    </div>

                    <div className='grid grid-flow-row gap-y-[1em] w-[100%] place-self-center place-content-center'>
                    
                        <div className='grid grid-flow-col grid-cols-2 gap-[1em] place-content-center place-self-center h-[12em] w-[28em] p-5 InfoContainer rounded-3xl relative'>

                            <div className='profile w-[12em] place-self-start place-content-center absolute left-[-0.5em]'><Image src={""} alt="img"></Image></div>

                            <div className='grid grid-flow-row grid-row-2 pt-[0.5em] place-self-center place-content-center bg-slate-00 absolute right-[2.5em]'>

                                <div className='w-[12em]' ><Image src={gb} alt="img"></Image></div>

                                <h3 className='text-blue text-base font-semibold'>John Doe<br></br><p className='text-blue text-base font-light italic'>Head of Operations ( Getboarded )</p></h3>
                            
                            </div>

                        </div>

                        <div className='grid grid-flow-col grid-cols-2 gap-[1em] place-content-center place-self-center h-[12em] w-[28em] InfoContainer rounded-3xl relative'>

                            <p className='w-[30em] leading-[2em] text-blue font-normal text-sm place-self-center absolute'>“ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. “</p>

                        </div>

                    </div>

                </div>

        </div>
    )
}