import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Image from 'next/image'

const Section3 = () => {
    const ProgramList = [{
        image: "/images/lihatjuga1.png",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.",
        title: "31 January 2030",
    },
    {
        image: "/images/lihatjuga2.png",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.",
        title: "31 January 2030",
    },
    {
        image: "/images/lihatjuga3.png",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.",
        title: "31 January 2030",
    },
    ];


    return (
        <div>
            <div className='text-[#843C74] text-4xl font-bold px-[7%] mt-9'>Lihat Juga</div>
        <div className='flex flex-wrap gap-2 py-5 justify-center'>
            {
                ProgramList.map((e, i) => {
                    return (
                        <div key={i} className='flex flex-wrap justify-center hover:scale-110 transition duration-500 '>
                            <Card sx={{ maxWidth: 420, height: 520 }}>
                                <div className='w-[100%] flex flex-wrap justify-center px-[7%] rounded-md  '>
                                    <Image
                                        src={e.image}
                                        alt={"vector.png"}
                                        width={370}
                                        height={160}
                                    ></Image>
                                </div>
                                <CardContent className='hover:text-white hover:bg-[#843C74]'>
                                    <Typography className='text-left font-bold ' gutterBottom variant="h5" component="div">
                                        {e.caption}
                                    </Typography>
                                    <Typography className='text-left' gutterBottom variant="h6" component="div">
                                        {e.desc}
                                    </Typography>
                                    <Typography className='text-left' gutterBottom variant="h6" component="div">
                                        {e.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}

export default Section3