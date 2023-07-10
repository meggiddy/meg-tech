import { useState, useEffect } from "react";
import NavBar from "./NavBar";

export function SlideText({ showSlideText }) {
  return (
    <div className={`slide-text ${showSlideText ? "slide-in" : ""}`}>
      <h1 className="font-serif text-8xl p-4">
        Meggverse
        <span className="line" />
      </h1>
      <h3 className="font-serif text-5xl p-4">Hi! I'm Maggie</h3>
      <h6 className="font-serif text-2xl p-4">and I love doodling</h6>
    </div>
  );
}

function SlideShow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <>
      <NavBar />
      <div className="slide-show">
        <div className="w-full carousel rounded-box">
          <div
            className={`carousel-item w-full ${
              currentSlide === 0 ? "active" : ""
            }`}
          >
            <div className="slide-content">
              <img alt="hero" src="/assets/slides/lady.jpg" />
              <SlideText showSlideText={currentSlide === 0} />
            </div>
          </div>
          <div
            className={`carousel-item w-full ${
              currentSlide === 1 ? "active" : ""
            }`}
          >
            <div className="slide-content">
              <img alt="hero" src="/assets/slides/ocean.jpg" />
              <SlideText showSlideText={currentSlide === 1} />
            </div>
          </div>
          <div
            className={`carousel-item w-full ${
              currentSlide === 2 ? "active" : ""
            }`}
          >
            <div className="slide-content">
              <img alt="hero" src="/assets/slides/pinkHaus.jpg" />
              <SlideText showSlideText={currentSlide === 2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SlideShow;
