import Image from 'next/image';
import React from 'react';
import { IoMdCheckmark } from "react-icons/io";

const Finance = () => {
    return (
        <div className='w-full max-w-7xl mx-auto flex flex-col gap-10 justify-center items-center lg:flex-row-reverse'>
            <div className='w-[80%] lg:ml-10 space-y-3'>
                <h3 className='text-xl font-bold text-[#4021C8] uppercase font-dm_sans'>SEO</h3>
                <p className='text-4xl font-bold leading-tight font-montserrat'>Mejora tu visibilidad y atrae más tráfico orgánico</p>
                <div className='text-[#828080] space-y-3 font-dm_sans'>
                    <p><IoMdCheckmark className='inline-block mr-1' /> Estrategias personalizadas para tu negocio </p>
                    <p><IoMdCheckmark className='inline-block mr-1' /> Optimización continua de tu sitio web </p>
                    <p><IoMdCheckmark className='inline-block mr-1' /> Investigación de palabras clave y competencia </p>
                    <p><IoMdCheckmark className='inline-block mr-1' /> Creación de contenido relevante y de calidad </p>
                </div>
            </div>
            <Image src="/finance.png" width="300" height="300" alt="" className='w-[90%] md:w-[80%] lg:w-full mx-auto' />

        </div>
    );
};

export default Finance;