import React from 'react';

const Slider = () => {
    return (
        <div className="carousel w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/Wvkr628t/slider.webp"
          className="object-cover w-full"
          alt="Lego Bricks"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle bg-pink-500 border-none">❮</a>
          <a href="#slide2" className="btn btn-circle bg-pink-500 border-none">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/PGCghTTN/slider-2.webp"
          className="w-full object-cover"
          alt="Barbie Doll"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle bg-pink-500 border-none">❮</a>
          <a href="#slide3" className="btn btn-circle bg-pink-500 border-none">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/rGmpw9KB/slider3.jpg"
          className="w-full object-cover"
          alt="Toy Car"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle bg-pink-500 border-none">❮</a>
          <a href="#slide1" className="btn btn-circle bg-pink-500 border-none">❯</a>
        </div>
      </div>
    </div>
    );
};

export default Slider;