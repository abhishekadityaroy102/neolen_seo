import Head from 'next/head'
import Image from 'next/image'
import { FaDownload , FaUsers } from "react-icons/fa";
import LinkIcon from "/public/linkicon.webp"


export default function PortfolioDetails(props) {
    return (

        <>

            <div className='absolute top-[3rem] lg:top-[auto] lg:left-[3em] grid place-self-center place-content-center '>

                <h2 className='font-extrabold lg:text-[2.8em] text-[1.8em] leading-[1.2em] text-blue grid grid-flow-col lg:place-content-start place-content-center'>{props.company_name}<a href={props.link} target="_blank" rel="noreferrer" className='grid place-content-center place-self-center pt-[0.1em] ml-[0.3em] w-[0.8em] lg:w-[auto] cursor-pointer'><Image src={LinkIcon} alt="img"></Image></a></h2>

                <p className=' lg:w-[32em] w-[20em] text-center lg:text-left leading-[1.8em] lg:mt-[3em] mt-[1em] text-blue font-normal lg:text-[0.8em] text-sm lg:place-self-start place-self-center'>{props.company_details}</p>

                <div className='grid lg:grid-flow-col grid-flow-row gap-y-[1em] lg:mt-[3em] mt-[1.5em] place-content-center place-self-center'>

                    <p className=' w-[auto] leading-[1.8em] text-blue text-[0.9em] font-semibold grid grid-flow-col place-content-center lg:mr-[3em]'>
                        <FaUsers className='text-[2em] mr-[0.7em]'></FaUsers>{props.users} Users
                    </p>

                    <p className=' w-[auto] leading-[1.8em] text-blue text-[0.9em] font-semibold grid grid-flow-col place-content-center lg:mr-[3em]'>
                        <FaDownload className='text-[1.7em] mr-[0.8em]'></FaDownload>{props.downloads} Downloads
                    </p>

                </div>
                
            </div>

            <div className='grid place-self-center absolute grid-cols-2 gap-[1em] lg:gap-[2em] place-content-center lg:right-[3em] col-span-1 min-h-full top-[10em] lg:top-[auto]'>
                

                <div className= {'bg-cover bg-no-repeat bg-center place-content-center place-self-center lg:h-[18em] lg:w-[12em] h-[14rem] w-[8em] bg-slate-100 ' + props.pic1 + ' rounded-2xl'}>
                </div>

                <div className= {'bg-cover bg-no-repeat bg-center place-content-center place-self-center lg:h-[18em] lg:w-[12em] h-[14rem] w-[8em] bg-slate-100 ' + props.pic2 + ' rounded-2xl'} >
                </div>

            </div>

        </>
    
        )}