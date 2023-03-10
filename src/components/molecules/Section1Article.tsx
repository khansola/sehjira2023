import React from 'react'
import Link from "next/link";
import Image from 'next/image'
import { Box } from '@mui/system'

const Section1Article = () => {
    return (
        <div className='w-full grid justify-center mt-5'>
            <ul className='px-[7%]'>
                <Link className="hyperlink" href="/">
                    Pusat Edukasi -
                </Link>
                <Link className="hyperlink" href="/">
                    Artikel Ilmiah -
                </Link>
                <Link className="hyperlink" href="/">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Link>
            </ul>
            <div className='items-left mt-2 px-[7%]  '>
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
            </div>
            <div >
                <ul className='flex gap-3 mt-1 px-[7%]'>
                    <li>
                        <Image
                            src='/images/Vector.png'
                            alt={"vector.png"}
                            width={18}
                            height={20.75}
                        ></Image>
                    </li>
                    <li>
                        <p>31 January 2030</p>
                    </li>
                </ul>
            </div>
            <div className=' w-full grid justify-center mt-5 px-[7%]'>
                <Image
                    src='/images/Rectangle 229.png'
                    alt={"Rectangle 229.png"}
                    width={1200}
                    height={600}
                ></Image>
            </div>
            <p className=' text-justify pt-5 px-[7%]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan. Pellentesque nec aliquet dui. Aliquam pharetra odio sit amet risus tristique sollicitudin. Ut venenatis risus vel tellus dictum tincidunt. Nam rhoncus pellentesque nulla sit amet pretium. Integer lectus massa, consequat ut neque non, lobortis ornare elit. Sed commodo aliquet odio non malesuada. Proin semper, velit sit amet placerat laoreet, leo nibh tristique massa, ut pharetra nisi nibh vitae augue. Integer et convallis nisi.
                Nulla euismod, elit vel accumsan posuere, eros nulla ultricies libero, ac tincidunt magna diam et ligula. Pellentesque vitae ultricies mi. Vestibulum ac laoreet felis. Cras tempor lectus at vehicula condimentum. Nam sed mi in magna egestas efficitur eget et risus. Aenean quis elit sodales, dignissim diam eu, scelerisque tellus. Mauris pharetra libero a lacus condimentum, ac auctor ipsum convallis. Proin varius tempor eros, sed pellentesque nulla gravida ac. Sed porta gravida lorem ac dictum. In at velit at sapien sagittis sagittis. Aenean scelerisque felis est, et pellentesque magna tincidunt ac.
            </p>
            <div className=' grid justify-center mt-5 px-[7%]'>
                <Image
                    src='/images/Rectangle 228.png'
                    alt={"Rectangle 228.png"}
                    width={600}
                    height={400}
                ></Image>
            </div>
            <p className='mt-5 text-justify px-[7%]  '>
                Curabitur luctus orci vel magna maximus, nec tristique tellus bibendum. In ut magna et elit gravida tempor. Duis vulputate ex ultrices felis dignissim dictum. Aliquam eu ultrices libero, vel vulputate ex. Etiam ante ante, vulputate et sapien at, lacinia porta nisl. In auctor nisi arcu, eu iaculis libero fermentum ac. Aliquam non sem faucibus, bibendum nunc a, porta ante. Donec vel tempor diam, nec consequat sapien. Aliquam erat volutpat. Sed at aliquet nisi. Nullam ullamcorper odio sem, non congue nisi efficitur vitae. In luctus tempor lacus, eget rhoncus risus viverra id. In gravida quam metus, sed scelerisque nisl tincidunt quis. Pellentesque venenatis, nunc et dignissim vulputate, mi orci vestibulum arcu, varius auctor sem lectus eget justo. Cras auctor porttitor velit, ac ultricies lorem sagittis vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                Fusce mollis sollicitudin orci eget ullamcorper. Curabitur velit mauris, lobortis vitae pretium a, blandit et mi. Aliquam erat volutpat. Ut maximus finibus nisl, sit amet fermentum ante viverra quis. Nunc et consectetur lacus. Pellentesque nulla eros, tempus tincidunt ante ac, dictum facilisis dolor. Donec vel consectetur ex. Phasellus vehicula, ligula sit amet facilisis vestibulum, erat tellus convallis velit, sit amet scelerisque est lectus vitae odio. Vestibulum eu fermentum neque. Etiam at dapibus quam. Cras felis sapien, placerat quis vestibulum vel, dignissim eget enim. Duis consectetur vitae est id congue. Suspendisse in ex interdum, tincidunt erat vehicula, tristique arcu. Phasellus in metus eget odio pharetra eleifend pretium et quam.
                Nulla a tincidunt dui, nec pretium augue. Sed erat lectus, dictum et vehicula ut, sodales malesuada arcu. Vivamus vel neque mi. Donec maximus nibh quam, in congue enim suscipit sit amet. Donec vel dolor pharetra, efficitur leo quis, lacinia augue. Quisque eget ex mollis, dictum quam sed, tincidunt odio. Mauris accumsan sed odio sit amet ultricies. Sed posuere leo et feugiat feugiat. Etiam risus ligula, feugiat at nunc in, ullamcorper feugiat lacus. Phasellus ipsum lectus, gravida sed rhoncus et, fermentum ultricies ex. Aliquam mattis quam quis odio blandit, aliquam hendrerit nunc fringilla.
            </p>
            <div className='mt-5 px-[7%]  '>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }} />
            </div>
        </div>
    )
}

export default Section1Article