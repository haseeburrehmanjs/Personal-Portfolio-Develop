import Image from "next/image";
import haseebProfile from "/public/assets/images/haseeb-profile.png";
import { ReactIcons } from "@/assets/icons/ReactIcons";
import PrimaryBtn from "./PrimaryBtn";
// import '../../assets/css/anima'

const HereSection = () => {
  return (
    <>
      <div className="relative overflow-hidden xl:h-[544px]">

        <div className="flex flex-col gap-3 items-center justify-center">
          <h1 className="text-center flex items-center justify-center w-fit text-2xl py-1 px-4 border border-gray-300 rounded-full font-medium font-serif mt-10">
            Hello!
          </h1>
          <div className="text-center">
            <h1 className="text-6xl font-semibold font-serif">
              I'm <span className="font-bold text-[#FF2600]">Haseeb</span>,
            </h1>
            <h1 className="text-6xl font-semibold font-serif">
              Frontend Developer
            </h1>
          </div>
        </div>
        <div className="w-[300px] absolute mt-20 flex flex-col gap-3">
          <span className="text-xl">{ReactIcons.QOUTE}</span>
          <p className="font-serif">
            Passionate frontend developer crafting responsive, user-friendly
            websites with modern designs, clean code, and seamless user
            experiences.
          </p>
        </div>
        <div className="w-fit py-2 border-black border-b-2 absolute right-0 mt-20 font-serif flex  items-end flex-col gap-2">
          <div className="flex gap-1 text-[#FF2600]">
            {Array(5).fill(ReactIcons.STAR)}
          </div>
          <h1 className="text-3xl">6 Month</h1>
          <p>Experience</p>
        </div>
        <div className="flex items-center justify-center mt-5">
          <div className="absolut w-[500px] h-[500px] bg-[#FF2600] rounded-full mt-10"></div>
          <div className="absolute bottom-2 z-20 bg-white p-2 rounded-full flex gap-3">
            <PrimaryBtn
              primaryBtn={true}
              additnalClass={''}
              btnText={"Hire Me"}
            />
            <PrimaryBtn
              btnText={'Download CV'}
            />
          </div>
          <div className="w-96 absolute -mt-40">
            <Image alt="haseeb ur rehman frontend developer" src={haseebProfile} />
          </div>
        </div>

      </div>
    </>
  );
};

export default HereSection;
