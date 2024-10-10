import Image from 'next/image';
import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';

const Collection = () => {
    return (
        <div className='w-full max-w-7xl mx-auto flex flex-col gap-16 items-center lg:flex-row my-20'>
            <div className='w-[80%] lg:ml-40 space-y-3'>
                <div className='mt-10'>
                    <h3 className='text-xl font-bold text-[#4021C8] uppercase'>SEM (ADS)</h3>
                    <p className='text-4xl font-bold leading-tight'>Campañas publicitarias efectivas para maximizar tu ROI</p>
                </div>
                <div className='text-[#828080] space-y-1 w-full'>

                    <p><IoMdCheckmark className='inline-block mr-1' />Gestión y optimización de anuncios en Google y redes sociales</p>
                    <p><IoMdCheckmark className='inline-block mr-1' />Segmentación precisa de audiencia</p>
                    <p><IoMdCheckmark className='inline-block mr-1' />Informes detallados y análisis de rendimiento</p>
                    <p><IoMdCheckmark className='inline-block mr-1' />Ajuste de presupuestos y pujas en tiempo real</p>
                </div>
            </div>
            <Image src="/collection.png" width="300" height="300" alt="" className='w-[90%] md:w-[80%] lg:w-full mx-auto' />

        </div>
    );
};

export default Collection;