import Parraf from "./ui/Parraf";
import SectionContainer from "./ui/SectionContainer";
import TextHeader from "./ui/TextHeader";

export default function () {
  return (
    <SectionContainer className="bg-foreground text-background">
      <div className="flex flex-col px-3 py-5 justify-center items-center text-center gap-5 md:gap-10">
        <TextHeader>
          Make sure you really <span className="italic">crave</span> it!
        </TextHeader>
        <div className="flex flex-col md:flex-row gap-8 md:gap-8 justify-center md:justify-between list-none text-left">
          <ul>
            <li>Designer: Leandra Rangel</li>
            <li>Developer: Favian Segovia</li>
          </ul>
          <ul>
            <li>Art Direction: Jeremy Anser</li>
            <li>Branding & Design: Crave Bakery</li>
          </ul>
        </div>
        <Parraf>CraveIt! Bakery - 2024 All rights reserved (C)</Parraf>
      </div>
    </SectionContainer>
  );
}
