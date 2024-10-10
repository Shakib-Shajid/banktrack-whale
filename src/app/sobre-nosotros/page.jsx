import Image from 'next/image';
import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';


const page = () => {
    return (
        <div className='bg-[#FDFAF5]'>
            <div className='w-[94%] md:w-[80%] lg:w-[60%] mx-auto'>
                <div className='pt-32'>
                    <h3 className='text-4xl font-bold'>Misión</h3>
                    <p className='text-2xl my-5 leading-normal'>Modernizar la manera en la que los usuarios interactúan con su información financiera, recibiendo toda la información bancaria de la forma más simple y efectiva posible, directamente por email o app de mensajería favorita</p>
                </div>

                <h3 className='text-4xl font-bold mt-24'>Equipo</h3>
                <p className='text-2xl my-5 lg:w-[70%] leading-normal'>Somos un equipo con más de 20 años de experiencia fundando empresas (InfoJobs, Mailtrack, Hireflix, etc.) y experiencia en el sector financiero.</p>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5'>
                    {/* 1st */}
                    <div className="card w-96 md:w-48 h-48 bg-white p-4 flex items-center justify-center shadow-xl">
                        <Image src="/ceo.png" width="50" height="50" alt="" className='rounded-full mb-3' />
                        <p className='text-base font-bold'>Nacho Gonzalez</p>
                        <p className='text-[#888585] text-sm my-1'>Co-founder</p>
                        <div className='flex gap-5 text-xl text-[#888585]'>
                            <Link href="https://x.com/"> <FaXTwitter /></Link>
                            <Link href="https://www.linkedin.com/"> <FaLinkedinIn /></Link>
                        </div>
                    </div>

                    {/* 2nd */}
                    <div className="card w-96 md:w-48 h-48 bg-white p-4 flex items-center justify-center shadow-xl">
                        <Image src="/ceo.png" width="50" height="50" alt="" className='rounded-full mb-3' />
                        <p className='text-base font-bold'>Nacho Gonzalez</p>
                        <p className='text-[#888585] text-sm my-1'>Co-founder</p>
                        <div className='flex gap-5 text-xl text-[#888585]'>
                            <Link href="https://x.com/"> <FaXTwitter /></Link>
                            <Link href="https://www.linkedin.com/"> <FaLinkedinIn /></Link>
                        </div>
                    </div>

                    {/* 3rd */}
                    <div className="card w-96 md:w-48 h-48 bg-white p-4 flex items-center justify-center shadow-xl">
                        <Image src="/ceo.png" width="50" height="50" alt="" className='rounded-full mb-3' />
                        <p className='text-base font-bold'>Nacho Gonzalez</p>
                        <p className='text-[#888585] text-sm my-1'>Co-founder</p>
                        <div className='flex gap-5 text-xl text-[#888585]'>
                            <Link href="https://x.com/"> <FaXTwitter /></Link>
                            <Link href="https://www.linkedin.com/"> <FaLinkedinIn /></Link>
                        </div>
                    </div>

                    {/* 4th */}
                    <div className="card w-96 md:w-48 h-48 bg-white p-4 flex items-center justify-center shadow-xl">
                        <Image src="/ceo.png" width="50" height="50" alt="" className='rounded-full mb-3' />
                        <p className='text-base font-bold'>Nacho Gonzalez</p>
                        <p className='text-[#888585] text-sm my-1'>Co-founder</p>
                        <div className='flex gap-5 text-xl text-[#888585]'>
                            <Link href="https://x.com/"> <FaXTwitter /></Link>
                            <Link href="https://www.linkedin.com/"> <FaLinkedinIn /></Link>
                        </div>
                    </div>

                    {/* 1st */}
                    <div className="card w-96 md:w-48 h-48 bg-white p-4 flex items-center justify-center shadow-xl">
                        <Image src="/ceo.png" width="50" height="50" alt="" className='rounded-full mb-3' />
                        <p className='text-base font-bold'>Nacho Gonzalez</p>
                        <p className='text-[#888585] text-sm my-1'>Co-founder</p>
                        <div className='flex gap-5 text-xl text-[#888585]'>
                            <Link href="https://x.com/"> <FaXTwitter /></Link>
                            <Link href="https://www.linkedin.com/"> <FaLinkedinIn /></Link>
                        </div>
                    </div>

                    {/* 2nd */}
                    <div className="card w-96 md:w-48 h-48 bg-white p-4 flex items-center justify-center shadow-xl">
                        <Image src="/ceo.png" width="50" height="50" alt="" className='rounded-full mb-3' />
                        <p className='text-base font-bold'>Nacho Gonzalez</p>
                        <p className='text-[#888585] text-sm my-1'>Co-founder</p>
                        <div className='flex gap-5 text-xl text-[#888585]'>
                            <Link href="https://x.com/"> <FaXTwitter /></Link>
                            <Link href="https://www.linkedin.com/"> <FaLinkedinIn /></Link>
                        </div>
                    </div>

                    {/* 3rd */}
                    <div className="card w-96 md:w-48 h-48 bg-white p-4 flex items-center justify-center shadow-xl">
                        <Image src="/ceo.png" width="50" height="50" alt="" className='rounded-full mb-3' />
                        <p className='text-base font-bold'>Nacho Gonzalez</p>
                        <p className='text-[#888585] text-sm my-1'>Co-founder</p>
                        <div className='flex gap-5 text-xl text-[#888585]'>
                            <Link href="https://x.com/"> <FaXTwitter /></Link>
                            <Link href="https://www.linkedin.com/"> <FaLinkedinIn /></Link>
                        </div>
                    </div>

                    {/* 4th */}
                    <div className="card w-96 md:w-48 h-48 bg-white p-4 flex items-center justify-center shadow-xl">
                        <Image src="/ceo.png" width="50" height="50" alt="" className='rounded-full mb-3' />
                        <p className='text-base font-bold'>Nacho Gonzalez</p>
                        <p className='text-[#888585] text-sm my-1'>Co-founder</p>
                        <div className='flex gap-5 text-xl text-[#888585]'>
                            <Link href="https://x.com/"> <FaXTwitter /></Link>
                            <Link href="https://www.linkedin.com/"> <FaLinkedinIn /></Link>
                        </div>
                    </div>
                </div>

                <div className='py-10'>
                    <p className='bg-[#e6e5e5] p-4 rounded-xl'>Conócenos - Medios/Press Kit: <Link href="emailto:nachog@banktrack.com" className='underline text-blue-500'>nachog@banktrack.com</Link> | <span className='underline text-blue-500'>Press kit</span></p>
                </div>

                <div>
                    <h3 className='text-4xl font-bold '>Socios</h3>
                    <p className='text-2xl my-5 lg:w-[70%] leading-normal'>Socios con años de experiencia como fundadores de empresas tecnológicas y como inversores</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5 '>
                    {/* 1st */}
                    <div className="w-96 md:w-48 ">
                        <p className='text-base font-bold'>Albert Armengol</p>
                        <p className='text-[#888585] text-sm my-1'>Serial entrepreneur & Angel investor</p>
                    </div>
                    {/* 2nd */}
                    <div className="w-96 md:w-48 ">
                        <p className='text-base font-bold'>Albert Armengol</p>
                        <p className='text-[#888585] text-sm my-1'>Serial entrepreneur & Angel investor</p>
                    </div>
                    {/* 3rd */}
                    <div className="w-96 md:w-48 ">
                        <p className='text-base font-bold'>Albert Armengol</p>
                        <p className='text-[#888585] text-sm my-1'>Serial entrepreneur & Angel investor</p>
                    </div>
                    {/* 4th */}
                    <div className="w-96 md:w-48 ">
                        <p className='text-base font-bold'>Albert Armengol</p>
                        <p className='text-[#888585] text-sm my-1'>Serial entrepreneur & Angel investor</p>
                    </div>
                    {/* 1st */}
                    <div className="w-96 md:w-48 ">
                        <p className='text-base font-bold'>Albert Armengol</p>
                        <p className='text-[#888585] text-sm my-1'>Serial entrepreneur & Angel investor</p>
                    </div>
                    {/* 2nd */}
                    <div className="w-96 md:w-48 ">
                        <p className='text-base font-bold'>Albert Armengol</p>
                        <p className='text-[#888585] text-sm my-1'>Serial entrepreneur & Angel investor</p>
                    </div>
                    {/* 3rd */}
                    <div className="w-96 md:w-48 ">
                        <p className='text-base font-bold'>Albert Armengol</p>
                        <p className='text-[#888585] text-sm my-1'>Serial entrepreneur & Angel investor</p>
                    </div>
                    {/* 4th */}
                    <div className="w-96 md:w-48 ">
                        <p className='text-base font-bold'>Albert Armengol</p>
                        <p className='text-[#888585] text-sm my-1'>Serial entrepreneur & Angel investor</p>
                    </div>
                    {/* 1st */}
                    <div className="w-96 md:w-48 ">
                        <p className='text-base font-bold'>Albert Armengol</p>
                        <p className='text-[#888585] text-sm my-1'>Serial entrepreneur & Angel investor</p>
                    </div>
                    {/* 2nd */}
                    <div className="w-96 md:w-48 ">
                        <p className='text-base font-bold'>Albert Armengol</p>
                        <p className='text-[#888585] text-sm my-1'>Serial entrepreneur & Angel investor</p>
                    </div>
                    {/* 3rd */}
                    <div className="w-96 md:w-48 ">
                        <p className='text-base font-bold'>Albert Armengol</p>
                        <p className='text-[#888585] text-sm my-1'>Serial entrepreneur & Angel investor</p>
                    </div>
                    {/* 4th */}
                    <div className="w-96 md:w-48 ">
                        <p className='text-base font-bold'>Albert Armengol</p>
                        <p className='text-[#888585] text-sm my-1'>Serial entrepreneur & Angel investor</p>
                    </div>
                    {/* 1st */}
                    <div className="w-96 md:w-48 ">
                        <p className='text-base font-bold'>Albert Armengol</p>
                        <p className='text-[#888585] text-sm my-1'>Serial entrepreneur & Angel investor</p>
                    </div>
                    {/* 2nd */}
                    <div className="w-96 md:w-48 ">
                        <p className='text-base font-bold'>Albert Armengol</p>
                        <p className='text-[#888585] text-sm my-1'>Serial entrepreneur & Angel investor</p>
                    </div>
                    {/* 3rd */}
                    <div className="w-96 md:w-48 ">
                        <p className='text-base font-bold'>Albert Armengol</p>
                        <p className='text-[#888585] text-sm my-1'>Serial entrepreneur & Angel investor</p>
                    </div>
                    {/* 4th */}
                    <div className="w-96 md:w-48 ">
                        <p className='text-base font-bold'>Albert Armengol</p>
                        <p className='text-[#888585] text-sm my-1'>Serial entrepreneur & Angel investor</p>
                    </div>
                    {/* 1st */}
                    <div className="w-96 md:w-48 ">
                        <p className='text-base font-bold'>Albert Armengol</p>
                        <p className='text-[#888585] text-sm my-1'>Serial entrepreneur & Angel investor</p>
                    </div>
                    {/* 2nd */}
                    <div className="w-96 md:w-48 ">
                        <p className='text-base font-bold'>Albert Armengol</p>
                        <p className='text-[#888585] text-sm my-1'>Serial entrepreneur & Angel investor</p>
                    </div>
                    {/* 3rd */}
                    <div className="w-96 md:w-48 ">
                        <p className='text-base font-bold'>Albert Armengol</p>
                        <p className='text-[#888585] text-sm my-1'>Serial entrepreneur & Angel investor</p>
                    </div>
                    {/* 4th */}
                    <div className="w-96 md:w-48 ">
                        <p className='text-base font-bold'>Albert Armengol</p>
                        <p className='text-[#888585] text-sm my-1'>Serial entrepreneur & Angel investor</p>
                    </div>
                    {/* 1st */}
                    <div className="w-96 md:w-48 ">
                        <p className='text-base font-bold'>Albert Armengol</p>
                        <p className='text-[#888585] text-sm my-1'>Serial entrepreneur & Angel investor</p>
                    </div>
                    {/* 2nd */}
                    <div className="w-96 md:w-48 ">
                        <p className='text-base font-bold'>Albert Armengol</p>
                        <p className='text-[#888585] text-sm my-1'>Serial entrepreneur & Angel investor</p>
                    </div>
                    {/* 3rd */}
                    <div className="w-96 md:w-48 ">
                        <p className='text-base font-bold'>Albert Armengol</p>
                        <p className='text-[#888585] text-sm my-1'>Serial entrepreneur & Angel investor</p>
                    </div>
                    {/* 4th */}
                    <div className="w-96 md:w-48 ">
                        <p className='text-base font-bold'>Albert Armengol</p>
                        <p className='text-[#888585] text-sm my-1'>Serial entrepreneur & Angel investor</p>
                    </div>
                    {/* 1st */}
                    <div className="w-96 md:w-48 ">
                        <p className='text-base font-bold'>Albert Armengol</p>
                        <p className='text-[#888585] text-sm my-1'>Serial entrepreneur & Angel investor</p>
                    </div>
                    {/* 2nd */}
                    <div className="w-96 md:w-48 ">
                        <p className='text-base font-bold'>Albert Armengol</p>
                        <p className='text-[#888585] text-sm my-1'>Serial entrepreneur & Angel investor</p>
                    </div>

                </div>

                <div>
                    <div className='py-20'>
                        <h2 className='text-4xl lg:text-5xl font-bold'>Venture Capital</h2>
                        <div className='flex gap-3 md:gap-10'>
                            <Image src="/venture_1.png" width="200" height="200" alt="" className='w-44 h-24'/>
                            <Image src="/venture_2.png" width="200" height="200" alt="" className='w-44 h-24'/>
                        </div>
                    </div>
                    <div className='pb-20'>
                        <h2 className='text-4xl lg:text-5xl font-bold'>Product Design</h2>
                        <div className='flex gap-3 md:gap-10'>
                            <Image src="/product_1.png" width="200" height="200" alt="" className='w-44 h-24'/>
                            <Image src="/product_2.png" width="200" height="200" alt="" className='w-44 h-24'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;



// -mt-20 md:-mt-72