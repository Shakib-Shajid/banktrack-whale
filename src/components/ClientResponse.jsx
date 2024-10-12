
"use client"
// import Swiper JS
// import Swiper styles
import 'swiper/css';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const ClientResponse = () => {
    return (
        <div className="my-20 font-montserrat" data-aos="zoom-in">
            <div className="flex flex-col justify-center text-center">
                <h2 className="text-3xl lg:text-5xl font-bold md:w-[80%] lg:w-full mx-auto">“Me da una visión clara de todos mis <br className="hidden lg:grid" /> ingresos y gastos”</h2>
                <p className="text-xl lg:text-2xl font-bold mt-5 mb-1">Kike</p>
                <p className="text-[#969494]">CEO de KS Asesores</p>
            </div>

            <div className="w-full md:w-[90%] mx-auto hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 my-10">
                {/* 1st */}
                <div className="w-4/6 md:w-72 text-center mx-auto">
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                    </div>
                    <h2 className="text-xl md:text-lg font-bold">“Muy fácil e intuitiva a la vez que potente, totalmente recomendable”</h2>
                    <p className="text-[#969494]">Pablo</p>
                </div>

                {/* 2nd */}
                <div className="w-4/6 md:w-72 text-center mx-auto">
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                    </div>
                    <h2 className="text-xl md:text-lg font-bold">“Me ayuda mucho en la gestión de mi tesorería y las cuentas de nuestro grupo empresarial”</h2>
                    <p className="text-[#969494]">BoxBar</p>
                </div>

                {/* 3rd */}
                <div className="w-4/6 md:w-72 text-center mx-auto">
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                    </div>
                    <h2 className="text-xl md:text-lg font-bold">“Aplicación que cumple con todo lo esperado. El servicio de atención al cliente es top”</h2>
                    <p className="text-[#969494]">Jose B.</p>
                </div>

                {/* 4th */}
                <div className="w-4/6 md:w-72 text-center mx-auto">
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                    </div>
                    <h2 className="text-xl md:text-lg font-bold">“Recibir respuesta y solución rápida me parece de un nivel superlativo”</h2>
                    <p className="text-[#969494]">Fernando C.</p>
                </div>

                {/* 5th */}
                <div className="w-4/6 md:w-72 text-center mx-auto">
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                    </div>
                    <h2 className="text-xl md:text-lg font-bold">“La categorización automática hace que el proceso sea ágil, fácil y agradable”</h2>
                    <p className="text-[#969494]">Víctor J.</p>
                </div>

                {/* 6th */}
                <div className="w-4/6 md:w-72 text-center mx-auto">
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                    </div>
                    <h2 className="text-xl md:text-lg font-bold">“El proceso manual se ha convertido en automático al 100%, una increíble mejora”</h2>
                    <p className="text-[#969494]">Íñigo V.</p>
                </div>

                {/* 7th */}
                <div className="w-4/6 md:w-72 text-center mx-auto">
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                    </div>
                    <h2 className="text-xl md:text-lg font-bold">“Gran aplicación, mejor servicio. Totalmente recomendable”</h2>
                    <p className="text-[#969494]">Oscar</p>
                </div>

                {/* 8th */}
                <div className="w-4/6 md:w-72 text-center mx-auto">
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                    </div>
                    <h2 className="text-xl md:text-lg font-bold">“Lo utilizo todos los días para mis finanzas y ya no he vuelto a entrar a mis bancos”</h2>
                    <p className="text-[#969494]">Antonio</p>
                </div>

            </div>

            {/* for mobile */}

            <div className='block md:hidden mt-10'>
                <Swiper
                    slidesPerView={1.5} // Show 1 full card and half of the next on mobile
                    centeredSlides={true}
                    spaceBetween={30}
                    grabCursor={true}
                    pagination={{
                        el: '.custom-pagination', // Custom pagination
                        clickable: true,
                    }}
                    breakpoints={{
                        768: { // For tablets and desktop (width >= 768px)
                            slidesPerView: 1, // Only 1 card
                            centeredSlides: false, // Disable centering for larger screens
                        },
                        1024: { // Desktop (width >= 1024px)
                            slidesPerView: 1, // Still only 1 card
                            centeredSlides: false,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {/* 1st */}
                    <SwiperSlide>
                        <div className="w-full md:w-72 text-center mx-auto">
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                            </div>
                            <h2 className="text-xl md:text-lg font-bold">“Muy fácil e intuitiva a la vez que potente, totalmente recomendable”</h2>
                            <p className="text-[#969494]">Pablo</p>
                        </div>
                    </SwiperSlide>

                    {/* 2nd */}
                    <SwiperSlide>
                        <div className="w-full text-center mx-auto">
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                            </div>
                            <h2 className="text-xl md:text-lg font-bold">“Me ayuda mucho en la gestión de mi tesorería y las cuentas de nuestro grupo empresarial”</h2>
                            <p className="text-[#969494]">BoxBar</p>
                        </div>
                    </SwiperSlide>

                    {/* 3rd */}
                    <SwiperSlide>
                        <div className="w-full text-center mx-auto">
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                            </div>
                            <h2 className="text-xl md:text-lg font-bold">“Aplicación que cumple con todo lo esperado. El servicio de atención al cliente es top”</h2>
                            <p className="text-[#969494]">Jose B.</p>
                        </div>
                    </SwiperSlide>

                    {/* 4th */}
                    <SwiperSlide>
                        <div className="w-full text-center mx-auto">
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                            </div>

                            <h2 className="text-xl md:text-lg font-bold">“Recibir respuesta y solución rápida me parece de un nivel superlativo”</h2>
                            <p className="text-[#969494]">Fernando C.</p>
                        </div>
                    </SwiperSlide>

                    {/* 5th */}
                    <SwiperSlide>
                        <div className="w-full text-center mx-auto">
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                            </div>
                            <h2 className="text-xl md:text-lg font-bold">“La categorización automática hace que el proceso sea ágil, fácil y agradable”</h2>
                            <p className="text-[#969494]">Víctor J.</p>
                        </div>
                    </SwiperSlide>

                    {/* 6th */}
                    <SwiperSlide>
                        <div className="w-full text-center mx-auto">
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                            </div>
                            <h2 className="text-xl md:text-lg font-bold">“El proceso manual se ha convertido en automático al 100%, una increíble mejora”</h2>
                            <p className="text-[#969494]">Íñigo V.</p>
                        </div>
                    </SwiperSlide>

                    {/* 7th */}
                    <SwiperSlide>
                        <div className="w-full text-center mx-auto">
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                            </div>
                            <h2 className="text-xl md:text-lg font-bold">“Gran aplicación, mejor servicio. Totalmente recomendable”</h2>
                            <p className="text-[#969494]">Oscar</p>
                        </div>
                    </SwiperSlide>

                    {/* 8th */}
                    <SwiperSlide>
                        <div className="w-full text-center mx-auto">
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                            </div>
                            <h2 className="text-xl md:text-lg font-bold">“Lo utilizo todos los días para mis finanzas y ya no he vuelto a entrar a mis bancos”</h2>
                            <p className="text-[#969494]">Antonio</p>
                        </div>
                    </SwiperSlide>

                </Swiper>

                {/* Custom pagination element below the cards */}
                <div className="custom-pagination flex justify-center mt-4 space-x-2">
                    {/* Tailwind will be applied automatically by Swiper.js for bullets */}
                    <span className="swiper-pagination-bullet bg-gray-300 w-4 h-4 rounded-full cursor-pointer"></span>
                    <span className="swiper-pagination-bullet swiper-pagination-bullet-active bg-black w-4 h-4 rounded-full cursor-pointer"></span>
                </div>

            </div>
        </div>

    )
};

export default ClientResponse;





