import Head from 'next/head'
import Image from 'next/image'
import Nav from './nav'
import ArrowButton from '/public/arrow-button.webp'
import Instagram from '/public/instagram.webp'
import Facebook from '/public/facebook.webp'
import LinkedIn from '/public/linkedin.webp'
import Twitter from '/public/Twitter.webp'
import Blog_2_1 from '/public/blog-2-1.jpg'




export default function BlogCover2(){
  return (
        <div id='home' className=' background-blog grid place-content-start pb-[5em]'>
            <Nav></Nav>
            <div className='grid relative place-content-center place-self-center w-[100%] grid-flow-row lg:grid-flow-col lg:justify-center lg:px-[5em] mt-[10em] mb-[5em] gap-x-[2em]'>
                <div className='text-center lg:text-left lg:block grid place-content-center place-self-center'>
                    <h1 className='font-extrabold lg:text-[2.5em] text-[3em] leading-tight text-blue place-self-center'>Converting Text<br></br>to Video with<br></br>High Resolution.</h1>
                    <p className='lg:w-[28em] w-[25em] leading-[1.8em] mt-[0em] text-blue font-normal lg:text-sm text-sm lg:place-self-start place-self-center'><strong>Shubkarman</strong>  ----- January 8, 2023</p>
                    <div className='grid grid-flow-col h-[3em] w-[auto] ml-0 lg:mt-[2em] mt-[1em] p-0 place-content-center lg:place-content-start'>
                        <div className=' w-[2.3em] ml-[-0.3em] mr-[1.5em] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]'><a href='https://www.instagram.com/neolen_services/' target="_blank" rel="noreferrer"><Image src={Instagram} alt="img"></Image></a></div>
                        <div className=' w-[2.3em] mr-[1.5em] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]'><a href='https://twitter.com/neolen_services' target="_blank" rel="noreferrer"><Image src={Twitter} alt="img"></Image></a></div>
                        <div className=' w-[2.3em] mr-[1.5em] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]'><a href='https://www.facebook.com/Neolenofficial/' target="_blank" rel="noreferrer"><Image alt="img" src={Facebook}></Image></a></div>
                        <div className=' w-[2.3em] lg:mr-[1.5em] mr-[0] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]'><a href='https://www.linkedin.com/company/neolen/' target="_blank" rel="noreferrer"><Image src={LinkedIn} alt="img"></Image></a></div>
                    </div>
                </div>
            
                <div className=' place-self-center lg:w-[40em] w-[20em] lg:h-[auto] h-[auto] grid place-content-center bg-[#ffffff94] rounded-xl p-[2em]'>
                    
                    <Image src={Blog_2_1}  alt="img"></Image>

                </div>
            </div>

            <div className='grid place-content-center bg-white lg:mx-[10em] mx-[1em] px-[1em] bg-[#ffffff94] lg:px-[20em] py-[3em] rounded-md'>

                <p className='text-base my-[1em]'>
                Converting Text-to-video has always seemed like a frivolous and extremely difficult endeavour, the existing technology offers barely any choices or options when it comes to such conversions.
                <br></br><br></br>
                By developing a technology that gives audio and video options while preserving exceptionally high quality during the conversions, we rose to the task and exceeded our own expectations.
                <br></br><br></br>
                A case study of converting text to video while keeping high resolution and achieving high-efficiency results.
                </p>

                <h2 className='my-[1em] text-2xl font-semibold'>
                Business impact:
                </h2>

                <p className='text-base my-[1em]'>
                &emsp;1. Successfully converted complex texts into videos with high accuracy and resolution, leading to increased revenue growth by 34%.

                <br></br><br></br>
                &emsp;2. Achieved excellent accuracy lip-syncing utilising a variety of techniques that successfully incorporated different texts, which resulted in better-performing videos.
 
                <br></br><br></br>
                &emsp;3. Integrated various languages into the text-to-video converter so as to include a wider range of audience, thereby increasing users on the website by 45%.
                
                <br></br><br></br>
                &emsp;4. Helped increase conversion choices by offering various voice and video options.
                <br></br><br></br>

                Neoverse uses Blockchain technology to secure any claim that needs to be kept. Every challenge in Neoverse will be a Game Smart Contract, which guarantees ownership, security, and transparency. The winner will receive ownership of the assets used in the challenge thanks to Neoverse blockchain technology. The public blockchain will record game inputs so that anybody may verify the outcome.
                <br></br><br></br>
                &emsp;5. Conflict between two groups will be taken care of by the chosen representatives.
                <br></br><br></br>
                Every group in the Neoverse will elect a leader who will be in charge of all of the organization’s resources. Any group leader will have ownership access to all of the group’s resources. Any assets cannot be wagered in the challenge or transferred to accounts without the leader’s approval.The squad can select its own captains and the players who will represent it in a challenge against another team.
                </p>

                <h2 className='my-[1em] text-2xl font-semibold'>
                Challenges faced
                </h2>

                <p className='text-base my-[1em]'>
                Converting text to video is an incredibly difficult task that requires using various state-of-the-art technology to detect various features and then converting them into a video form.
                <br></br><br></br>
                However, we were able to accurately and precisely translate these writings into videos utilising our highly sophisticated technology and algorithms.
                <br></br><br></br>
                Challenges faced during conversion
                <br></br><br></br>
                &emsp;1. Recognising language
                <br></br><br></br>
                Finding and analysing the texts requires analysing the writing and putting it through a database to identify the language, thus it is not a simple process and greatly complicates the conversion.
                <br></br><br></br>
                &emsp;2. Lip syncing 
                <br></br><br></br>
                Lip synchronisation is one of the main challenges in text-to-video conversion; although there are many algorithms and programmes for it, they offer incredibly low resolution which is undesirable
                <br></br><br></br>
                &emsp;3. Voices database 
                <br></br><br></br>
                Gathering and using a large database of voices for the conversion is not an easy task. It is essential to provide options for voice selection and speaker type while demonstrating this convergence, making it a very difficult endeavour.
                <br></br><br></br>
                </p>
                <h2 className='my-[1em] text-2xl font-semibold'>
                Our solution
                </h2>
                <p className='text-base my-[1em]'>
                We employed a variety of methods and programmes to solve this text-to-video conversion problem in order to get the desired outcomes.
                <br></br><br></br>
                Such a solution required a large amount of training data and the application of the most recent GAN (Generative Adversarial Network) research. 
                <br></br><br></br>
                After completing these steps, our team turned its attention to achieving high resolution in lip-syncing, which was challenging but ultimately successful.
                <br></br><br></br>
                But we didn’t stop there; we also integrated the conversion and high-resolution lip-syncing into the process to ensure that there was little to no lag, which produced excellent results.
                </p>
                <h2 className='my-[1em] text-2xl font-semibold'>
                Technology used
                </h2>
                <p className='text-base my-[1em]'>
                We started off by recording a ton of data from the most recent GAN (Generative Adversarial Network) research. After analysing and implementing this data, we began utilising lip sync software like Wav2lip.
                <br></br><br></br>
                The drawback of this method was that it provided incredibly low resolutions; to address this, we used tactics such CNN LSTM, SyncNet, and two-stream ConvNet architecture.
                <br></br><br></br>
                We were able to improve Wav2lip’s architecture with the aid of these techniques, which led to better outcomes and significantly higher resolutions.
                </p>
            </div>
        </div>
  )
}