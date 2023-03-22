import Salyi from '/public/Salyi.webp'
import Image from "next/image"
import icon1 from '/public/icon1.webp'
import icon2 from '/public/icon2.webp'
import icon3 from '/public/icon3.webp'
import { Swiper, SwiperSlide } from 'swiper/react';

const Page2 = () => {
  return (
    <div id='contact' className=' background-overview grid place-content-center'>
       
       <div className='absolute lg:left-[10.7em] lg:top-[23%] top-[16%] text-center lg:text-left lg:block grid place-content-center place-self-center gap-y-[2em]'>
              <h2 className='font-extrabold lg:text-[2.5em] text-[1.8em] leading-tight text-blue place-self-center pb-5'>This template includes<br></br>sections for: </h2>
              <div className='place-self-center lg:place-self-start w-[30%] shadow-lg bg-white py-[2px] mb-[10%]'></div>
 
              <div className='grid grid-flow-col place-content-start gap-x-2 gap-y-4'>
              <Image src={icon3} alt="imgarrow"className="place-self-center "/>
              <h5 className='place-self-center lg:w-[28em] w-[25em] leading-[1.8em] mt-[0em] text-blue font-medium lg:text-base text-xl'>Company History & Mission</h5>
              </div>
              <div className='grid grid-flow-col place-content-start gap-x-2 gap-y-4'>
              <Image src={icon3} alt="imgarrow"className="place-self-center "/>
              <h5 className='place-self-center lg:w-[28em] w-[25em] leading-[1.8em] mt-[0em] text-blue font-medium lg:text-base text-xl'>Team Structure</h5>
              </div>
              <div className='grid grid-flow-col place-content-start gap-x-2 gap-y-4'>
              <Image src={icon3} alt="imgarrow"className="place-self-center "/>
              <h5 className='place-self-center lg:w-[28em] w-[25em] leading-[1.8em] mt-[0em] text-blue font-medium lg:text-base text-xl'>Target Market</h5>
              </div>
              <div className='grid grid-flow-col place-content-start gap-x-2 gap-y-4'>
              <Image src={icon3} alt="imgarrow"className="place-self-center "/>
              <h5 className='place-self-center lg:w-[28em] w-[25em] leading-[1.8em] mt-[0em] text-blue font-medium lg:text-base text-xl'>Tools and Software</h5>
              </div>
              <div className='grid grid-flow-col place-content-start gap-x-2 gap-y-4'>
              <Image src={icon3} alt="imgarrow"className="place-self-center "/>
              <h5 className='place-self-center lg:w-[28em] w-[25em] leading-[1.8em] mt-[0em] text-blue font-medium lg:text-base text-xl'>Positioning</h5>
              </div>
              <div className='grid grid-flow-col place-content-start gap-x-2 gap-y-4'>
              <Image src={icon3} alt="imgarrow"className="place-self-center "/>
              <h5 className='place-self-center lg:w-[28em] w-[25em] leading-[1.8em] mt-[0em] text-blue font-medium lg:text-base text-xl'>Marketing Strategy</h5>
              </div>
              <div className='grid grid-flow-col place-content-start gap-x-2 gap-y-4'>
              <Image src={icon3} alt="imgarrow"className="place-self-center "/>
              <h5 className='place-self-center lg:w-[28em] w-[25em] leading-[1.8em] mt-[0em] text-blue font-medium lg:text-base text-xl'>Prospecting Strategy</h5>
              </div>
              <div className='grid grid-flow-col place-content-start gap-x-2 gap-y-4'>
              <Image src={icon3} alt="imgarrow"className="place-self-center "/>
              <h5 className='place-self-center lg:w-[28em] w-[25em] leading-[1.8em] mt-[0em] text-blue font-medium lg:text-base text-xl'>Action Plan</h5>
              </div>
              <div className='grid grid-flow-col place-content-start gap-x-2 gap-y-4'>
              <Image src={icon3} alt="imgarrow"className="place-self-center "/>
              <h5 className='place-self-center lg:w-[28em] w-[25em] leading-[1.8em] mt-[0em] text-blue font-medium lg:text-base text-xl'>Goals</h5>
              </div>
              <div className='grid grid-flow-col place-content-start gap-x-2 gap-y-4'>
              <Image src={icon3} alt="imgarrow"className="place-self-center "/>
              <h5 className='place-self-center lg:w-[28em] w-[25em] leading-[1.8em] mt-[0em] text-blue font-medium lg:text-base text-xl'>Budget</h5>
              </div>
             
              <div className='grid grid-flow-col place-content-start gap-x-2 gap-y-4'>
              <Image src={icon3} alt="imgarrow"className="place-self-center "/>
              <h5 className='place-self-center lg:w-[28em] w-[25em] leading-[1.8em] mt-[0em] text-blue font-medium lg:text-base text-xl'>Sales Cadence</h5>
              </div>
 
            </div>
            {/* <div className="place-self-center absolute lg:w-[30em] w-[16em] h-[auto] lg:top-[5em] lg:right-[10em] bottom-[5em] pb-[40%] ml-[20%] grid place-content-end">
             
              <Image src={icon1} alt="img"></Image>
              </div> */}
            <div className='place-self-center absolute lg:w-[30em] w-[16em] h-[auto] lg:top-[5em] lg:right-[14em] bottom-[5em] grid place-content-center'>
               
                <Image src={Salyi} alt="coverimage"></Image>
            </div>
           
           {/* <div className="place-self-center absolute lg:mr-[10%] lg:w-[30em] w-[16em] h-[auto] pb-[40%] lg:right-[10em] bottom-[5em] grid place-content-start">
            <Image src={icon2} alt="img"></Image>
           
            </div> */}
    </div>
 
  )
}
 
export default Page2


