import React, { useState } from "react";
import Map from "../atoms/Map";
import Button from "../atoms/Button";

type props = {
    TileLayer: any;
    Marker: any;
};

const Maps = () => {
    const DEFAULT_CENTER: number[] = [-6.209820, 106.708148];
    return (
        <div className="flex flex-wrap justify-evenly items-center  ">
            <div className="w-[521.35px] h-[521.35px] ">
                <Map width="200" height="200" center={DEFAULT_CENTER} zoom={12}>
                    {({ TileLayer, Marker }: props) => (
                        <>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={DEFAULT_CENTER}></Marker>
                        </>
                    )}
                </Map>
            </div>
            <div className="w-[40%] justify-center align-middle">
                <h2 className=' font-dmsans text-[#A03C78] text-4xl font-extrabold '>Lokasi kami</h2>
                <a href="/"><p className=' w-[100%]'>
                    Jln. Ciremai 2 No 10 Karang Tengah (Ciledug), Kec. Karang Tengah, Kota Tangerang
                    Telp : 0812 8094 0501 (SMS) dan No HP 08111220308 (WA)
                </p></a>
                
                <div className="pt-14 gap-10">
                    <ul className='flex flex-wrap gap-5'>
                        <li className=" p-5 px-16 border-2 rounded-full text-white border-[#843C74] bg-[#843C74]">
                            <Button title="Lihat Lokasi" />
                        </li>
                        <li className=" p-5 px-10 border-2 rounded-full text-[#843C74] border-[#843C74]">
                            <Button title="Hubungi Whatapps" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>


    );
};

export default Maps;

