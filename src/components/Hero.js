import React from 'react';

const Hero = () => (
  <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-banner-image.jpg)' }}>
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
      <h1 className="text-white text-4xl md:text-6xl font-bold text-center">Discover Elegance in Every Stone</h1>
      <button className="mt-6 bg-yellow-500 text-black px-6 py-2 rounded-lg text-lg hover:bg-yellow-600">Explore Now</button>
    </div>
  </section>
);

export default Hero;
