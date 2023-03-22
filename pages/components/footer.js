import Head from 'next/head'
import Image from 'next/image'
import FooterIllus from '/public/footer-illus.webp'
import Instagram from '/public/instagram.webp'
import Facebook from '/public/facebook.webp'
import LinkedIn from '/public/linkedin.webp'
import Twitter from '/public/Twitter.webp'
import Youtube from '/public/youtube.webp'
import Link from 'next/link'


export default function Footer() {
  return (
        <>

            <h2 className='text-white font-extrabold opacity-50 text-[2em] textShadow absolute top-[5rem] lg:top-[3rem] 2xl:top-[5rem] lg:left-[3rem] 2xl:left-[5rem] place-self-center text-center'>Thank You for Visiting !</h2>

            <h2 className='text-white font-extrabold opacity-50 text-[2em] textShadow absolute bottom-[5rem] lg:bottom-[3rem] 2xl:bottom-[5rem] lg:right-[3rem] 2xl:right-[5rem] place-self-center text-center'>Thank You for Visiting !</h2>

            <div className='absolute lg:w-[28em] w-[10em] h-[auto] place-self-center lg:right-[10em] bottom-[13em] lg:bottom-[auto]'>
                <Image src={FooterIllus} alt="img"></Image>
            </div>

            <div className='grid grid-flow-row place-self-center lg:place-content-start place-content-center absolute lg:left-[10em] gap-y-[5em] top-[13em] lg:top-[auto]'>

                <div className='grid grid-flow-col place-content-center lg:gap-x-[7em] gap-x-[2em]'>

                    <ul className='grid grid-flow-row lg:text-base text-sm'>

                        <li className='text-white opacity-80 textShadow font-bold text-2xl'>Other Links</li>
                    
                        <li className='mt-[1.5em]'><Link href='/referral'><span className='cursor-pointer text-blue font-semibold text-base'>Client Referral</span></Link></li>
                    
                        <li className='mt-[1.5em]'><Link href='/events-blogs'><span className='cursor-pointer text-blue font-semibold text-base'>Events & Blogs</span></Link></li>
                    
                        <li className='mt-[1.5em]'><Link href='/startup-support'><span className='cursor-pointer text-blue font-semibold text-base'>Startup Support</span></Link></li>

                    </ul>

                    <ul className='grid grid-flow-row lg:text-base text-sm'>

                        <li className='text-white opacity-80 textShadow font-bold text-2xl'>About</li>
                    
                        <li className='mt-[1.5em]'><Link href='/privacyPolicy'><span className='cursor-pointer text-blue font-semibold text-base'>Privacy</span></Link></li>
                    
                        <li className='mt-[1.5em]'><Link href='/terms'><span className='cursor-pointer text-blue font-semibold text-base'>Terms & Conditions</span></Link></li>
                    
                        <li className='mt-[1.5em]'><Link href='/#contact'><span className='cursor-pointer text-blue font-semibold text-base'>Contact Us</span></Link></li>

                    </ul>

                </div>

                <div className='grid grid-flow-col h-[3em] w-[auto] ml-0 p-0 place-content-center lg:place-content-start lg:gap-x-[2em] gap-x-[0.3em] items-center'>
                    <div className=' w-[4em] ml-[-0.3em]  pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]'><a href='https://www.instagram.com/neolen_services/' target="_blank" rel="noreferrer"><Image src={Instagram} alt="img"></Image></a></div>
                    <div className=' w-[4em]  pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]'><a href='https://twitter.com/neolen_services' target="_blank" rel="noreferrer"><Image src={Twitter} alt="img"></Image></a></div>
                    <div className=' w-[4em]  pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]'><a href='https://www.facebook.com/Neolenofficial/' target="_blank" rel="noreferrer"><Image src={Facebook} alt="img"></Image></a></div>
                    <div className=' w-[4em] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]'><a href='https://www.linkedin.com/company/neolen/' target="_blank" rel="noreferrer"><Image src={LinkedIn} alt="img"></Image></a></div>
                    <div className=' w-[4em] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]'><a href='https://www.youtube.com/@neolentechnologies6331' target="_blank" rel="noreferrer"><Image src={Youtube} alt="img"></Image></a></div>
                </div>

            </div>

        </>
  )
}