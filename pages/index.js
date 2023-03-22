import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import ContactUs from "./components/contact-us";
import CoverPage from "./components/coverPage";
import Footer from "./components/footer";
import Portfolio from "./components/portfolio";
import Services from "./components/services";
import Script from "next/script";
import { Suspense } from "react";

const TestimonialSlider = dynamic(
  () => import("./components/testimonialSlider"),
  {
    ssr: false,
  }
);
const OtherLinks = dynamic(() => import("./components/otherLinks"), {
  ssr: false,
});
const Blogs = dynamic(() => import("./components/blogs"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>Neolen | Building Apps for Tomorrow</title>
        <meta
          name="description"
          content="Neolen helps businesses to grow by providing IT services in genres like Artificial Intelligence(AI), Blockchain,  Argument Reality(AR), Virtual Reality(VR) etc."
        ></meta>
        <meta
          name="keywords"
          content="neolen, IT Services, AI, VR, AR, Blockchain, ML, professional services"
        ></meta>
        <meta name="author" content="Sumit Rathore"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link
          rel="canonical"
          href="https://neolen.com/"
          key="canonical"
        />
        <link rel="alternate" href="http://neolen.com" hrefLang="en-us" />
        <link rel="shortcut icon" href="/title-icon.webp"></link>
        <link rel="cononical" href="https://www.neolen.com"></link>

      </Head>

      <CoverPage></CoverPage>

      <div
        id="services"
        className="background-main background-services grid place-content-center"
      >
        <Services></Services>
      </div>

      <Portfolio></Portfolio>

      <div
        id="contact"
        className="background-main background-services grid place-content-center"
      >
        <ContactUs></ContactUs>
      </div>

      <Suspense>
        <TestimonialSlider></TestimonialSlider>
      </Suspense>

      <div id='blogs' className='background-main background-services grid place-content-center'>
        <Blogs></Blogs>
      </div>

      <OtherLinks></OtherLinks>

      <div className="background-footer lg:h-[107vh] h-[140vh] grid place-content-center">
        <Footer></Footer>
      </div>
      <Script id="schema">
      {`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Neolen",
          "image": "",
          "@id": "",
          "url": "https://www.neolen.com/",
          "telephone": "00917678511552",
          "address": {
          "@type": "PostalAddress",
          "streetAddress": "KESHAV MARKET, RAJARAM KI BAGIYA, SHAMSHABAD ROAD",
          "addressLocality": "Agra, Uttar Pradesh",
          "postalCode": "282001",
          "addressCountry": "IN",
        }
        }
      `}
    </Script>
    </div>
  );
}
