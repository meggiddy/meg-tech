import NavBar from "./NavBar";
import Slideshow from "./Slideshow";
import MidSection from "./MidSection";
import Services from "./Services";

function Landing() {
  return (
    <div className="w-full">
      <NavBar />
      <Slideshow />
      <MidSection />
      <Services />
    </div>
  );
}

export default Landing;
