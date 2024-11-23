import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Bye from "./components/Bye";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Banner/>
      <Contact/>
      <Bye/>
    </div>
  );
}
