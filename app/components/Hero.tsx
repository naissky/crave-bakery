import Parraf from "./ui/Parraf";
import SectionContainer from "./ui/SectionContainer";
import TextHeader from "./ui/TextHeader";


export default function Hero() {
  return (
    <header>
      <SectionContainer>
        <div className="flex flex-col gap-5 md:gap-10 justify-center text-center items-center md:max-w-5xl text-pretty">
          <TextHeader className="">
            Making sure you really<span className="italic">crave</span> it!
          </TextHeader>
          <Parraf className="">
            CLASSIC WITH A MODERN TWIST. AN EXPERIENCE FOR THE THASTE BUDS AND THE SOUL.
          </Parraf>
        </div>
        <img src="/header.webp" className="w-full" alt="" />
      </SectionContainer>
    </header>
  );
}
