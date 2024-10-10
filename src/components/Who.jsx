"use client";

import Image from "next/image";
import React, { useState } from "react";

const Who = () => {
    const [activeButton, setActiveButton] = useState(1); // Default active is the first button

    const handleButtonClick = (index) => {
        setActiveButton(index); // Set the active button index
    };

    return (
        <div className="text-center w-full my-20" id="soluciones">
            <div>
                <h3 className="text-3xl md:text-5xl font-bold">¿Para quién es?</h3>
                <p className="text-2xl md:text-xl lg:text-2xl w-full md:w-[80%] lg:w-[50%] mx-auto my-10">
                    Banktrack es ideal para empresas y autónomos que quieren tener más control sobre sus finanzas y optimizar su negocio
                </p>
            </div>

            <div className="flex gap-2 md:gap-5 justify-center md:flex-row">
                {/* Button 1 */}
                <button
                    onClick={() => handleButtonClick(1)}
                    className={`btn ${activeButton === 1 ? "border-[#4021C8] border-2 text-[#4021C8]" : "border-none"} rounded-full text-base px-4 md:px-10 bg-transparent shadow-xl md:btn-lg`}
                >
                    Empresas
                </button>

                {/* Button 2 */}
                <button
                    onClick={() => handleButtonClick(2)}
                    className={`btn ${activeButton === 2 ? "border-[#4021C8] border-2 text-[#4021C8]" : "border-none"} rounded-full text-base px-4 md:px-10 bg-transparent shadow-xl md:btn-lg`}
                >
                    Autónomos
                </button>

                {/* Button 3 */}
                <button
                    onClick={() => handleButtonClick(3)}
                    className={`btn ${activeButton === 3 ? "border-[#4021C8] border-2 text-[#4021C8]" : "border-none"} rounded-full text-base px-4 md:px-10 bg-transparent shadow-xl md:btn-lg`}
                >
                    Particulares
                </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 mt-10 h-full lg:w-[95%] mx-auto">
                <div className="lg:w-[40%]">
                    {/* Show different images based on the active button */}
                    {activeButton === 1 && <Image src="/who_1.png" width="500" height="500" alt="Empresas" className="lg:rounded-r-3xl w-full h-[30rem] md:h-[48rem]" />}
                    {activeButton === 2 && <Image src="/who_2.png" width="500" height="500" alt="Autónomos" className="lg:rounded-r-3xl w-full h-[30rem] md:h-[48rem]" />}
                    {activeButton === 3 && <Image src="/who_3.png" width="500" height="500" alt="Particulares" className="lg:rounded-r-3xl w-full h-[30rem] md:h-[48rem]" />}
                </div>

                <div className="w-[90%] lg:w-[60%] mx-auto h-full grid grid-cols-2 gap-5 mt-8">
                    {/* Show content based on the active button */}
                    {activeButton === 1 && (
                        <>
                            {/* 1st */}
                            <div className='w-full md:w-[20rem] lg:w-[22rem]'>
                                <div className='flex flex-col md:flex-row gap-2 md:items-center '>
                                    <Image src="/who_1_2.png" width="60" height="60" alt="" />
                                    <h3 className='text-lg font-bold text-start'>Panel de control financiero</h3>
                                </div>
                                <p className='text-base text-start my-2'>Vistas personalizadas con la info que elijas para tener el control total de tu tesorería.</p>
                            </div>
                            {/* 2nd */}
                            <div className='w-full md:w-[20rem] lg:w-[22rem]'>
                                <div className='flex flex-col md:flex-row gap-2 md:items-center '>
                                    <Image src="/who_1_3.png" width="60" height="60" alt="" />
                                    <h3 className='text-lg font-bold text-start'>Buscador de transacciones</h3>
                                </div>
                                <p className='text-base text-start my-2'>Busca y encuentra transacciones en segundos, descárgalos en excel o envíalos directamente a tu gestor.</p>
                            </div>

                            {/* 3rd */}
                            <div className='w-full md:w-[20rem] lg:w-[22rem]'>
                                <div className='flex flex-col md:flex-row gap-2 md:items-center '>
                                    <Image src="/who_1_4.png" width="60" height="60" alt="" />
                                    <h3 className='text-lg font-bold text-start'>Gestión de facturas con IA</h3>
                                </div>
                                <p className='text-base text-start my-2'>Envía las facturas directamente a Banktrack y digitalízalos en el momento con inteligencia artificial</p>
                            </div>

                            {/* 4th */}
                            <div className='w-full md:w-[20rem] lg:w-[22rem]'>
                                <div className='flex flex-col md:flex-row gap-2 md:items-center '>
                                    <Image src="/who_1_5.png" width="60" height="60" alt="" />
                                    <h3 className='text-lg font-bold text-start'>Previsiones y Escenarios</h3>
                                </div>
                                <p className='text-base text-start my-2'>Crea reglas para categorizar o modificar automáticamente las transacciones de tus cuentas.</p>
                            </div>

                            {/* 5th */}
                            <div className='w-full md:w-[20rem] lg:w-[22rem]'>
                                <div className='flex flex-col md:flex-row gap-2 md:items-center '>
                                    <Image src="/who_1_6.png" width="60" height="60" alt="" />
                                    <h3 className='text-lg font-bold text-start'>Informes customizables</h3>
                                </div>
                                <p className='text-base text-start my-2'>Crea informes diarios, mensuales o trimestrales y recíbelos por email, WhatsApp, Slack o Telegram.</p>
                            </div>

                            {/* 6th */}
                            <div className='w-full md:w-[20rem] lg:w-[22rem]'>
                                <div className='flex flex-col md:flex-row gap-2 md:items-center '>
                                    <Image src="/who_1_7.png" width="60" height="60" alt="" />
                                    <h3 className='text-lg font-bold text-start'>Alertas inteligentes</h3>
                                </div>
                                <p className='text-base text-start my-2'>Recibe alertas cuando pasa algo en tus cuentas: Ingresos, Gastos, Cargos duplicados, Saldo bajo etc.</p>
                            </div>

                            {/* 7th */}
                            <div className='w-full md:w-[20rem] lg:w-[22rem]'>
                                <div className='flex flex-col md:flex-row gap-2 md:items-center '>
                                    <Image src="/who_1_8.png" width="60" height="60" alt="" />
                                    <h3 className='text-lg font-bold text-start w-full'>
                                        Comparte datos sin dar tus claves</h3>
                                </div>
                                <p className='text-base text-start my-2'>Dale acceso a tu equipo o tu gestor sin tener que compartir las claves de tu banco.</p>
                            </div>

                            {/* 8th */}
                            <div className='w-full md:w-[20rem] lg:w-[22rem]'>
                                <div className='flex flex-col md:flex-row gap-2 md:items-center '>
                                    <Image src="/who_1_1.png" width="60" height="60" alt="" />
                                    <h3 className='text-lg font-bold text-start'>
                                        Reglas automáticas</h3>
                                </div>
                                <p className='text-base text-start my-2'>Crea reglas para categorizar o modificar automáticamente las transacciones de tus cuentas.</p>
                            </div>
                        </>
                    )}

                    {activeButton === 2 && (
                        <>
                            {/* 1st */}
                            <div className='w-full md:w-[20rem] lg:w-[22rem]'>
                                <div className='flex flex-col md:flex-row gap-2 md:items-center '>
                                    <Image src="/who_1_2.png" width="60" height="60" alt="" />
                                    <h3 className='text-lg font-bold text-start'>Panel de control financiero</h3>
                                </div>
                                <p className='text-base text-start my-2'>Vistas personalizadas con la info que elijas para tener el control total de tu tesorería.</p>
                            </div>
                            {/* 2nd */}
                            <div className='w-full md:w-[20rem] lg:w-[22rem]'>
                                <div className='flex flex-col md:flex-row gap-2 md:items-center '>
                                    <Image src="/who_1_3.png" width="60" height="60" alt="" />
                                    <h3 className='text-lg font-bold text-start'>Buscador de transacciones</h3>
                                </div>
                                <p className='text-base text-start my-2'>Busca y encuentra transacciones en segundos, descárgalos en excel o envíalos directamente a tu gestor.</p>
                            </div>

                            {/* 3rd */}
                            <div className='w-full md:w-[20rem] lg:w-[22rem]'>
                                <div className='flex flex-col md:flex-row gap-2 md:items-center '>
                                    <Image src="/who_1_4.png" width="60" height="60" alt="" />
                                    <h3 className='text-lg font-bold text-start'>Gestión de facturas con IA</h3>
                                </div>
                                <p className='text-base text-start my-2'>Envía las facturas directamente a Banktrack y digitalízalos en el momento con inteligencia artificial</p>
                            </div>

                            {/* 4th */}
                            <div className='w-full md:w-[20rem] lg:w-[22rem]'>
                                <div className='flex flex-col md:flex-row gap-2 md:items-center '>
                                    <Image src="/who_1_6.png" width="60" height="60" alt="" />
                                    <h3 className='text-lg font-bold text-start'>Informes customizables</h3>
                                </div>
                                <p className='text-base text-start my-2'>Crea informes diarios, mensuales o trimestrales y recíbelos por email, WhatsApp, Slack o Telegram.</p>
                            </div>

                            {/* 5th */}
                            <div className='w-full md:w-[20rem] lg:w-[22rem]'>
                                <div className='flex flex-col md:flex-row gap-2 md:items-center '>
                                    <Image src="/who_1_7.png" width="60" height="60" alt="" />
                                    <h3 className='text-lg font-bold text-start'>Alertas inteligentes</h3>
                                </div>
                                <p className='text-base text-start my-2'>Recibe alertas cuando pasa algo en tus cuentas: Ingresos, Gastos, Cargos duplicados, Saldo bajo etc.</p>
                            </div>

                            {/* 6th */}
                            <div className='w-full md:w-[20rem] lg:w-[22rem]'>
                                <div className='flex flex-col md:flex-row gap-2 md:items-center '>
                                    <Image src="/who_1_8.png" width="60" height="60" alt="" />
                                    <h3 className='text-lg font-bold text-start w-full'>
                                        Comparte datos sin dar tus claves</h3>
                                </div>
                                <p className='text-base text-start my-2'>Dale acceso a tu equipo o tu gestor sin tener que compartir las claves de tu banco.</p>
                            </div>

                            {/* 7th */}
                            <div className='w-full md:w-[20rem] lg:w-[22rem]'>
                                <div className='flex flex-col md:flex-row gap-2 md:items-center '>
                                    <Image src="/who_1_1.png" width="60" height="60" alt="" />
                                    <h3 className='text-lg font-bold text-start'>
                                        Reglas automáticas</h3>
                                </div>
                                <p className='text-base text-start my-2'>Crea reglas para categorizar o modificar automáticamente las transacciones de tus cuentas.</p>
                            </div>
                        </>
                    )}

                    {activeButton === 3 && (
                        <>
                            {/* 1st */}
                            <div className='w-full md:w-[20rem] lg:w-[22rem]'>
                                <div className='flex flex-col md:flex-row gap-2 md:items-center '>
                                    <Image src="/who_1_2.png" width="60" height="60" alt="" />
                                    <h3 className='text-lg font-bold text-start'>Panel de control financiero</h3>
                                </div>
                                <p className='text-base text-start my-2'>Vistas personalizadas con la info que elijas para tener el control total de tu tesorería.</p>
                            </div>
                            {/* 2nd */}
                            <div className='w-full md:w-[20rem] lg:w-[22rem]'>
                                <div className='flex flex-col md:flex-row gap-2 md:items-center '>
                                    <Image src="/who_1_3.png" width="60" height="60" alt="" />
                                    <h3 className='text-lg font-bold text-start'>Buscador de transacciones</h3>
                                </div>
                                <p className='text-base text-start my-2'>Busca y encuentra transacciones en segundos, descárgalos en excel o envíalos directamente a tu gestor.</p>
                            </div>

                            {/* 5th */}
                            <div className='w-full md:w-[20rem] lg:w-[22rem]'>
                                <div className='flex flex-col md:flex-row gap-2 md:items-center '>
                                    <Image src="/who_1_6.png" width="60" height="60" alt="" />
                                    <h3 className='text-lg font-bold text-start'>Informes customizables</h3>
                                </div>
                                <p className='text-base text-start my-2'>Crea informes diarios, mensuales o trimestrales y recíbelos por email, WhatsApp, Slack o Telegram.</p>
                            </div>

                            {/* 6th */}
                            <div className='w-full md:w-[20rem] lg:w-[22rem]'>
                                <div className='flex flex-col md:flex-row gap-2 md:items-center '>
                                    <Image src="/who_1_7.png" width="60" height="60" alt="" />
                                    <h3 className='text-lg font-bold text-start'>Alertas inteligentes</h3>
                                </div>
                                <p className='text-base text-start my-2'>Recibe alertas cuando pasa algo en tus cuentas: Ingresos, Gastos, Cargos duplicados, Saldo bajo etc.</p>
                            </div>

                            {/* 7th */}
                            <div className='w-full md:w-[20rem] lg:w-[22rem]'>
                                <div className='flex flex-col md:flex-row gap-2 md:items-center '>
                                    <Image src="/who_1_8.png" width="60" height="60" alt="" />
                                    <h3 className='text-lg font-bold text-start w-full'>
                                        Comparte datos sin dar tus claves</h3>
                                </div>
                                <p className='text-base text-start my-2'>Dale acceso a tu equipo o tu gestor sin tener que compartir las claves de tu banco.</p>
                            </div>

                            {/* 8th */}
                            <div className='w-full md:w-[20rem] lg:w-[22rem]'>
                                <div className='flex flex-col md:flex-row gap-2 md:items-center '>
                                    <Image src="/who_1_1.png" width="60" height="60" alt="" />
                                    <h3 className='text-lg font-bold text-start'>
                                        Reglas automáticas</h3>
                                </div>
                                <p className='text-base text-start my-2'>Crea reglas para categorizar o modificar automáticamente las transacciones de tus cuentas.</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Who;
