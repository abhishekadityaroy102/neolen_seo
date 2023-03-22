import { AiFillAndroid, AiFillApple, AiFillInteraction } from "react-icons/ai";
import { GiConsoleController } from "react-icons/gi";

export default function MetaverseDevelopmentDetails(props) {
  return (
    <div className="grid lg:grid-flow-col lg:grid-cols-3 grid-flow-row grid-rows-2 gap-[1em] place-content-center place-self-center relative">
      <div className="absolute lg:left-[3em] place-self-center bottom-[-1em] lg:bottom-[auto]">
        <h2 className="font-extrabold lg:text-[2.8em] text-2xl text-center lg:text-left leading-[1.2em] text-blue">
          {props.h1}
          <br></br>
          {props.h2}
        </h2>
        <p className=" lg:w-[31em] w-[23em] text-center lg:text-left leading-[1.8em] lg:mt-[1.5em] text-blue font-normal mt-[1em] lg:text-sm text-sm">
          {props.p}
        </p>
      </div>
      <div className=" hidden lg:block absolute place-self-center ml-[2em] py-[5em] px-[1.5px] lineShadow opacity-80 rounded-full bg-white"></div>
      <div className="grid place-self-center absolute grid-cols-2 gap-[1em] gap-y-[1em] place-content-center lg:right-[3em] col-span-1 min-h-full lg:top-[auto] top-[5em]">
        <div className="grid grid-flow-row place-content-center place-self-center detailsIcon lg:w-[11em] lg:h-[7em] w-[9em] h-[5em] rounded-xl">
          <AiFillAndroid className="lg:text-[2.5em] text-2xl text-blue place-self-center"></AiFillAndroid>
          <h2 className="lg:text-sm text-sm text-center font-extrabold text-blue leading-tight place-self-center mt-[1em] ">
            Argument Reality<br></br>(AR) Development
          </h2>
        </div>

        <div className="grid grid-flow-row place-content-center place-self-center detailsIcon lg:w-[11em] lg:h-[7em] w-[9em] h-[5em] rounded-xl">
          <AiFillApple className="lg:text-[2.5em] text-2xl text-blue place-self-center"></AiFillApple>
          <h2 className="lg:text-sm text-sm text-center font-extrabold text-blue leading-tight place-self-center mt-[1em] ">
            Virtual Reality (VR)<br></br>Development
          </h2>
        </div>

        <div className="grid grid-flow-row place-content-center place-self-center detailsIcon lg:w-[11em] lg:h-[7em] w-[9em] h-[5em] rounded-xl">
          <AiFillInteraction className="lg:text-[2.5em] text-2xl text-blue place-self-center"></AiFillInteraction>
          <h2 className="lg:text-sm text-sm text-center font-extrabold text-blue leading-tight place-self-center mt-[1em] ">
            Mixed Reality (MR)<br></br>Development
          </h2>
        </div>

        <div className="grid grid-flow-row place-content-center place-self-center detailsIcon lg:w-[11em] lg:h-[7em] w-[9em] h-[5em] rounded-xl">
          <GiConsoleController className="lg:text-[2.5em] text-2xl text-blue place-self-center"></GiConsoleController>
          <h2 className="lg:text-sm text-sm text-center font-extrabold text-blue leading-tight place-self-center mt-[1em] ">
            Metaverse<br></br>Consulting
          </h2>
        </div>
      </div>
    </div>
  );
}
