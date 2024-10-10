import Image from 'next/image';
import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';

const Forecast = () => {
    return (
        <div className='w-full flex flex-col gap-10 justify-center items-center lg:flex-row-reverse'>
            <div className='w-[80%] space-y-3 mt-5 md:mt-10'>
                <h3 className='text-xl font-bold text-[#4021C8] uppercase'>DESARROLLO DE ECOMMERCE</h3>
                <p className='text-4xl font-bold leading-tight'>Tiendas online atractivas y funcionales</p>
                <div className='text-[#828080] space-y-3'>
                    <p><IoMdCheckmark className='inline-block mr-1' /> Creación de tiendas personalizadas</p>
                    <p><IoMdCheckmark className='inline-block mr-1' /> Integración de sistemas de pago y gestión de inventarios</p>
                    <p><IoMdCheckmark className='inline-block mr-1' /> Diseño responsive y optimización móvil</p>
                    <p><IoMdCheckmark className='inline-block mr-1' /> Soporte y mantenimiento continuo</p>
                </div>
            </div>
            <Image src="/forecast.png" width="300" height="300" alt="" className='h-[300px] md:h-[500px] w-[90%] md:w-[80%] lg:w-full mx-auto lg:ml-20' />

        </div>
    );
};

export default Forecast;