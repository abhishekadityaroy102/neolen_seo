import { AiOutlineBlock, AiFillIdcard, AiOutlinePicture } from "react-icons/ai";
import { TbBrandMeta } from "react-icons/tb";

export default function BlockChainDetails(props) {
  return (
    <div className="grid lg:grid-flow-col lg:grid-cols-3 grid-flow-row grid-rows-2 gap-[1em] place-content-center place-self-center relative">
      <div className="absolute lg:left-[3em] place-self-center bottom-[1em] lg:bottom-[auto]">
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
      <div className="grid place-self-center absolute grid-cols-2 gap-[1em] gap-y-[1em] place-content-center lg:right-[3em] col-span-1 min-h-full lg:top-[auto] top-[2em]">
        <div className="grid grid-flow-row place-content-center place-self-center detailsIcon lg:w-[11em] lg:h-[7em] w-[9em] h-[5em] rounded-xl">
          <AiOutlineBlock className="lg:text-[2.5em] text-2xl text-blue place-self-center"></AiOutlineBlock>
          <h2 className="lg:text-sm text-sm text-center font-extrabold text-blue leading-tight place-self-center mt-[1em] ">
            Supply<br></br>Chain
          </h2>
        </div>

        <div className="grid grid-flow-row place-content-center place-self-center detailsIcon lg:w-[11em] lg:h-[7em] w-[9em] h-[5em] rounded-xl">
          <AiFillIdcard className="lg:text-[2.5em] text-2xl text-blue place-self-center"></AiFillIdcard>
          <h2 className="lg:text-sm text-sm text-center font-extrabold text-blue leading-tight place-self-center mt-[1em] ">
            Digital Identity<br></br>And Credentials
          </h2>
        </div>

        <div className="grid grid-flow-row place-content-center place-self-center detailsIcon lg:w-[11em] lg:h-[7em] w-[9em] h-[5em] rounded-xl">
          <AiOutlinePicture className="lg:text-[2.5em] text-2xl text-blue place-self-center"></AiOutlinePicture>
          <h2 className="lg:text-sm text-sm text-center font-extrabold text-blue leading-tight place-self-center mt-[1em] ">
            Digital<br></br>Assets
          </h2>
        </div>

        <div className="grid grid-flow-row place-content-center place-self-center detailsIcon lg:w-[11em] lg:h-[7em] w-[9em] h-[5em] rounded-xl">
          <TbBrandMeta className="lg:text-[2.5em] text-2xl text-blue place-self-center"></TbBrandMeta>
          <h2 className="lg:text-sm text-sm text-center font-extrabold text-blue leading-tight place-self-center mt-[1em] ">
            Blockchain<br></br>Development
          </h2>
        </div>
      </div>
    </div>
  );
}
