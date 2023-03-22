import Head from 'next/head'
import Image from 'next/image'
import Nav from './nav'
import ArrowButton from '/public/arrow-button.webp'
import Instagram from '/public/instagram.webp'
import Facebook from '/public/facebook.webp'
import LinkedIn from '/public/linkedin.webp'
import Twitter from '/public/Twitter.webp'
import Blog_3_1 from '/public/blog-3-1.webp'




export default function BlogCover3(){
  return (
        <div id='home' className=' background-blog grid place-content-start pb-[5em]'>
            <Nav></Nav>
            <div className='grid relative place-content-center place-self-center w-[100%] grid-flow-row lg:grid-flow-col lg:justify-center lg:px-[5em] mt-[10em] mb-[5em] gap-x-[1em]'>
                <div className='text-center lg:text-left lg:block grid place-content-center place-self-center'>
                    <h1 className='font-extrabold lg:text-[2.5em] text-[3em] leading-tight text-blue place-self-center'>Measuring the TRP of any show, channel or movie with an accuracy of up to 98%</h1>
                    <p className='lg:w-[28em] w-[25em] leading-[1.8em] mt-[0em] text-blue font-normal lg:text-sm text-sm lg:place-self-start place-self-center'><strong>Shubkarman</strong>  ----- January 8, 2023</p>
                    <div className='grid grid-flow-col h-[3em] w-[auto] ml-0 lg:mt-[2em] mt-[1em] p-0 place-content-center lg:place-content-start'>
                        <div className=' w-[2.3em] ml-[-0.3em] mr-[1.5em] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]'><a href='https://www.instagram.com/neolen_services/' target="_blank" rel="noreferrer"><Image src={Instagram} alt="img"></Image></a></div>
                        <div className=' w-[2.3em] mr-[1.5em] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]'><a href='https://twitter.com/neolen_services' target="_blank" rel="noreferrer"><Image src={Twitter} alt="img"></Image></a></div>
                        <div className=' w-[2.3em] mr-[1.5em] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]'><a href='https://www.facebook.com/Neolenofficial/' target="_blank" rel="noreferrer"><Image alt="img" src={Facebook}></Image></a></div>
                        <div className=' w-[2.3em] lg:mr-[1.5em] mr-[0] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]'><a href='https://www.linkedin.com/company/neolen/' target="_blank" rel="noreferrer"><Image src={LinkedIn} alt="img"></Image></a></div>
                    </div>
                </div>
            
                <div className=' place-self-center lg:w-[40em] w-[20em] lg:h-[auto] h-[auto] grid place-content-center bg-[#ffffff94] rounded-xl p-[2em]'>
                    
                    <Image src={Blog_3_1} alt="img"></Image>

                </div>
            </div>

            <div className='grid place-content-center bg-white lg:mx-[10em] mx-[1em] px-[1em] bg-[#ffffff94] lg:px-[20em] py-[3em] rounded-md'>

                <p className='text-base my-[1em]'>
                One of the most crucial aspects of any media company or channel is measuring TRP because it can be used to determine which TV station and show receive the most viewers or how well-liked they are.
                <br></br><br></br>
                There are many ways to measure TRP, but none of them have precision that comes close to meeting the needs. Nevertheless, we developed a system that measures TRP with an absurdly high accuracy of 98%.
                <br></br><br></br>
                A case study of how the issue of measuring TRP with high accuracy was tackled and solved.
                </p>

                <h2 className='my-[1em] text-2xl font-semibold'>
                Business impact:
                </h2>

                <p className='text-base my-[1em]'>
                &emsp;1. Having achieved high-accuracy TRP readings, the company was given a complete breakdown of how every one of its advertisements was performing. This measurement offered the business insight into where to concentrate its advertising efforts.

                <br></br><br></br>
                &emsp;2. The firm experienced a rise of 36% in overall sales and an astounding 52% in the promoted goods by having its advertisements become more effective through the revolutionary measurement algorithms used.
 
                <br></br><br></br>
                &emsp;3. The TRP assessment also identified the areas where the business was losing money as a result of inefficient advertising. Once this issue came to light, the company’s fiscal losses decreased by approximately 23%.
                
                <br></br><br></br>
                &emsp;4. The organisation received a thorough assessment of the popularity and audience size of each TV show, movie, and channel after being provided with high-precision TRP ratings.
                <br></br><br></br>
                </p>

                <h2 className='my-[1em] text-2xl font-semibold'>
                Challenges faced
                </h2>

                <p className='text-base my-[1em]'>
                The target rating point (TRP) index offers information on the frequency and reach of advertisements directed at a particular socio-economic target audience.
                <br></br><br></br>
                After being provided with our high-accuracy TRP measurements advertisers may choose which TV shows and networks they wish to run their classified ads on. 
                <br></br><br></br>
                In order to further improve their overall effectiveness, they may also utilise these highly accurate data to determine how many people are viewing their advertisements.
                <br></br><br></br>
                Challenges faced during measurement of TRP
                <br></br><br></br>
                &emsp;1. Volume
                <br></br><br></br>
                The sheer amount of television channels, shows and movies, greatly restricts the effectiveness of any algorithm designed to measure TRP as the database is flooded with incoming images
                <br></br><br></br>
                &emsp;2. Accuracy
                <br></br><br></br>
                The biggest issue faced by companies while measuring TRP is the accuracy with which shows, movies, or channels are detected. Not being able to achieve an accuracy of more than 90% is a problematic issue that leads to losses within the company.
                <br></br><br></br>
                &emsp;3. Noise
                <br></br><br></br>
                mages that are sent for detection are not always clear and often are recorded with a lot of noise, making it extremely difficult to identify the TV channel or movie name.
                <br></br><br></br>
                </p>
                <h2 className='my-[1em] text-2xl font-semibold'>
                Problem statement 
                </h2>
                <p className='text-base my-[1em]'>
                Create an algorithm to measure the TRP of any TV show, movie or channel with high accuracy while factoring in noise and high volume.
                </p>
                <h2 className='my-[1em] text-2xl font-semibold'>
                Our solution
                </h2>
                <p className='text-base my-[1em]'>
                We identified numerous elements from the captured images using edge-cutting computer vision algorithms to identify the TV show, movie, or channel being watched.
                <br></br><br></br>
                We also detected TV show titles and channels with highly efficient algorithms using the information tab that appears while changing channels.
                <br></br><br></br>
                Combining this with our audio detection technology we were able to map out and detect TRP readings with never seen before accuracy
                <br></br><br></br>
                Detections and measurements using our algorithms and technology revealed an unprecedented 95% accuracy, beating most TRP measurement techniques to date.
                <br></br><br></br>
                The algorithms also yielded an all-time high of 98% accuracy in some cases, making them an unparalleled success.
                </p>
                <h2 className='my-[1em] text-2xl font-semibold'>
                Technology used
                </h2>
                <p className='text-base my-[1em]'>
                Traditional machine learning algorithms like XGboost and SVM when used were giving an undesired accuracy of  60%, to counter this we used state-of-the-art recognition language Resnet50.
                <br></br><br></br>
                Furthermore, by changing the architecture of Resnet50 we went above and beyond by achieving an unmatched accuracy of 95% while measuring the TRP.
                </p>
            </div>
        </div>
  )
}