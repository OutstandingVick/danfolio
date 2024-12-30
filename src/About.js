import React from 'react';

function Home() {
  return (
    <div className='bg-rich text-alice h-screen w-screen pt-32 md:pt-28'>
      <div className='font-tienne font-bold text-xl md:text-4xl flex justify-center pb-6'>
        <h1>ABOUT ME</h1>
      </div>
      <div className='font-tienne text-base md:text-3xl flex justify-center pb-2 mx-8'>
        <h2>Hello, I'm Daniel Nwachukwu. Nice to meet you!</h2>
      </div>
      <hr className='px-30 border-t-2 border-alice my-2' />
      <div className='font-tilt text-sm md:text-3xl flex justify-center pb-4 px-12'>
        <p>
          I'm a highly passionate videographer committed to turning moments into
          captivating stories. With a creative eye and a dedication to
          excellence, I craft visuals that not only capture the essence of every
          scene but also evoke emotions and inspire lasting connections. Through
          my lens, every project becomes a masterpiece.
        </p>
      </div>
      <div className='font-tienne font-bold text-sm md:text-3xl flex justify-center pb-4'>
        <h1>Contact Me</h1>
      </div>
      <div className='font-tilt flex justify-center mt-2'>
        <a
          href=''
          className='text-alice text-sm md:text-3xl hover:text-lime-400 pr-6'
        >
          Facebook
        </a>
        <a
          href=''
          className='text-alice text-sm md:text-3xl hover:text-lime-400 pr-6'
        >
          Twitter
        </a>
        <a
          href=''
          className='text-alice text-sm md:text-3xl hover:text-lime-400'
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}

export default Home;
