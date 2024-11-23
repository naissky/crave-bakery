import Parraf from "./ui/Parraf";
import SectionContainer from "./ui/SectionContainer";
import TextHeader from "./ui/TextHeader";

export default function Contact() {
  return (
    <SectionContainer className="text-center text-pretty gap-5">
      <TextHeader>
        We are the best and sweet experience in the entire city
      </TextHeader>
      <img src="/image-3.jpg" alt="" className="w-full" />
      <Parraf className="text-base">
        Lorem ipsum dolor sit amet consectetur adipiscing elit quis ad, urna
        quam nulla quisque feugiat sollicitudin non tincidunt himenaeos, vel
        laoreet massa senectus sociosqu morbi vivamus curabitur. Accumsan montes
        aliquet potenti natoque consequat interdum fermentum neque donec,
        lacinia dui fusce nascetur porta litora malesuada elementum nostra, nec
        enim varius primis lobortis vehicula mi ridiculus. Dictum odio in
        tristique parturient elementum fames, massa nisl eleifend sagittis
        bibendum, quam orci viverra etiam pulvinar.
      </Parraf>
    </SectionContainer>
  );
}
