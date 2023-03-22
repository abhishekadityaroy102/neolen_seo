import Image from "next/image";
import gsap from "gsap";

import BlockchainDetails from "./blockchainDetails";
import MetaverseDevelopmentDetails from "./metaverseDevelopmentDetails";
import DigitalMarketingDetails from "./digitalMarketingDetails";
import DataDetails from "./dataDetails";

import app from "/public/services-app.webp";
import da from "/public/servicesda.webp";
import ml from "/public/servicesml.webp";
import web from "/public/servicesweb.webp";

export default function Services() {
  function service_hide(e) {
    // e.currentTarget.className +="opacity"

    if (typeof window !== "undefined") {
      console.log(e);

      document.getElementById("service1").classList.remove("iconButtonActive");
      document.getElementById("service2").classList.remove("iconButtonActive");
      document.getElementById("service3").classList.remove("iconButtonActive");
      document.getElementById("service4").classList.remove("iconButtonActive");

      document
        .getElementById(e.currentTarget.id)
        .classList.add("iconButtonActive");

      gsap.to(document.getElementsByClassName("_details"), {
        opacity: 0,
        ease: "power2.out",
        duration: 0.5,
        scale: 0.5,
      });

      service_show(e);
    }
  }

  function service_show(e) {
    console.log(e);

    var y = e.currentTarget.id;

    console.log(y);

    if (typeof window !== "undefined") {
      gsap.from(document.getElementsByClassName(y + "_details"), {
        opacity: 0,
        ease: "power2.out",
        duration: 0.5,
        scale: 0.5,
        display: "none",
      });

      gsap
        .to(document.getElementsByClassName(y + "_details"), {
          opacity: 1,
          ease: "power2.out",
          duration: 0.5,
          scale: 1,
          display: "block",
        })

        .invalidate();
    }
  }

  return (
    <>
      <h2 className="text-white font-extrabold opacity-50 text-[2.3em] textShadow absolute top-[5rem] lg:top-[3rem] 2xl:top-[5rem] lg:left-[3rem] 2xl:left-[5rem] place-self-center scroll-smooth">
        Services
      </h2>
      <h2 className="text-white font-extrabold opacity-50 text-[2.3em] textShadow absolute bottom-[5rem] lg:bottom-[3rem] 2xl:bottom-[5rem] lg:right-[3rem] 2xl:right-[5rem] place-self-center">
        Services
      </h2>
      <div className="grid grid-row-2 grid-cols-1 w-[100%] bg-slate-00 place-self-center">
        <div className="grid lg:grid-col-4 grid-cols-2 grid-rows-2 lg:grid-rows-1 grid-flow-col lg:gap-[2em] gap-[1em] w-[100%]">
          <div
            onClick={service_hide}
            id="service1"
            className="lg:w-[14em] lg:h-[6em] w-[10em] h-[5em] p-[0.8em] ease-in-out duration-300 grid grid-flow-col gap-[1em] place-content-center iconButtonShadow iconButtonActive rounded-lg serviceButton iconButton "
          >
            <Image src={app} alt="img" className="object-contain"></Image>
            <h3 className="place-self-center text-blue font-bold lg:text-base text-sm w-[7em]">
              Metaverse<br></br>Development
            </h3>
          </div>
          <div
            onClick={service_hide}
            id="service2"
            className="lg:w-[14em] lg:h-[6em] w-[10em] h-[5em] p-[0.8em] ease-in-out duration-300 grid grid-flow-col gap-[1em] place-content-center iconButtonShadow rounded-lg serviceButton iconButton"
          >
            <Image src={da} alt="img" className="object-contain"></Image>
            <h3 className="place-self-center text-blue font-bold lg:text-base text-sm w-[7em]">
              Data<br></br>Analytics
            </h3>
          </div>
          <div
            onClick={service_hide}
            id="service3"
            className="lg:w-[14em] lg:h-[6em] w-[10em] h-[5em] p-[0.8em] ease-in-out duration-300 grid grid-flow-col gap-[1em] place-content-center iconButtonShadow rounded-lg serviceButton iconButton "
          >
            <Image src={ml} alt="img" className="object-contain"></Image>
            <h3 className="place-self-center text-blue font-bold lg:text-base text-sm  w-[7em]">
              Web 3.0<br></br>Development
            </h3>
          </div>
          <div
            onClick={service_hide}
            id="service4"
            className="lg:w-[14em] lg:h-[6em] w-[10em] h-[5em] p-[0.8em] ease-in-out duration-300 grid grid-flow-col gap-[1em] place-content-center iconButtonShadow rounded-lg serviceButton iconButton"
          >
            <Image src={web}  alt="img" className="object-contain"></Image>
            <h3 className="place-self-center text-blue font-bold lg:text-base text-sm w-[7em]">
              Digital<br></br>Marketing
            </h3>
          </div>
        </div>
        <div className="grid grid-flow-col grid-cols-1 gap-[1em] place-content-center items-center col-span-8 lg:min-h-[23em] min-h-[40em] w-[100%] p-5 InfoContainer mt-[2em] rounded-3xl relative ease-in-out duration-300">
          <div className="_details absolute place-self-center w-[100%] service1_details">
            <MetaverseDevelopmentDetails
              h1="Metaverse"
              h2="Development"
              p="Innovation is key to future success. Every big corporation invests heavily in AR/VR/Metaverse tech, converting 2D internet to 3D. The Internet is changing, so your business should. In 5 years, AR and VR Apps will dominate the market and change modern businesses. Neolen Metaverse tools and services provide end-to-end solutions to facilitate your entry and participation in the Metaverse market."
            ></MetaverseDevelopmentDetails>
          </div>

          <div className="_details absolute hidden place-self-center w-[100%] opacity-0 service2_details">
            <DataDetails
              h1="Data"
              h2="Analytics"
              p="Data trends can provide hidden insights to identify problems and help provide alternative ways of working. Data analytics enables employees to view data in context and make smarter business decisions to achieve improved products and services."
            ></DataDetails>
          </div>

          <div className="_details absolute hidden place-self-center w-[100%] opacity-0 service3_details">
            <BlockchainDetails
              h1="Web 3.0"
              h2="Development"
              p="We have relied on third parties to keep our authoritative record which can leave room for human error and aren’t tamper-proof.Blockchain is revolutionizing the supply chain, food distribution, financial services, government, retail, and more."
            ></BlockchainDetails>
          </div>

          <div
            id="service1_details details"
            className="_details service4_details  absolute hidden opacity-0  place-self-center w-[100%]"
          >
            <DigitalMarketingDetails
              h1="Digital"
              h2="Marketing"
              p="In the Current Era, every business is becoming online. Due to too much competition, finding quality clients/customers for your product and services is getting very difficult. Neolen Digital Marketing tools and services save your business time and money to find quality leads by providing details insights into your customer/clients and help you manage your own digital marketing cloud infrastructure to optimise marketing cost."
            ></DigitalMarketingDetails>
          </div>
        </div>
      </div>
    </>
  );
}
