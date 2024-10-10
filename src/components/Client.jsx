import Image from 'next/image';
import React from 'react';

const Client = () => {
    return (
        <div className='my-20'>
            <h3 className='text-center text-2xl font-bold'>Únete a <span className='bg-[#FFEED4]'>cientos de empresas</span> que ya están usando <br /> Banktrack para ahorrar tiempo y potenciar su negocio</h3>
            <div className='lg:flex flex-wrap justify-center hidden lg:gap-14 w-[85%] mx-auto my-10'>
                <Image src="/icon_1.png" width="250" height="250" alt="" className='h-20 w-36' />
                <Image src="/icon_2.png" width="250" height="250" alt="" className='h-20 w-36' />
                <Image src="/icon_3.png" width="250" height="250" alt="" className='h-20 w-36' />
                <Image src="/icon_4.png" width="250" height="250" alt="" className='h-20 w-36' />
                <Image src="/icon_5.png" width="250" height="250" alt="" className='h-20 w-36' />
                <Image src="/icon_6.png" width="250" height="250" alt="" className='h-20 w-36' />
                <Image src="/icon_7.png" width="250" height="250" alt="" className='h-20 w-36' />
                <Image src="/icon_8.png" width="250" height="250" alt="" className='h-20 w-36' />
                <Image src="/icon_9.png" width="250" height="250" alt="" className='h-20 w-36' />
                <Image src="/icon_10.png" width="250" height="250" alt="" className='h-20 w-36' />
            </div>
            <div>
                <div className="marquee-container overflow-hidden whitespace-nowrap gap-5 my-5 lg:hidden" >
                    <div className="marquee inline-block animate-marquee">
                        <Image src="/icon_1.png" width="250" height="250" alt="" className="h-12 w-28 md:h-20 md:w-36 inline-block mr-4" />
                        <Image src="/icon_2.png" width="250" height="250" alt="" className="h-12 w-28 md:h-20 md:w-36 inline-block mr-4" />
                        <Image src="/icon_3.png" width="250" height="250" alt="" className="h-12 w-28 md:h-20 md:w-36 inline-block mr-4" />
                        <Image src="/icon_4.png" width="250" height="250" alt="" className="h-12 w-28 md:h-20 md:w-36 inline-block mr-4" />
                        <Image src="/icon_5.png" width="250" height="250" alt="" className="h-12 w-28 md:h-20 md:w-36 inline-block mr-4" />
                        <Image src="/icon_6.png" width="250" height="250" alt="" className="h-12 w-28 md:h-20 md:w-36 inline-block mr-4" />
                        <Image src="/icon_7.png" width="250" height="250" alt="" className="h-12 w-28 md:h-20 md:w-36 inline-block mr-4" />
                        <Image src="/icon_8.png" width="250" height="250" alt="" className="h-12 w-28 md:h-20 md:w-36 inline-block mr-4" />
                        <Image src="/icon_9.png" width="250" height="250" alt="" className="h-12 w-28 md:h-20 md:w-36 inline-block mr-4" />
                        <Image src="/icon_10.png" width="250" height="250" alt="" className="h-12 w-28 md:h-20 md:w-36 inline-block mr-4" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Client;