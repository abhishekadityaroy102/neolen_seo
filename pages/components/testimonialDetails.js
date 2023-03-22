import Image from 'next/image';



export default function TestimonialDetails(props) {


    return (

        <div className='grid grid-flow-row gap-y-[1em] w-[auto] place-self-center place-content-center'>

            <div className='grid grid-flow-col grid-cols-2 gap-[1em] place-content-center place-self-center lg:h-[12em] h-[20em] lg:w-[28em] w-[20em] InfoContainer rounded-3xl relative'>

                <div className='profile w-[11em] place-self-center place-content-center absolute lg:left-[0em] top-[0em] lg:top-[auto]'><Image src={props.profile} alt="img"></Image></div>

                <div className='grid grid-flow-row grid-row-2 pt-[0.5em] place-self-center place-content-center absolute lg:left-[11em] bottom-[2em] lg:bottom-[auto] text-center lg:text-left'>

                    <div className='grid w-[12em] h-[3em place-self-center lg:place-self-start place-content-center'><Image src={props.logo} alt="img"></Image></div>

                    <h3 className='text-blue text-base font-semibold place-self-center lg:place-self-start mt-[0.5em]'>{props.clientName}<br></br><p className='text-blue text-sm font-light italic place-self-center lg:place-self-start'>{props.designation}</p></h3>
                
                </div>

            </div>

            <div className='grid grid-flow-col grid-cols-2 gap-[1em] place-content-center place-self-center lg:h-[12em] lg:w-[28em] w-[20em] h-[20.5em]  InfoContainer rounded-3xl relative'>

                <p className='px-[1em] lg:px-[2em] leading-[2em] text-blue font-normal text-sm place-self-center absolute lg:text-left text-center'>{props.content}</p>

            </div>

        </div>


    )}