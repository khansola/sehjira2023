import Image from 'next/image'
import React from 'react'
import Button from '../atoms/Button';
import CardKotak from '../atoms/CardKotak';

const Program = () => {
    const card2 = [
        {
            image: "/images/s.jpg",
            caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            title: "First Program",
        },
        {
            image: "/images/s.jpg",
            caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            title: "Second Program",
        },
        {
            image: "/images/s.jpg",
            caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            title: "Third Program",
        },
        {
            image: "/images/s.jpg",
            caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            title: "First Program",
        },
        {
            image: "/images/s.jpg",
            caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            title: "Second Program",
        },
        {
            image: "/images/s.jpg",
            caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            title: "Third Program",
        },
        {
            image: "/images/s.jpg",
            caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            title: "First Program",
        },
        {
            image: "/images/s.jpg",
            caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            title: "Second Program",
        },
        {
            image: "/images/s.jpg",
            caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            title: "Third Program",
        },
    ];
    return (
        <div>
            <h1 className='font-bold text-4xl px-[5%] text-[#A03C78]'>Program Unggulan Sehjira Terbaru</h1>
            <div className='flex flex-wrap items-center justify-around'>
                <div className='w-[40%]'>
                    <h1 className='font-bold text-4xl text-[#A03C78]'>Pelatihan Kemandirian Remaja Tuna Rungu Ke-5</h1>
                    <p className='py-5  '>
                        OUTBOND DI LEBAK BULUS WISMA SLB PEMBINA JAKARTA, 19 - 20 JUNI 2010
                    </p>
                </div>
                <div className=''>
                    <Image
                        src="/images/s.jpg"
                        alt="sehjira"
                        height={200}
                        width={450}
                    />
                </div>
            </div>
            <div className='px-[5%]'>
                <h3 className='text-4xl text-[#A03C78] '>
                    Program Unggulan Lainnya
                </h3>
            </div>
            <div className='flex flex-wrap justify-between px-[5%] items-center py-5 gap-[5px]'>
                {card2.map((e, i) => {
                    return (
                        <CardKotak
                            key={i}
                            image={e.image}
                            caption={e.caption}
                            title={e.title}
                        />
                    )
                })}
            </div>
            <div className=" text-white mt-7 text-center text-[15px] font-extrabold ">
                <Button style=" py-2 px-9 bg-[#843C74] rounded border-[#843C74]  " title="Muat Lebih Banyak" />
            </div>

        </div>
    )
}

export default Program