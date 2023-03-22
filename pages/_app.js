import "../styles/globals.css";
import "../node_modules/swiper/swiper-bundle.css";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import Script from "next/script";
import Head from "next/head";
import Image from "next/image";
gsap.registerPlugin(CSSPlugin);

function MyApp({ Component, pageProps }) {
  const schemaoflocal = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Neolen",
    image: "",
    "@id": "",
    url: "https://www.neolen.com/",
    telephone: "00917678511552",
    address: {
      "@type": "PostalAddress",
      streetAddress: "KESHAV MARKET, RAJARAM KI BAGIYA, SHAMSHABAD ROAD",
      addressLocality: "Agra, Uttar Pradesh",
      postalCode: "282001",
      addressCountry: "IN",
    },
  };
  return (
    <>
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
        <link rel="canonical" href="https://neolen.com/" key="canonical" />
        <link rel="alternate" href="http://neolen.com" hrefLang="en-us" />
        <link rel="shortcut icon" href="/title-icon.webp"></link>
        <link rel="cononical" href="https://www.neolen.com"></link>
        <meta property="og:url" content="http://www.neolen.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Neolen | Building Apps for Tomorrow"
        />
        <meta
          property="og:description"
          content="Neolen helps businesses to grow by providing IT services in genres like Artificial Intelligence(AI), Blockchain,  Argument Reality(AR), Virtual Reality(VR) etc."
        />
        <meta
          property="og:image"
          content="https://scontent-del1-2.cdninstagram.com/v/t51.2885-15/275402877_1100743044112075_4199981666288147674_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent-del1-2.cdninstagram.com&_nc_cat=107&_nc_ohc=iLhTDsIuh0cAX9irbsM&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjc5MDA3NjI1MTY4MTc0MjI3MA%3D%3D.2-ccb7-5&oh=00_AfD7AjKxwPeDr71yUa11HiXFiIgoV6_nHkAPZfWlKVVdWg&oe=640E1330&_nc_sid=6136e7"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://www.neolen.com" />
        <meta
          name="twitter:title"
          content="Neolen | Building Apps for Tomorrow"
        />
        <meta
          name="twitter:description"
          content="Neolen helps businesses to grow by providing IT services in genres like Artificial Intelligence(AI), Blockchain,  Argument Reality(AR), Virtual Reality(VR) etc."
        />
        <meta
          name="twitter:image"
          content="https://scontent-del1-2.cdninstagram.com/v/t51.2885-15/275402877_1100743044112075_4199981666288147674_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent-del1-2.cdninstagram.com&_nc_cat=107&_nc_ohc=iLhTDsIuh0cAX9irbsM&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjc5MDA3NjI1MTY4MTc0MjI3MA%3D%3D.2-ccb7-5&oh=00_AfD7AjKxwPeDr71yUa11HiXFiIgoV6_nHkAPZfWlKVVdWg&oe=640E1330&_nc_sid=6136e7"
        />
        <noscript>
          <img
            height="1"
            width="1"
            className="hidden"
            src="https://www.facebook.com/tr?id=511551614481331&ev=PageView&noscript=1"
          ></img>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaoflocal) }}
        ></script>
        <script src="/pixel.js"></script>
      </Head>
      {/* <Script id="schema">
        {{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Neolen",
          image: "",
          "@id": "",
          url: "https://www.neolen.com/",
          telephone: "00917678511552",
          address: {
            "@type": "PostalAddress",
            streetAddress: "KESHAV MARKET, RAJARAM KI BAGIYA, SHAMSHABAD ROAD",
            addressLocality: "Agra, Uttar Pradesh",
            postalCode: "282001",
            addressCountry: "IN",
          },
        }}
      </Script> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
