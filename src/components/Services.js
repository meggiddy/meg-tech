import Birds from "../animations/bird";

function Services() {
  return (
    <>
      <div className="carousel w-full pt-10">
        <div
          id="slide1"
          className="carousel-item flex flex-row justify-center relative w-full"
        >
          <p className="items-center w-80 flex p-10 text-3xl">
            Art is expressive
          </p>
          <img src="/assets/doodles/ladies.jpg" className="w-96" alt="art" />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item flex flex-row justify-center relative w-full"
        >
          <img
            src="/assets/doodles/woman-doodle.jpg"
            className="w-96"
            alt="art"
          />
          <p className="items-center w-80 flex p-10 text-3xl">
            Art is expressive
          </p>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item flex flex-row justify-center relative w-full"
        >
          <p className="items-center w-80 flex p-10 text-3xl">
            Art is expressive
          </p>
          <img src="/assets/doodles/doodle.jpg" className="w-96" alt="art" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className="carousel-item flex flex-row justify-center relative w-full"
        >
          <p className="items-center w-80 flex p-10 text-3xl">
            Art is expressive
          </p>
          <img src="/assets/doodles/painting.jpg" className="w-96" alt="art" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <Birds />
    </>
  );
}

export default Services;
