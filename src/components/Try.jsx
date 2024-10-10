import Link from 'next/link';
import React from 'react';
import Meeting from './Meeting';
import Image from 'next/image';

const Try = () => {
    return (
        <div className='bg-gradient-to-r from-violet-600 to-blue-500 h-full flex gap-5 md:w-[80%] mx-auto justify-between md:rounded-3xl my-10'>
            <div className='py-10 w-[86%] lg:w-[50%] mx-auto my-auto'>
                <p className='font-bold'>Pruébalo</p>
                <h2 className='text-white text-3xl lg:text-5xl font-bold leading-tight'>Simplifica tus finanzas. Dedica más tiempo a tu negocio.</h2>
                <div className='my-7'>
                    <div className='flex justify-start gap-3 flex-col md:flex-row '>
                        <Link href="/registrarse">
                            <button className="btn bg-gradient-to-r from-red-300 to-red-500 text-white rounded-full btn-lg px-10 w-full border-none"><div>Empieza gratis</div></button>
                        </Link>

                        <Meeting />
                    </div>
                </div>
            </div>
            <div className="w-[30%] text-start h-full hidden lg:grid">
                <Image src="/client.png" width="500" height="500" alt="" className='hidden lg:grid w-full rounded-3xl' />
            </div>
        </div>
    );
};

export default Try;