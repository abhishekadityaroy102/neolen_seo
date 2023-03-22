import Head from 'next/head'
import Image from 'next/image'
import Nav from './nav'
import ArrowButton from '/public/arrow-button.webp'
import Instagram from '/public/instagram.webp'
import Facebook from '/public/facebook.webp'
import LinkedIn from '/public/linkedin.webp'
import Twitter from '/public/Twitter.webp'
import Blog_4_1 from '/public/blog-4-1.jpg'




export default function BlogCover4(){
  return (
        <div id='home' className=' background-blog grid place-content-start pb-[5em]'>
            <Nav></Nav>
            <div className='grid relative place-content-center place-self-center w-[100%] grid-flow-row lg:grid-flow-col lg:justify-center lg:px-[5em] mt-[10em] mb-[5em] gap-x-[2em]'>
                <div className='text-center lg:text-left lg:block grid place-content-center place-self-center'>
                    <h1 className='font-extrabold lg:text-[2.5em] text-[3em] leading-tight text-blue place-self-center'>Resume breakdown<br></br>and matching them<br></br>with the perfect<br></br>work opportunities.</h1>
                    <p className='lg:w-[28em] w-[25em] leading-[1.8em] mt-[0em] text-blue font-normal lg:text-sm text-sm lg:place-self-start place-self-center'><strong>Shubkarman</strong>  ----- January 8, 2023</p>
                    <div className='grid grid-flow-col h-[3em] w-[auto] ml-0 lg:mt-[2em] mt-[1em] p-0 place-content-center lg:place-content-start'>
                        <div className=' w-[2.3em] ml-[-0.3em] mr-[1.5em] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]'><a href='https://www.instagram.com/neolen_services/' target="_blank" rel="noreferrer"><Image src={Instagram} alt="img"></Image></a></div>
                        <div className=' w-[2.3em] mr-[1.5em] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]'><a href='https://twitter.com/neolen_services' target="_blank" rel="noreferrer"><Image src={Twitter} alt="img"></Image></a></div>
                        <div className=' w-[2.3em] mr-[1.5em] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]'><a href='https://www.facebook.com/Neolenofficial/' target="_blank" rel="noreferrer"><Image alt="img" src={Facebook}></Image></a></div>
                        <div className=' w-[2.3em] lg:mr-[1.5em] mr-[0] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]'><a href='https://www.linkedin.com/company/neolen/' target="_blank" rel="noreferrer"><Image src={LinkedIn} alt="img"></Image></a></div>
                    </div>
                </div>
            
                <div className=' place-self-center lg:w-[40em] w-[20em] lg:h-[auto] h-[auto] grid place-content-center bg-[#ffffff94] rounded-xl p-[2em]'>
                    
                    <Image src={Blog_4_1} alt="img"></Image>

                </div>
            </div>

            <div className='grid place-content-center bg-white lg:mx-[10em] mx-[1em] px-[1em] bg-[#ffffff94] lg:px-[20em] py-[3em] rounded-md'>

                <p className='text-base my-[1em]'>
                The perfect CV requires weeks of laborious work and ingenuity, but even with all that effort, getting your dream job still requires more than just the perfect resume.
                <br></br><br></br>
                We have solved this problem by developing technology that perfectly analyses every element of your CV and classifies them so that it can provide the finest employment opportunities based on your qualifications and experience, making it the perfect companion for you on your job hunt.
                <br></br><br></br>
                A case study on CV analysing and recommending job opportunities based on it:
                </p>

                <h2 className='my-[1em] text-2xl font-semibold'>
                Business impact:
                </h2>

                <p className='text-base my-[1em]'>
                &emsp;1. The website observed a 42% increase in users by optimally recommending job or internship opportunities to candidates.

                <br></br><br></br>
                &emsp;2. Successfully paired candidates with relevant experience and skills to their corresponding work opportunities.
 
                <br></br><br></br>
                &emsp;3. Increase of 23% in overall net revenue as the number of candidates using the company’s business increased.
                
                <br></br><br></br>
                &emsp;4. Provided optimised resumes that are analysed and categorised according to their relevance and competency, thus improving the likelihood that candidates will be hired.
                <br></br><br></br>
                </p>

                <h2 className='my-[1em] text-2xl font-semibold'>
                Challenges faced
                </h2>

                <p className='text-base my-[1em]'>
                A resume is an essential tool in a job hunt since it gives you one or two pages to emphasise your greatest and most pertinent skills and qualities.
                <br></br><br></br>
                Making the ideal CV is no easy work, but it has the capacity to open doors to one’s future.
                <br></br><br></br>
                Given the number of resume-building websites available today, we advance the practice by offering a resume analyzer that matches job searchers with the ideal employment possibilities based on their background, qualifications and skills.    
                <br></br><br></br>
                Challenges faced during analysing and matching
                <br></br><br></br>
                &emsp;1. Skill categorisation
                <br></br><br></br>
                With the number of skills listed on each resume, finding and categorising the skills according to their relevance is an incredibly tough task.
                <br></br><br></br>
                &emsp;2. Work opportunity classifications
                <br></br><br></br>
                Given the size of the database for these employment opportunities, it is virtually impossible to match each job or internship opportunity to the ideal résumé.
                <br></br><br></br>
                &emsp;3. Resume analyzing 
                <br></br><br></br>
                Although segmenting a resume into sections for education, experience, and talents is a difficult endeavour, it is essential for analysing and comprehending a resume.
                <br></br><br></br>
                </p>
                
                <h2 className='my-[1em] text-2xl font-semibold'>
                Our solution
                </h2>
                <p className='text-base my-[1em]'>
                We identified numerous elements from the captured images using edge-cutting computer vision algorithms to identify the TV show, movie, or channel being watched.
                <br></br><br></br>
                Our first step to solving these problems was analysing the resume and categorizing it in terms of different sectors and skills.
                <br></br><br></br>
                We further broke down these skills and categorized them based on their relevance and mastery.
                <br></br><br></br>
                After doing so, we matched these analysed resumes with various job openings using structured data from a database.
                <br></br><br></br>
                We provided these recommendations to the respective candidates once their resumes were matched with their ideal employment opportunities, and they used them to further enhance their professional careers.
                </p>
                <h2 className='my-[1em] text-2xl font-semibold'>
                Technology used
                </h2>
                <p className='text-base my-[1em]'>
                We employed a variety of NLP algorithms to recognise names and entities in the resume, such as the candidate’s name, address, prior employers, alma school, etc.
                <br></br><br></br>
                To further increase the efficiency we made some changes in the bidirectional LSTM – CNN algorithm that helped us perfectly analyse the resume.
                <br></br><br></br>
                After dividing the resume, we employed a variety of NLP algorithms to extract information based on our manually compiled training data for thousands of resumes, and we achieved up to 80% accuracy.
                </p>
            </div>
        </div>
  )
}