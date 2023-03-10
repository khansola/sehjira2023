import React from 'react'
import Button from '../atoms/Button'
import CardRectangle from '../atoms/CardRectangle';

const Galery = () => {
    const Rectangle = [{
        image: "/images/Card.jpg",
    },
    {
        image: "/images/Card.jpg",
    },
    {
        image: "/images/Card.jpg",
    },
    ];
    return (
        <div className='mt-16' >
            <h1 className='text-[#843C74] text-3xl text-center mt-5'>
                Galery Kami
            </h1>
            <div className=" flex flex-wrap justify-center gap-16 mt-5">
                {Rectangle.map((e, i) => {
                    return <CardRectangle
                        key={i}
                        image={e.image}
                    >
                    </CardRectangle>
                })}
            </div>
            <div className=" text-[#843C74] mt-7 text-center text-[15px] font-extrabold ">
                <Button style=" px-5 border-2 rounded border-[#843C74]  " title="Lihat Selengkapnya" />
            </div>
        </div>
    )
}

export default Galery