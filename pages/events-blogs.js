import Head from 'next/head'
import Footer from './components/footer'
import ContactUs from './components/contact-us'
import EventBlogsCover from './components/eventBlogsCover'
import Events from './components/events'
//import Blogs from './components/blogs'
import dynamic from "next/dynamic";

const Blogs = dynamic(() => import("./components/blogs"), {
  ssr: false,
});

export default function Startup() {
  return (
    <div className='overflow-x-hidden'>

      <Head>
        <title>Neolen Events and Blogs</title>
        <meta name="description" content="Neolen helps businesses to grow by providing IT services in genres like Artificial Intelligence(AI), Blockchain,  Argument Reality(AR), Virtual Reality(VR) etc."></meta>
        <meta name="keywords" content="neolen, IT Services, AI, VR, AR, Blockchain, ML, professional services"></meta>
        <meta name="author" content="Sumit Rathore"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="shortcut icon" href="/title-icon.webp"></link>
        <link
          rel="canonical"
          href="https://neolen.com/"
          key="canonical"
        />
      </Head>

      <EventBlogsCover></EventBlogsCover>

      <div id='events' className='background-main background-services grid place-content-center'>
        <Events></Events>
      </div>

      <div id='blogs' className='background-main background-portfolio grid place-content-center'>
        <Blogs></Blogs>
      </div>

      <div id='contact' className='background-main background-services grid place-content-center'>
        <ContactUs></ContactUs>
      </div>

      <div className='background-footer2 lg:h-[107vh] h-[130vh] grid place-content-center'>
        <Footer></Footer>
      </div>

    </div>
  )
}
