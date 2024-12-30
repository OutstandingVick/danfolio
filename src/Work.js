import React from 'react';

const Work = () => {
  return (
    <div className='min-h-screen bg-black text-alice font-tilt mt-12 w-full h-full items-center py-8 px-4 lg:px-24 overflow-hidden'>
      <div></div>
      <h2 className='text-2xl md:text-4xl font-semibold mb-6 mt-4 flex justify-center font-tienne'>
        MY BEST WORKS
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 text-lg lg:text-xl'>
        {/* 1st Project */}
        <div className='flex justify-center flex-col'>
          <a
            href='https://web.facebook.com/reel/3835034550159122/?mibextid=wwXIfr&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2Fr%2F1A5AUxg9d6%2F%3Fmibextid%3DwwXIfr%26_rdc%3D1%26_rdr&rdid=ppnINA12PdVwaCTo'
            className='mb-2 pt-4 text-xl text-powder font-rye hover:underline hover:text-lime-400'
          >
            1. Mobile Videography
          </a>
        </div>
        {/* 2nd Project */}
        <div className='flex justify-center flex-col'>
          <a
            href='https://web.facebook.com/reel/1195810931733670'
            className='mb-2 pt-4 text-xl text-powder font-rye hover:underline hover:text-lime-400'
          >
            2. GRWM Video
          </a>
        </div>
        {/* 3rd Project */}
        <div className='flex justify-center flex-col'>
          <a
            href='https://web.facebook.com/watch/?mibextid=wwXIfr&v=8932114536799425&rdid=rMTu5W3emISMp4LR'
            className='mb-2 pt-4 text-xl text-powder font-rye hover:underline hover:text-lime-400'
          >
            3. Video Coverage of a Traditional Wedding
          </a>
        </div>
        {/* 4th Project */}
        <div className='flex justify-center flex-col'>
          <a
            href='https://web.facebook.com/story.php?story_fbid=453502546407321&id=102254588198787&mibextid=wwXIfr&rdid=b05iJseVmqRHa13k#'
            className='mb-2 pt-4 text-xl text-powder font-rye hover:underline hover:text-lime-400'
          >
            4. Video Coverage of a White Wedding
          </a>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Work;
