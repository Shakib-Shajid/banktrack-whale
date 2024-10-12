import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const page = () => {
    return (
        <div className='h-screen'>
            <div className='pt-20  flex gap-0 h-screen'>
                <div className='hidden lg:grid w-[30%] bg-[#4021C8]'>
                    <div className='pl-20 pt-24'>
                        <h3 className='text-white text-3xl font-extrabold w-80 font-dm_sans'>Recupera el control de tus finanzas</h3>
                        <Image src="/register.png" width="500" height="500" alt="" className='' />
                    </div>
                </div>
                <div className='w-full md:w-[80%] mx-auto lg:w-[60%] flex justify-center items-center text-center pt-5'>

                    <div className="flex flex-col border-opacity-50" >
                        <Image src="/logo.svg" height="150" width="150" alt="" className='lg:hidden'/>
                        <div>
                            <div className='w-full text-start lg:text-center'>
                                <h3 className='text-2xl lg:text-4xl font-bold font-montserrat '>Recuperar Contraseña</h3>
                                <p className='text-base md:text-lg text-[#9b9a9a] lg:w-[80%] lg:mx-auto font-dm_sans mt-2 mb-3'>Introduce tu email para recuperarla.</p>
                            </div>
                        </div>
                        <div className='space-y-3 w-full mx-auto mt-5'>
                            <input type="email" placeholder="Tu correo electrónico" className="input input-bordered w-full lg:w-[80%] font-dm_sans" required />
                            <div className='py-2 pb-5'>
                                <Link href="/reset_demo"><button className='btn btn-lg text-white rounded-full w-full lg:w-[80%] bg-[#4021C8] font-montserrat'>Continuar</button></Link>
                            </div>
                        </div>
                        <div className='w-[80%] md:w-full lg:w-[80%] mx-auto text-xs font-dm_sans'>
                            <Link href="/iniciar-sesion" ><span className='text-[#9b9a9a] underline font-dm_sans'>Volver a Iniciar Sesión</span></Link>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default page;