import Image from 'next/image';
import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from 'next/link';


const Footer = () => {
    return (
        <div className='bg-[#FDFAF5]'>
            <footer className="footer flex flex-col lg:grid lg:grid-cols-4 text-base-content p-5 md:p-10 w-[90%] mx-auto relative border-t-2">
                <aside>
                    <Image src="/logo.png" width="70" height="70" alt="" className='absolute right-0 lg:relative' />
                </aside>

                <nav className='space-y-2'>
                    <h6 className="footer-title text-[#888585]">Sobre Banktrack</h6>
                    <Link href="/" className="link link-hover">Funcionalidades</Link>
                    <Link href="#soluciones" className="link link-hover">Soluciones</Link>
                    <Link href="/precios" className="link link-hover">Precios</Link>
                    <Link href="/sobre-nosotros" className="link link-hover">Quiénes somos</Link>
                    <Link href="/blog" className="link link-hover">Blog</Link>
                </nav>
                <nav className='space-y-2'>
                    <h6 className="footer-title text-[#888585]">Soporte</h6>
                    <Link href="" className="link link-hover">Ayuda</Link>
                    <Link href="mailto:soporte@banktrack.com" target="_blank" className="link link-hover">Email</Link>
                </nav>
                <nav className='space-y-2'>
                    <h6 className="footer-title text-[#888585]">Artículos destacados</h6>
                    <Link href="/blog/title" className="link link-hover">Software de Tesorería</Link>
                    <Link href="/blog/title" className="link link-hover">Software Gestión de Gastos</Link>
                    <Link href="/blog/title" className="link link-hover">Control de Gastos en Pareja</Link>
                </nav>
                <nav className='space-y-2'>
                    <h6 className="footer-title text-[#888585]">Síguenos</h6>
                    <div className="grid grid-flow-col gap-4 text-2xl">
                        <Link href="https://linkedin.com/" target="_blank">
                            <FaLinkedinIn />
                        </Link>
                        <Link href="https://x.com/" target="_blank">
                            <FaXTwitter />
                        </Link>
                        <Link href="https://www.instagram.com/" target="_blank">
                            <FaInstagram />
                        </Link>
                        <Link href="https://www.tiktok.com/" target="_blank">
                            <FaTiktok />
                        </Link>
                        <Link href="https://www.youtube.com/" target="_blank">
                            <FaYoutube />
                        </Link>
                    </div>
                </nav>
            </footer>
            
            <footer className="footer px-5 md:px-10 py-4 w-[90%] mx-auto gap-4 text-[#888585] flex flex-col text-start lg:grid pt-10 pb-20">
                <div className='lg:flex gap-2 items-baseline'>
                    <form>
                        <select className='border-2 text-black'>
                            <option>Español</option>
                            <option>English</option>
                        </select>
                    </form >
                    <p>2024© Bank2Email - Todos los derechos reservados.</p>
                </div>
                <nav className="lg:place-self-center lg:justify-self-end">
                    <div className="flex flex-col lg:grid lg:grid-flow-col gap-4">
                        <Link href="/terms">
                            Términos y condiciones
                        </Link>
                        <Link href="/privacy">
                            Política de privacidad
                        </Link>
                        <Link href="/">
                            Gestionar cookies
                        </Link>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;




