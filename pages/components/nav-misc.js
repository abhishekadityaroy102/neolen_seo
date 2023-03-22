import Head from 'next/head'
import Image from 'next/image'
import LogoIcon from "/public/logo-w.webp"
import Link from 'next/link'


export default function NavMisc() {
  return (
    <div className='absolute w-full h-[5em] lg:top-[2.5em] top-[2em]'>
        <div className=' relative grid place-content-center align-middle'>  
            <Link href='/' scroll={true}>
                <div className='cursor-pointer w-[18em] h-auto lg:left-[5.5em] left-[1em] absolute'>
                    <Image  src={LogoIcon} alt="img"></Image>
                </div>
            </Link>
            <div  className='absolute right-[1em] lg:right-[5.5em] flex flex-row top-[1em]'>
                <li className='nav-disable text-blue text-base  mt-[0.5em] font-semibold mr-[2.2em] cursor-pointer lg:grid hidden grid-1 place-content-center'><Link href='/referral'>Referral</Link><span className=' w-0 h-0 px-[4px] py-[4px] m-[0.1em] rounded-full bg-blue place-self-center'></span></li>
                <button className='bg-white py-[0.6em] px-[1.2em] button-shadow m-0 rounded-full text-blue text-base font-semibold hover:bg-blue hover:text-white ease-in-out duration-300'><a href='#contact'>Contact Us</a></button>
            </div>
        </div>
    </div>
  )
}