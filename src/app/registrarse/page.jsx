import Image from 'next/image';
import React from 'react';
import { FcGoogle } from "react-icons/fc";


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
                <div className='md:w-[80%] mx-auto lg:w-[70%] flex justify-center text-center pt-10'>

                    <div className="flex flex-col border-opacity-50" >
                        <div>
                            <div className='w-[100%] mx-auto'>
                                <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold font-montserrat'>Empieza tu prueba gratis</h3>
                                <p className='md:text-lg lg:text-lg text-[#9b9a9a] mt-5 mb-10 font-dm_sans'>Prueba de 14 días. No necesitas tarjeta de crédito.</p>
                                <button className='w-[90%] md:w-[100%] btn bg-white rounded-full text-sm mx-auto font-dm_sans'><FcGoogle className='text-xl relative -left-16 md:-left-28' />Registrarse con Google</button>
                            </div>
                        </div>
                        <div className="divider my-10 w-[90%] md:w-[100%] mx-auto font-dm_sans">O</div>
                        <div className='space-y-3 w-[90%] md:w-full mx-auto'>
                            <input type="email" placeholder="Tu correo electrónico" className="input input-bordered w-full lg:w-full font-dm_sans" />
                            <input type="password" placeholder="Contraseña" className="input input-bordered w-full lg:w-full font-dm_sans" />
                            <div className='py-5'>
                                <button className='btn btn-lg text-white rounded-full w-full bg-[#4021C8] font-montserrat'>Empezar</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default page;