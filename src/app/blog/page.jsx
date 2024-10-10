import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='bg-[#FDFAF5]'>
            <div className='w-[90%] md:w-[80%] mx-auto py-20'>
                <div className='pt-10'>
                    <h3 className='text-6xl font-bold'>Blog</h3>
                    <div className='w-full hidden lg:flex lg:justify-evenly gap-20 my-10'>
                        <Link href="/blog/title" className='w-full  h-[50vh] shadow-2xl hidden lg:grid'> <Image src="/blog_1.png" width="300" height="300" alt="" className='w-full rounded-2xl'/></Link>
                        <div className='w-[70%] pt-5 hidden lg:grid'>
                            <p className='text-[#4021C8] font-bold'>Banktrack</p>
                            <Link href="/blog/title"> <h3 className='text-4xl font-bold leading-normal'>Cómo tener una tesorería centralizada en 2024</h3></Link>
                            <p className='text-xl text-[#797979] leading-loose'>Centralizar la tesorería te permitirá mejorar el control financiero, optimizar recursos y aumentar la eficiencia en la gestión de tu empresa.</p>
                            <p className='text-[#b4b3b3] my-5 text-sm'>Carlos P.-26 sept 2024</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 lg:mt-20">

                        <div className="card bg-base-100 lg:w-96 shadow-xl lg:hidden">
                            <figure>
                                <Link href="/blog/title"><Image src="/blog_1.png" width="300" height="300" alt="" className="w-full h-64 md:h-48" /></Link>
                            </figure>
                            <div className="card-body">
                                <p className="font-bold text-[#4021C8]">Banktrack</p>
                                <Link href="/blog/title"><h2 className="card-title min-h-[64px]">Cómo tener una tesorería centralizada en 2024</h2></Link>
                                <p className="text-[#797979] line-clamp-3">
                                    Centralizar la tesorería te permitirá mejorar el control financiero, optimizar recursos y aumentar la eficiencia en la gestión de tu empresa.
                                </p>
                                <div className="card-actions justify-end text-sm text-[#b4b3b3]">
                                    <p>Carlos P.-26 sept 2024</p>
                                </div>
                            </div>
                        </div>



                        {/* 1st Card */}
                        <div className="card bg-base-100 lg:w-96 shadow-xl">
                            <figure>
                                <Link href="/blog/title"><Image src="/blog_2.png" width="300" height="300" alt="" className="w-full" /></Link>
                            </figure>
                            <div className="card-body">
                                <p className="font-bold text-[#4021C8]">Gastos</p>
                                <Link href="/blog/title"><h2 className="card-title min-h-[64px]">Mejor aplicación de gestión de suscripciones</h2></Link>
                                <p className="text-[#797979] line-clamp-3">
                                    Gestionar tantas suscripciones puede ser un caos. Con una buena app de gestión de suscripciones, podrás controlar tus pagos, evitar renovaciones inesperadas y ahorrar dinero.
                                </p>
                                <div className="card-actions justify-end text-sm text-[#b4b3b3]">
                                    <p>Carlos P. - 25 sept 2024</p>
                                </div>
                            </div>
                        </div>

                        {/* 2nd Card */}
                        <div className="card bg-base-100 lg:w-96 shadow-xl">
                            <figure>
                                <Link href="/blog/title"><Image src="/blog_3.png" width="300" height="300" alt="" className="w-full" /></Link>
                            </figure>
                            <div className="card-body">
                                <p className="font-bold text-[#4021C8]">Empresa</p>
                                <Link href="/blog/title"><h2 className="card-title min-h-[64px]">5 gastos que tiene una empresa con un trabajador de baja</h2></Link>
                                <p className="text-[#797979] line-clamp-3">
                                    Cuando un trabajador está de baja, los costes para la empresa van más allá de su salario. Te contamos cuáles son los principales gastos.
                                </p>
                                <div className="card-actions justify-end text-sm text-[#b4b3b3]">
                                    <p>Carlos P. - 25 sept 2024</p>
                                </div>
                            </div>
                        </div>

                        {/* 3rd Card */}
                        <div className="card bg-base-100 lg:w-96 shadow-xl">
                            <figure>
                                 <Link href="/blog/title"><Image src="/blog_4.png" width="300" height="300" alt="" className="w-full" /></Link>
                            </figure>
                            <div className="card-body">
                                <p className="font-bold text-[#4021C8]">Banktrack</p>
                                 <Link href="/blog/title"><h2 className="card-title min-h-[64px]">Cómo tener control de costes y gastos en tu restaurante</h2></Link>
                                <p className="text-[#797979] line-clamp-3">
                                    Optimiza inventarios y usa herramientas financieras para controlar los costes y mantener tu restaurante rentable.
                                </p>
                                <div className="card-actions justify-end text-sm text-[#b4b3b3]">
                                    <p>Carlos P. - 25 sept 2024</p>
                                </div>
                            </div>
                        </div>
                        {/* 1st Card */}
                        <div className="card bg-base-100 lg:w-96 shadow-xl">
                            <figure>
                                 <Link href="/blog/title"><Image src="/blog_2.png" width="300" height="300" alt="" className="w-full" /></Link>
                            </figure>
                            <div className="card-body">
                                <p className="font-bold text-[#4021C8]">Gastos</p>
                                 <Link href="/blog/title"><h2 className="card-title min-h-[64px]">Mejor aplicación de gestión de suscripciones</h2></Link>
                                <p className="text-[#797979] line-clamp-3">
                                    Gestionar tantas suscripciones puede ser un caos. Con una buena app de gestión de suscripciones, podrás controlar tus pagos, evitar renovaciones inesperadas y ahorrar dinero.
                                </p>
                                <div className="card-actions justify-end text-sm text-[#b4b3b3]">
                                    <p>Carlos P. - 25 sept 2024</p>
                                </div>
                            </div>
                        </div>

                        {/* 2nd Card */}
                        <div className="card bg-base-100 lg:w-96 shadow-xl">
                            <figure>
                                 <Link href="/blog/title"><Image src="/blog_3.png" width="300" height="300" alt="" className="w-full" /></Link>
                            </figure>
                            <div className="card-body">
                                <p className="font-bold text-[#4021C8]">Empresa</p>
                                 <Link href="/blog/title"><h2 className="card-title min-h-[64px]">5 gastos que tiene una empresa con un trabajador de baja</h2></Link>
                                <p className="text-[#797979] line-clamp-3">
                                    Cuando un trabajador está de baja, los costes para la empresa van más allá de su salario. Te contamos cuáles son los principales gastos.
                                </p>
                                <div className="card-actions justify-end text-sm text-[#b4b3b3]">
                                    <p>Carlos P. - 25 sept 2024</p>
                                </div>
                            </div>
                        </div>

                        {/* 3rd Card */}
                        <div className="card bg-base-100 lg:w-96 shadow-xl">
                            <figure>
                                 <Link href="/blog/title"><Image src="/blog_4.png" width="300" height="300" alt="" className="w-full" /></Link>
                            </figure>
                            <div className="card-body">
                                <p className="font-bold text-[#4021C8]">Banktrack</p>
                                 <Link href="/blog/title"><h2 className="card-title min-h-[64px]">Cómo tener control de costes y gastos en tu restaurante</h2></Link>
                                <p className="text-[#797979] line-clamp-3">
                                    Optimiza inventarios y usa herramientas financieras para controlar los costes y mantener tu restaurante rentable.
                                </p>
                                <div className="card-actions justify-end text-sm text-[#b4b3b3]">
                                    <p>Carlos P. - 25 sept 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default page;