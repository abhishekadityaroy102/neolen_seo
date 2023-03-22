import Head from 'next/head'
import dynamic from 'next/dynamic'
import Footer from './components/footer'
import StartupOverview from './components/startupOverview'
import ContactUs from './components/contact-us'
import StartupCover from './components/startupCover'



export default function Startup() {
  return (
    <div className='overflow-x-hidden'>

      <Head>
        <title>Neolen | Startup Support</title>
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

      <StartupCover></StartupCover>
      <StartupOverview></StartupOverview>
      <div id='contact' className='background-main background-portfolio grid place-content-center'>
        <ContactUs></ContactUs>
      </div>
      <div className='background-footer lg:h-[107vh] h-[130vh] grid place-content-center'>
        <Footer></Footer>
      </div>
    </div>
  )
}