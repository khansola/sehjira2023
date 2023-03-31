import React from 'react'
import Image from 'next/image'


const section2 = () => {
  return (
    <div className=' flex flex-wrap justify-evenly gap-10 '>
      <div className='mt-20'>
        <Image 
        src='/images/container.jpg'
        alt={"gambarnenek"}
        width={675.68}
        height={919}
        />
      </div>
      <div className=' flex flex-col justify-center gap-y-40  mt-[16px] text-justify'>
        <div>
          <h1>Lorem Ipsum Title</h1>
          <p>Web design partially overlaps web engineering in the broader scope of web development</p>
        </div>
        <div>
          <h1>Lorem Ipsum Title</h1>
          <p>Web design partially overlaps web engineering in the broader scope of web development</p>
        </div>
      </div>
    </div>
  );
};

export default section2