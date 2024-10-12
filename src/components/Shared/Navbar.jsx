"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";

import AOS from 'aos';
import 'aos/dist/aos.css';

import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
});




const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        AOS.init();
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Function to close modal
    const closeModal = () => {
        const modal = document.getElementById('my_modal_3');
        modal.close();
    };

    const navLink = (
        <>
            <li>
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="group">
                        Servicios
                        <IoIosArrowDown className="inline-block ml-2 group-hover:rotate-180 transform-translate duration-200 ease-in" />
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] mt-[22rem] py-10 w-[700%] p-2 shadow">
                        <div className='flex gap-3'>
                            <div>
                                <li>
                                    <Link href="/dashboards">
                                        <div className='text-sm flex gap-4'>
                                            <Image src="/who_1_2.png" width="70" height="70" alt="" />
                                            <div>
                                                <h2>Dashboards</h2>
                                                <p className='text-[#787474]'>La vista de datos bancarios que siempre quisiste.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>


                                <li>
                                    <div className='text-sm flex gap-4'>
                                        <Image src="/who_1_3.png" width="70" height="70" alt="" />
                                        <div>
                                            <h2>Buscador</h2>
                                            <p className='text-[#787474]'>El motor de busqueda para tus cuentas bancarias.</p>
                                        </div>
                                    </div>
                                </li>


                                <li>
                                    <div className='text-sm flex gap-4'>
                                        <Image src="/who_1_7.png" width="70" height="70" alt="" />
                                        <div>
                                            <h2>Alertas</h2>
                                            <p className='text-[#787474]'>Entérate cuando pasan cosas raras.</p>
                                        </div>
                                    </div>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <div className='text-sm flex gap-4'>
                                        <Image src="/who_1_2.png" width="70" height="70" alt="" />
                                        <div>
                                            <h2>Previsiones</h2>
                                            <p className='text-[#787474]'>El futuro de tu tesorería bajo control.</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className='text-sm flex gap-4'>
                                        <Image src="/who_1_2.png" width="70" height="70" alt="" />
                                        <div>
                                            <h2>Informes</h2>
                                            <p className='text-[#787474]'>Tu tesorería siempre contigo.</p>
                                        </div>
                                    </div>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <div className='text-sm flex gap-4'>
                                        <Image src="/who_1_2.png" width="70" height="70" alt="" />
                                        <div>
                                            <h2>Cobros y pagos</h2>
                                            <p className='text-[#787474]'>Conciliación automática de facturas.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='text-sm flex gap-4'>
                                        <Image src="/who_1_2.png" width="70" height="70" alt="" />
                                        <div>
                                            <h2>Reglas automáticas</h2>
                                            <p className='text-[#787474]'>Categorización gastos e ingresos &quot;nivel Dios&quot;.</p>
                                        </div>
                                    </div>
                                </li>
                            </div>
                        </div>
                    </ul>
                </div>
            </li>
            {/* <li>
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="group">
                        ¿Para quién es?
                        <IoIosArrowDown className="inline-block ml-2 group-hover:rotate-180 transform-translate duration-200 ease-in" />
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] mt-96 w-[900%] p-2 py-10 shadow">


                        <div className='flex gap-3'>
                            <div>
                                <li>
                                    <div className='text-sm flex gap-4'>
                                        <Image src="/nav_1.png" width="70" height="70" alt="" />
                                        <div>
                                            <h2>Particulares</h2>
                                            <p className='text-[#787474]'>Para controlar tus finanzas personales y domésticas.</p>
                                        </div>
                                    </div>
                                </li>


                                <li>
                                    <div className='text-sm flex gap-4'>
                                        <Image src="/nav_2.png" width="70" height="70" alt="" />
                                        <div>
                                            <h2>Autónomos</h2>
                                            <p className='text-[#787474]'>Para que no tengas que hacerlo todo tú solo.</p>
                                        </div>
                                    </div>
                                </li>


                                <li>
                                    <div className='text-sm flex gap-4'>
                                        <Image src="/nav_3.png" width="70" height="70" alt="" />
                                        <div>
                                            <h2>Empresas</h2>
                                            <p className='text-[#787474]'>Para tener una visión clara de tu flujo de caja.</p>
                                        </div>
                                    </div>
                                </li>
                            </div>

                            <div className='border-l-2'>

                            </div>

                            <div>
                                <li>
                                    <div className='text-sm flex gap-4'>
                                        <Image src="/nav_4.png" width="70" height="70" alt="" />
                                        <div>
                                            <h2>Hostelería</h2>
                                            <p className='text-[#787474]'>Control total de las finanzas de tu restaurante.</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className='text-sm flex gap-4'>
                                        <Image src="/nav_5.png" width="70" height="70" alt="" />
                                        <div>
                                            <h2>Farmacias</h2>
                                            <p className='text-[#787474]'>Olvídate del caos de facturas y proveedores.</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className='text-sm flex gap-4'>
                                        <Image src="/nav_6.png" width="70" height="70" alt="" />
                                        <div>
                                            <h2>Retail</h2>
                                            <p className='text-[#787474]'>Proveedores, compras y ventas, todo controlado.</p>
                                        </div>
                                    </div>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <div className='text-sm flex gap-4'>
                                        <Image src="/nav_7.png" width="70" height="70" alt="" />
                                        <div>
                                            <h2>Hoteles y BnBs</h2>
                                            <p className='text-[#787474]'>Los gastos e ingresos de tu alquiler vacacional bajo control.</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className='text-sm flex gap-4'>
                                        <Image src="/nav_8.png" width="70" height="70" alt="" />
                                        <div>
                                            <h2>Asesores y Gestorías</h2>
                                            <p className='text-[#787474]'>Ahorra tiempo teniendo acceso directo a los datos de tus clientes.</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className='text-sm flex gap-4'>
                                        <Image src="/nav_9.png" width="70" height="70" alt="" />
                                        <div>
                                            <h2>Startups</h2>
                                            <p className='text-[#787474]'>Las finanzas de tu proyecto bajo control.</p>
                                        </div>
                                    </div>
                                </li>
                            </div>
                        </div>
                        <p className='ml-48 text-center mt-5 text-[#a29e9e]'>Estos son solo algunos ejemplos. Nos adaptamos a cualquier negocio. <span className='underline text-blue-600'>Ver más...</span></p>
                    </ul>
                </div>
            </li>  */}
            <li><Link onClick={closeModal} href="/"> ¿Para quién es?</Link></li>
            <li><Link onClick={closeModal} href="/casos-exito">Casos de éxito</Link></li>
            <li><Link onClick={closeModal} href="/precios">Contacto</Link></li>
            <li>
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="group">
                        ¿Quiénes somos?
                        <IoIosArrowDown className="inline-block ml-2 group-hover:rotate-180 transform-translate duration-200 ease-in" />
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] mt-40 w-[400%] p-2 shadow py-5">
                        <div className='flex gap-5'>
                            <li><Link href="/video-academy">
                                <div className='text-sm flex gap-4'>
                                    <Image src="/video.png" width="70" height="70" alt="" />
                                    <div>
                                        <h2>Vídeo Academy</h2>
                                        <p className='text-[#787474]'>Aprende a usar Banktrack <br /> con vídeos rápidos.</p>
                                    </div>
                                </div>
                            </Link></li>

                            <li>
                                <div className='text-sm flex gap-4'>
                                    <Image src="/question.png" width="70" height="70" alt="" />
                                    <div>
                                        <h2>Centro de Ayuda</h2>
                                        <p className='text-[#787474]'>Todo lo que necesitas saber <br /> sobre cómo usar Banktrack.</p>
                                    </div>
                                </div>
                            </li>
                        </div>
                    </ul>
                </div>
            </li>
        </>
    );

    return (
        <div className={`${dmSans.className} font-medium `}>
            <div className={`navbar z-50 fixed ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
                <div className="navbar-start md:pl-12 lg:pl-32">
                    <Link href="/" legacyBehavior>
                        <Image
                            // src="/logo-w.png"
                            src="/logo.svg"
                            width="500"
                            height="500"
                            alt="Banktrack logo"
                            className="h-20 w-28 cursor-pointer"
                            priority
                        />
                    </Link>
                    {/* <Link onClick={closeModal} href="/" className="ml-2 text-base md:text-xl font-bold">Banktrack</Link> */}

                    <div className="navbar-center hidden lg:flex ml-10">
                        <ul className="menu menu-horizontal px-1">
                            {navLink}
                        </ul>
                    </div>
                </div>

                <div className="navbar-end md:pr-12 lg:pr-32">
                    <Link className="text-[14px] rounded-full px-4 mr-3 hidden md:grid" href="/iniciar-sesion"> Análisis SEO</Link>
                    <Link className="text-[14px] btn bg-black text-white rounded-full px-4 border-none" href="/registrarse">Agendar demo</Link>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={() => document.getElementById('my_modal_3').showModal()}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />

                            </svg>

                        </div>
                        <dialog id="my_modal_3" className="modal fixed inset-0 p-0 m-0">
                            <div className="h-full w-full relative bg-white flex flex-col justify-between overflow-y-auto">
                                <div>
                                    {/* .................................................................................... */}
                                    <div className="flex justify-between items-center w-[90%] mx-auto mt-5">
                                        <Link onClick={closeModal} href="/">
                                            <div className='flex gap-2 items-center '>
                                                <Image src="/logo-w.png" width="100" height="100" alt="Banktrack logo" className="h-8 w-8" />
                                                <span className="ml-2 text-base md:text-xl font-bold">Banktrack</span>
                                            </div>
                                        </Link>
                                        <button className='text-[14px] btn bg-black text-white rounded-full px-4 border-none mr-8'><Link onClick={closeModal} href="/registrarse">Agendar demo</Link></button>
                                    </div>
                                    {/* .................................................................................... */}
                                    <form method="dialog">
                                        {/* Close button */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-7 text-xl">✕</button>
                                    </form>
                                    <div className='mt-20 w-[90%] mx-auto'>
                                        <div className="collapse collapse-arrow border-b-2 mb-5 shadow-none rounded-none ">
                                            <input type="checkbox" name="my-accordion-2" />
                                            <div className="collapse-title text-2xl font-medium">Servicios</div>
                                            <div className="collapse-content ">
                                                <Link href="/dashboards" onClick={closeModal}>
                                                    <div className='mt-5 text-base flex gap-4'>
                                                        <Image src="/who_1_2.png" width="80" height="80" alt="" />
                                                        <div>
                                                            <h2>Dashboards</h2>
                                                            <p className='text-[#787474]'>La vista de datos bancarios que siempre quisiste.</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className='mt-5 text-base flex gap-4'>
                                                    <Image src="/who_1_3.png" width="80" height="80" alt="" />
                                                    <div>
                                                        <h2>Buscador</h2>
                                                        <p className='text-[#787474]'>El motor de busqueda para tus cuentas bancarias.</p>
                                                    </div>
                                                </div>
                                                <div className='mt-5 text-base flex gap-4'>
                                                    <Image src="/who_1_7.png" width="80" height="80" alt="" />
                                                    <div>
                                                        <h2>Alertas</h2>
                                                        <p className='text-[#787474]'>Entérate cuando pasan cosas raras.</p>
                                                    </div>
                                                </div>
                                                <div className='mt-5 text-base flex gap-4'>
                                                    <Image src="/who_1_2.png" width="80" height="80" alt="" />
                                                    <div>
                                                        <h2>Previsiones</h2>
                                                        <p className='text-[#787474]'>El futuro de tu tesorería bajo control.</p>
                                                    </div>
                                                </div>
                                                <div className='mt-5 text-base flex gap-4'>
                                                    <Image src="/who_1_2.png" width="80" height="80" alt="" />
                                                    <div>
                                                        <h2>Informes</h2>
                                                        <p className='text-[#787474]'>Tu tesorería siempre contigo.</p>
                                                    </div>
                                                </div>
                                                <div className='mt-5 text-base flex gap-4'>
                                                    <Image src="/who_1_2.png" width="80" height="80" alt="" />
                                                    <div>
                                                        <h2>Cobros y pagos</h2>
                                                        <p className='text-[#787474]'>Conciliación automática de facturas.</p>
                                                    </div>
                                                </div>
                                                <div className='mt-5 text-base flex gap-4'>
                                                    <Image src="/who_1_2.png" width="80" height="80" alt="" />
                                                    <div>
                                                        <h2>Reglas automáticas</h2>
                                                        <p className='text-[#787474]'>Categorización gastos e ingresos &quot;nivel Dios&quot;.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="collapse collapse-arrow border-b-2 mb-5 shadow-none rounded-none">
                                            <input type="checkbox" name="my-accordion-2" />
                                            <div className="collapse-title text-2xl font-medium">¿Para quién es?</div>
                                            <div className="collapse-content">
                                                <div className='mt-5 text-base flex gap-4'>
                                                    <Image src="/nav_1.png" width="70" height="70" alt="" />
                                                    <div>
                                                        <h2>Particulares</h2>
                                                        <p className='text-[#787474]'>Para controlar tus finanzas personales y domésticas.</p>
                                                    </div>
                                                </div>
                                                <div className='mt-5 text-base flex gap-4'>
                                                    <Image src="/nav_2.png" width="70" height="70" alt="" />
                                                    <div>
                                                        <h2>Autónomos</h2>
                                                        <p className='text-[#787474]'>Para que no tengas que hacerlo todo tú solo.</p>
                                                    </div>
                                                </div>
                                                <div className='mt-5 text-base flex gap-4'>
                                                    <Image src="/nav_3.png" width="70" height="70" alt="" />
                                                    <div>
                                                        <h2>Empresas</h2>
                                                        <p className='text-[#787474]'>Para tener una visión clara de tu flujo de caja.</p>
                                                    </div>
                                                </div>
                                                <div className='border-b-2 my-5'>

                                                </div>
                                                <div className='mt-5 text-base flex gap-4'>
                                                    <Image src="/nav_4.png" width="70" height="70" alt="" />
                                                    <div>
                                                        <h2>Hostelería</h2>
                                                        <p className='text-[#787474]'>Control total de las finanzas de tu restaurante.</p>
                                                    </div>
                                                </div>
                                                <div className='mt-5 text-base flex gap-4'>
                                                    <Image src="/nav_5.png" width="70" height="70" alt="" />
                                                    <div>
                                                        <h2>Farmacias</h2>
                                                        <p className='text-[#787474]'>Olvídate del caos de facturas y proveedores.</p>
                                                    </div>
                                                </div>
                                                <div className='mt-5 text-base flex gap-4'>
                                                    <Image src="/nav_6.png" width="70" height="70" alt="" />
                                                    <div>
                                                        <h2>Retail</h2>
                                                        <p className='text-[#787474]'>Proveedores, compras y ventas, todo controlado.</p>
                                                    </div>
                                                </div>
                                                <div className='mt-5 text-base flex gap-4'>
                                                    <Image src="/nav_7.png" width="70" height="70" alt="" />
                                                    <div>
                                                        <h2>Hoteles y BnBs</h2>
                                                        <p className='text-[#787474]'>Los gastos e ingresos de tu alquiler vacacional bajo control.</p>
                                                    </div>
                                                </div>
                                                <div className='mt-5 text-base flex gap-4'>
                                                    <Image src="/nav_8.png" width="70" height="70" alt="" />
                                                    <div>
                                                        <h2>Asesores y Gestorías</h2>
                                                        <p className='text-[#787474]'>Ahorra tiempo teniendo acceso directo a los datos de tus clientes.</p>
                                                    </div>
                                                </div>
                                                <div className='mt-5 text-base flex gap-4'>
                                                    <Image src="/nav_9.png" width="70" height="70" alt="" />
                                                    <div>
                                                        <h2>Startups</h2>
                                                        <p className='text-[#787474]'>Las finanzas de tu proyecto bajo control.</p>
                                                    </div>
                                                </div>
                                                <p className='ml-1 mt-5 text-[#a29e9e]'>Estos son solo algunos ejemplos. Nos adaptamos a cualquier negocio. <span className='underline text-blue-600'>Ver más...</span></p>
                                            </div>
                                        </div> */}

                                        <div className="collapse border-b-2 mb-5 shadow-none rounded-none">
                                            <Link href="/casos-exito" onClick={closeModal}><div className="collapse-title text-2xl font-medium">¿Para quién es?</div></Link>
                                        </div>

                                        <div className="collapse border-b-2 mb-5 shadow-none rounded-none">
                                            <Link href="/casos-exito" onClick={closeModal}><div className="collapse-title text-2xl font-medium">Casos de éxito</div></Link>
                                        </div>

                                        <div className="collapse border-b-2 mb-5 shadow-none rounded-none">
                                            <Link onClick={closeModal} href="/precios"><div className="collapse-title text-2xl font-medium">Contacto</div></Link>

                                        </div>
                                        <div className="collapse collapse-arrow border-b-2 mb-5 shadow-none rounded-none">
                                            <input type="checkbox" name="my-accordion-2" />
                                            <div className="collapse-title text-2xl font-medium">¿Quiénes somos?</div>
                                            <div className="collapse-content">
                                                <Link href="/video-academy" onClick={closeModal}>
                                                    <div className='mt-5 text-base flex gap-4'>
                                                        <Image src="/video.png" width="70" height="70" alt="" />
                                                        <div>
                                                            <h2>Vídeo Academy</h2>
                                                            <p className='text-[#787474]'>Aprende a usar Banktrack <br /> con vídeos rápidos.</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className='mt-5 text-base flex gap-4'>
                                                    <Image src="/question.png" width="70" height="70" alt="" />
                                                    <div>
                                                        <h2>Centro de Ayuda</h2>
                                                        <p className='text-[#787474]'>Todo lo que necesitas saber <br /> sobre cómo usar Banktrack.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className='w-[90%] mx-auto mb-20'>
                                    <Link onClick={closeModal} className="text-[14px] w-full btn bg-[#4021C8] text-white rounded-full px-4 border-none" href="/registrarse">Agendar demo</Link>
                                    <Link onClick={closeModal} className="text-[14px] w-full btn btn-ghost rounded-full px-4 mr-3 mt-5" href="/iniciar-sesion"> Análisis SEO</Link>
                                </div>
                            </div>
                        </dialog>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
