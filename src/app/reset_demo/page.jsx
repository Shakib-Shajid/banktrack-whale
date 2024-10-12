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
                <div className='w-[80%] mx-auto lg:w-[60%] flex justify-center items-center text-center pt-5'>

                    <div className="flex flex-col border-opacity-50" >
                        {/* <Image src="/logo.svg" height="150" width="150" alt="" className='lg:hidden'/> */}
                        <div>
                            <div className='w-full text-start lg:text-center'>
                                <h3 className='text-2xl lg:text-4xl font-bold font-montserrat'>Actualiza la contraseña</h3>
                                <p className='text-base text-[#9b9a9a] lg:w-[80%] lg:mx-auto font-dm_sans mt-2 mb-3'>Escribe el código de verificación que te hemos enviado a <span className='font-bold'>a@gmail.com.</span></p>
                                <p className='text-base text-[#9b9a9a] lg:w-[80%] lg:mx-auto font-dm_sans mt-2 mb-3'>El código es válido durante 3 minutos.</p>
                            </div>
                        </div>
                        <div className='space-y-3 w-full mx-auto mt-5'>
                            <input type="number" placeholder="Código de verificación" className="input input-bordered w-full lg:w-[80%] font-dm_sans" required />
                        </div>
                        
                        
                        <div className='space-y-3 w-full mx-auto mt-5'>
                            <input type="password" placeholder="Nueva contraseña" className="input input-bordered w-full lg:w-[80%] font-dm_sans" required />
                            <input type="password" placeholder="Repetir Nueva Contraseña" className="input input-bordered w-full lg:w-[80%] font-dm_sans" required />
                            <div className='py-2 pb-5'>
                                <button className='btn btn-lg text-white rounded-full w-full lg:w-[80%] bg-[#4021C8] font-montserrat'>Cambiar Contraseña</button>
                            </div>
                        </div>
                        <div className='w-[80%] md:w-full lg:w-[80%] mx-auto text-xs font-dm_sans'>
                            <p className='text-[#9b9a9a] my-5'>¿No encuentras el email? Mira si te ha llegado a la carpeta de no deseados.</p>
                            <Link href="/iniciar-sesion" ><span className='text-[#9b9a9a] underline font-dm_sans'>Volver a Iniciar Sesión</span></Link>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default page;