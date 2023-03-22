import Head from "next/head";
import Image from "next/image";
import gsap from "gsap";

import gb from "/public/getboarded.webp";
import vw from "/public/videowiki.webp";
import es from "/public/estart.webp";
import pc from "/public/pacome.webp";
import tp from "/public/tp.webp";
import bc from "/public/bloomcap.webp";
import ff from "/public/fflogo.webp";
import paw from "/public/paw.webp";

import PortfolioDetails from "./portfolioDetails";

export default function Portfolio() {
  function company_hide(e) {
    // e.currentTarget.className +="opacity"

    if (typeof window !== "undefined") {
      console.log(e);

      document.getElementById("company1").classList.remove("iconButtonActive");
      document.getElementById("company2").classList.remove("iconButtonActive");
      document.getElementById("company3").classList.remove("iconButtonActive");
      document.getElementById("company4").classList.remove("iconButtonActive");
      document.getElementById("company5").classList.remove("iconButtonActive");
      document.getElementById("company6").classList.remove("iconButtonActive");
      document.getElementById("company7").classList.remove("iconButtonActive");
      document.getElementById("company8").classList.remove("iconButtonActive");

      document
        .getElementById(e.currentTarget.id)
        .classList.add("iconButtonActive");

      gsap.to(document.getElementsByClassName("company_details"), {
        opacity: 0,
        ease: "power2.out",
        duration: 0.5,
        scale: 0.5,
      });

      company_show(e);
    }
  }

  function company_show(e) {
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
          display: "grid",
        })

        .invalidate();
    }
  }

  return (
    <div
      id="portfolio"
      className="background-main background-portfolio grid place-content-center"
    >
      <h2 className="text-white font-extrabold opacity-50 text-[2.3em] textShadow absolute top-[5rem] lg:top-[3rem] 2xl:top-[5rem] lg:left-[3rem] 2xl:left-[5rem] place-self-center">
        Portfolio
      </h2>
      <h2 className="text-white font-extrabold opacity-50 text-[2.3em] textShadow absolute bottom-[5rem] lg:bottom-[3rem] 2xl:bottom-[5rem] lg:right-[3rem] 2xl:right-[5rem] place-self-center">
        Portfolio
      </h2>
      <div className="grid grid-row-2 grid-cols-1 w-[100%] bg-slate-00 place-self-center">
        <div className=" grid grid-flow-col grid-cols-1 gap-[1em] place-content-center col-span-8 lg:min-h-[22em] w-[100%] min-h-[40em] p-5 InfoContainer rounded-3xl relative ease-in-out duration-300">
          <div className="company1_details company_details absolute place-self-center grid place-content-center w-[100%] h-[100%]">
            <PortfolioDetails
              company_name="Bloom Cap"
              company_details="Bloom CAP is an online educational organization founded by Arihant Publications. It endeavors to help students identify their true potential and realize their dreams to have a full-filling life at school and beyond."
              users="100K+"
              downloads="1.3 Million"
              link="https://bloomcap.org/"
              pic1="p-1-1"
              pic2="p-1-2"
            ></PortfolioDetails>
          </div>

          <div className="hidden opacity-0 company2_details company_details absolute place-self-center place-content-center w-[100%] h-[100%]">
            <PortfolioDetails
              company_name="Getboarded"
              company_details="Build your career profiles with Getboarded. It works not just on the knowledge, but also on personality-based transferable skills in today's ever-changing career and jobs landscape. "
              users="10K+"
              downloads="10K+"
              link="https://getboarded.com/"
              pic1="p-2-1"
              pic2="p-2-2"
            ></PortfolioDetails>
          </div>

          <div className="hidden opacity-0 company3_details company_details absolute place-self-center place-content-center w-[100%] h-[100%]">
            <PortfolioDetails
              company_name="Pacome"
              company_details="Pacome is Android and IOS Application which Suggests you Best Stocks to Buy. It uses best-in-class latest machine learning technologies and artificial intelligence algorithms."
              users="1K+"
              downloads="10K+"
              link="/"
              pic1="p-3-1"
              pic2="p-3-2"
            ></PortfolioDetails>
          </div>

          <div className="hidden opacity-0 company4_details company_details absolute place-self-center place-content-center w-[100%] h-[100%]">
            <PortfolioDetails
              company_name="eStart4"
              company_details="eStart4 is a Platform as a Service (PaaS) solution specifically designed to address the core issues in the restaurant industry surrounding order generation, order fulfillment, and marketing."
              users="1K+"
              downloads="10K+"
              link="https://www.facebook.com/eStart4/"
              pic1="p-4-2"
              pic2="p-4-1"
            ></PortfolioDetails>
          </div>

          <div className="hidden opacity-0 company5_details company_details absolute place-self-center place-content-center w-[100%] h-[100%]">
            <PortfolioDetails
              company_name="VideoWiki"
              company_details="A collaborative platform for learners and educators to secure learning continuity in times of restrictions and beyond. Consider the tool as a ' Video Wikipedia for Learners and Creators '"
              users="1K+"
              downloads="10K+"
              link="https://video.wiki/"
              pic1="p-5-1"
              pic2="p-5-2"
            ></PortfolioDetails>
          </div>

          <div className="hidden opacity-0 company6_details company_details absolute place-self-center place-content-center w-[100%] h-[100%]">
            <PortfolioDetails
              company_name="Trusted Predic.."
              company_details="Win Like Never Before With flawless predictions, we aim to provide our users with a seamless experience of winning sports betting and fantasy sports like never before. "
              users="10K+"
              downloads="10K+"
              link="https://www.facebook.com/trusted.prediction/"
              pic1="p-6-1"
              pic2="p-6-2"
            ></PortfolioDetails>
          </div>

          <div className="hidden opacity-0 company7_details company_details absolute place-self-center place-content-center w-[100%] h-[100%]">
            <PortfolioDetails
              company_name="Fan Fury"
              company_details="Join a brand new metaverse that is mapped to real-world games and will quickly become the largest and the most dynamic daily based fantasy sports platform in existence."
              users="20K+"
              downloads="20K+"
              link="https://fury.fan/"
              pic1="p-7-1"
              pic2="p-7-2"
            ></PortfolioDetails>
          </div>

          <div className="hidden opacity-0 company8_details company_details absolute place-self-center place-content-center w-[100%] h-[100%]">
            <PortfolioDetails
              company_name="Paw Purrfect"
              company_details="The PawPurrfect app was conceptualized to get you best rated service experts, at a preferred price and schedule. The app takes the personal safety and comfort of both the pet and parents very seriously."
              users="50K+"
              downloads="100K+"
              link="https://pawpurrfect.co/"
              pic1="p-8-1"
              pic2="p-8-2"
            ></PortfolioDetails>
          </div>
        </div>

        <div className="grid lg:grid-col-8 lg:grid-cols-4 grid-rows-2 lg:grid-rows-1 grid-flow-col lg:gap-[2em] gap-[1em] mt-[2em]">
          <div
            onClick={company_hide}
            id="company1"
            className=" col-span-1 lg:w-[6em] lg:h-[6em] w-[4em] h-[4em] p-[0.5em] ease-in-out duration-300 grid place-content-center iconButton iconButtonShadow iconButtonActive rounded-lg"
          >
            <Image src={bc} alt="img"></Image>
          </div>

          <div
            onClick={company_hide}
            id="company2"
            className=" col-span-1 lg:w-[6em] lg:h-[6em] w-[4em] h-[4em] p-[0.5em] ease-in-out duration-300 grid place-content-center iconButtonShadow iconButton rounded-lg"
          >
            <Image src={gb} alt="img"></Image>
          </div>

          <div
            onClick={company_hide}
            id="company3"
            className=" col-span-1 lg:w-[6em] lg:h-[6em] w-[4em] h-[4em] p-[0.5em] ease-in-out duration-300 grid place-content-center iconButtonShadow iconButton rounded-lg"
          >
            <Image src={pc} alt="img"></Image>
          </div>

          <div
            onClick={company_hide}
            id="company4"
            className=" col-span-1 lg:w-[6em] lg:h-[6em] w-[4em] h-[4em] p-[0.5em] ease-in-out duration-300 grid place-content-center iconButtonShadow iconButton rounded-lg"
          >
            <Image src={es} alt="img"></Image>
          </div>

          <div
            onClick={company_hide}
            id="company5"
            className=" col-span-1 lg:w-[6em] lg:h-[6em] w-[4em] h-[4em] p-[0.5em] ease-in-out duration-300 grid place-content-center iconButtonShadow iconButton rounded-lg"
          >
            <Image src={vw} alt="img"></Image>
          </div>

          <div
            onClick={company_hide}
            id="company6"
            className=" col-span-1 lg:w-[6em] lg:h-[6em] w-[4em] h-[4em] p-[0.5em] ease-in-out duration-300 grid place-content-center iconButtonShadow iconButton rounded-lg"
          >
            <Image src={tp} alt="img"></Image>
          </div>

          <div
            onClick={company_hide}
            id="company7"
            className=" col-span-1 lg:w-[6em] lg:h-[6em] w-[4em] h-[4em] p-[0.5em] ease-in-out duration-300 grid place-content-center iconButtonShadow iconButton rounded-lg"
          >
            <Image src={ff} alt="img"></Image>
          </div>

          <div
            onClick={company_hide}
            id="company8"
            className=" col-span-1 lg:w-[6em] lg:h-[6em] w-[4em] h-[4em] p-[0.5em] ease-in-out duration-300 grid place-content-center iconButtonShadow iconButton rounded-lg"
          >
            <Image src={paw} alt="img"></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
