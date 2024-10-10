import Image from 'next/image';
import React from 'react';
import { FcGoogle } from "react-icons/fc";


const page = () => {
    return (
        <div className='h-screen'>
            <div className='pt-20  flex gap-0 h-screen'>
                <div className='hidden lg:grid w-[30%] bg-[#4021C8]'>
                    <div className='pl-20 pt-24'>
                        <h3 className='text-white text-3xl font-extrabold w-80'>Recupera el control de tus finanzas</h3>
                        <Image src="/register.png" width="500" height="500" alt="" className='' />
                    </div>
                </div>
                <div className='md:w-[80%] mx-auto lg:w-[70%] flex justify-center text-center pt-10'>

                    <div className="flex flex-col border-opacity-50" >
                        <div>
                            <div className='w-[80%] md:w-full mx-auto'>
                                <h3 className='text-2xl lg:text-4xl font-bold'>Accede a tu cuenta</h3>
                                <p className='text-lg text-[#9b9a9a] mt-5 mb-10 md:w-[80%] md:mx-auto'>Inicia sesión con tu cuenta de Google, con tu email o con un código de un solo uso.</p>
                                <button className='btn bg-white rounded-full text-sm w-full lg:w-[80%] mx-auto'><FcGoogle className='text-xl relative -left-12 md:-left-2 lg:-left-40' />Registrarse con Google</button>
                                <button className='btn bg-white rounded-full text-sm w-full lg:w-[80%] mx-auto mt-5 text-center'>*** Solicitar código de un uso</button>
                            </div>
                        </div>
                        <div className="divider my-10 w-[80%] md:w-full lg:w-[80%] mx-auto">O</div>
                        <div className='space-y-3 w-[80%] md:w-full mx-auto'>
                            <input type="email" placeholder="Tu correo electrónico" className="input input-bordered w-full lg:w-[80%] " />
                            <input type="password" placeholder="Contraseña" className="input input-bordered w-full lg:w-[80%]" />
                            <div className='py-5'>
                                <button className='btn btn-lg text-white rounded-full w-full lg:w-[80%] bg-[#4021C8] '>Empezar</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default page;