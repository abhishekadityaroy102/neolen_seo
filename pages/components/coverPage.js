import Head from "next/head";
import Image from "next/image";
import Nav from "./nav";
import ArrowButton from "/public/arrow-button.webp";
import Instagram from "/public/instagram.webp";
import Facebook from "/public/facebook.webp";
import LinkedIn from "/public/linkedin.webp";
import Twitter from "/public/Twitter.webp";
import Youtube from "/public/youtube.webp";
import CoverImage from "/public/CoverImage.webp";

export default function CoverPage() {
  return (
    <div
      id="home"
      className="background-main background-cover grid place-content-center scroll-smooth grid-flow-col grid-rows-2 lg:grid-rows-none lg:grid-cols-2 lg:justify-between w-[100%] border-solid lg:px-24 px-4 justify-center"
    >
      <Nav></Nav>
      <div className="relative lg:mt-10 mt-56 text-center lg:text-left lg:block grid place-content-center lg:place-self-start 2xl:place-self-center place-self-center col-span-1 h-full self-center z-10">
        <h1 className="font-extrabold lg:text-[3.7em] text-[3em] leading-tight text-blue place-self-center">
          Building Apps <br className="hidden lg:block"></br>for Tomorrow
        </h1>
        <p className="lg:w-[28em] w-[100%] leading-[1.5rem] mt-[1.7em] text-blue font-normal text-sm place-self-center">
          Neolen is helping businesses build apps by using tomorrow's
          edge-cutting technologies like Artificial Intelligence (AI),
          Blockchain and Metaverse (AR, VR) so they can dominate their market
          for success.
        </p>
        <button className="w-[15em] lg:w-[auto] bg-white py-[0.6em] px-[1em] pr-[0.8em] button-shadow m-0 rounded-full text-blue text-base font-semibold hover:bg-blue hover:text-white ease-in-out duration-300 grid grid-flow-col place-content-center place-self-center mt-[2em]">
          <a
            href="https://about.neolen.com"
            target={"_blank"}
            className="pt-[0.1em]"
            rel="noreferrer"
          >
            Read More
          </a>
          <a
            href="https://about.neolen.com"
            target={"_blank"}
            className="grid place-content-center place-self-center ml-[0.5em] w-[5em] h-[auto]"
            rel="noreferrer"
          >
            <Image alt="image" src={ArrowButton}></Image>
          </a>
        </button>
        <div className="grid grid-flow-col h-[3em] w-[auto] ml-0 lg:mt-[3.7em] mt-[2em] p-0 place-content-center lg:place-content-start items-center">
          <div className=" w-[2.3em] ml-[-0.3em] mr-[1.5em] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]">
            <a
              href="https://www.instagram.com/neolen_services/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={Instagram}  alt="img"></Image>
            </a>
          </div>
          <div className=" w-[2.3em] mr-[1.5em] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]">
            <a
              href="https://twitter.com/neolen_services"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={Twitter}  alt="img"></Image>
            </a>
          </div>
          <div className=" w-[2.3em] mr-[1.5em] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]">
            <a
              href="https://www.facebook.com/Neolenofficial/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={Facebook}  alt="img"></Image>
            </a>
          </div>
          <div className=" w-[2.3em] mr-[1.5em] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]">
            <a
              href="https://www.linkedin.com/company/neolen/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={LinkedIn}  alt="img"></Image>
            </a>
          </div>
          <div className=" w-[2.3em] lg:mr-[1.5em] mr-[0] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]">
            <a
              href="https://www.youtube.com/@neolentechnologies6331"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={Youtube}  alt="img"></Image>
            </a>
          </div>
        </div>
      </div>

      <div className=" lg:place-self-end 2xl:place-self-center relative lg:w-[30rem] xl:w-[34.5rem] 2xl:w-[40rem] w-[100%] h-[auto] grid place-content-center col-span-1">
        <Image src={CoverImage} alt="coverimage"></Image>
      </div>
    </div>
  );
}
