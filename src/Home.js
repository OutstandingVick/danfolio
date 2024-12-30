import React from 'react';

function Home() {
  return (
    <div className='bg-rich text-alice h-screen w-screen pt-52 md:pt-60'>
      <div className='font-tienne text-xl md:text-7xl flex justify-center pb-2'>
        <h1>Daniel Nwachukwu</h1>
      </div>
      <div className='font-tienne text-xl md:text-7xl flex justify-center pb-2'>
        <h1>Professional Videographer</h1>
      </div>
      <div className='font-tilt text-sm md:text-2xl flex justify-center pb-2'>
        <h3>Hello, Daniel here! I'm a Professional Videographer,</h3>
      </div>
      <div className='font-tilt text-sm md:text-2xl flex justify-center pb-2'>
        <h3>with a gift and drive for creating</h3>
      </div>
      <div className='font-tilt text-sm md:text-2xl flex justify-center pb-3'>
        <h3>immersive, appealing, & engaging videos.</h3>
      </div>
      <div className='font-tilt text-2xl flex justify-center mt-2'>
        <button className='bg-lime-400 text-rich text-xs md:text-3xl p-1 md:py-2 px-2 md:px-4 rounded-3xl hover:bg-alice'>
          <a href='/work'>My Works</a>
        </button>
      </div>
    </div>
  );
}

export default Home;
