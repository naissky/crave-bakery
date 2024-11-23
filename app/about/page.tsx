import Banner from "../components/Banner";
import Contact from "../components/Contact";
import SectionContainer from "../components/ui/SectionContainer";

export default function About() {
  return (
    <div className="">
      <SectionContainer>
        <Contact />
      </SectionContainer>
      <Banner />
    </div>
  );
}
