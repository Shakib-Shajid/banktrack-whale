import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import { TiInfinity } from 'react-icons/ti';

const Personal = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[90%] lg:w-[55%] mx-auto gap-5">
                {/* 1st */}
                <div className="card bg-base-100 w-96 mx-auto md:w-[19rem] lg:w-96 shadow-xl pt-5">
                    <div className="p-6 text-start border-b-2">
                        <h2 className="text-2xl font-bold text-[#777777] ">Free</h2>
                        <p className="text-gray-500 mb-4">Si solo tienes un banco a conectar</p>

                        <div className="mt-9 text-xs my-4">
                            <p className='font-bold text-lg'>Gratis</p>
                        </div>
                    </div>

                    <div className="card-body space-y-3">
                        {/* 1st */}
                        <div className='flex gap-2'>
                            <Image src="/price_1.png" width="30" height="30" alt="" className='h-10 w-10' />
                            <div className='text-start text-sm'>
                                <h4 className='font-bold'>Conecta tus bancos</h4>
                                <p className='text-[#777777]'>Conecta hasta <span className='font-bold underline text-black decoration-2 decoration-orange-300'>10 bancos</span> de empresa</p>
                            </div>
                        </div>

                        {/* 2nd */}
                        <div className='flex gap-2'>
                            <Image src="/price_2.png" width="30" height="30" alt="" className='h-10 w-10' />
                            <div className='text-start text-sm'>
                                <h4 className='font-bold'>Panel de control de tesorería</h4>
                                <p className='text-[#777777]'>Visualiza tus finanzas en tiempo real</p>
                            </div>
                        </div>

                        {/* 3rd */}
                        <div className='flex gap-2'>
                            <Image src="/price_3.png" width="30" height="30" alt="" className='h-10 w-10' />
                            <div className='text-start text-sm'>
                                <h4 className='font-bold'>Alertas e Informes</h4>
                                <p className='text-[#777777]'>Tus finanzas por WhatsApp, email y más...</p>
                            </div>
                        </div>

                        {/* 4th */}
                        <div className='flex gap-2 text-[#888585]'>
                            <Image src="/price_4.png" width="30" height="30" alt="" className='h-10 w-10 filter grayscale' />
                            <div className='text-start text-sm'>
                                <h4 className='font-bold'>Categorización Automática</h4>
                                <p className='text-[#777777]'>Clasifica tus movimientos con reglas automáticas</p>
                            </div>
                        </div>

                        {/* 5th */}
                        <div className='flex gap-2 text-[#888585]'>
                            <Image src="/price_5.png" width="30" height="30" alt="" className='h-10 w-10 filter grayscale' />
                            <div className='text-start text-sm'>
                                <h4 className='font-bold'>Multiusuario</h4>
                                <p className='text-[#777777]'>Incluye 2 usuarios</p>
                            </div>
                        </div>

                        {/* 6th */}
                        <div className='flex gap-2 text-[#888585]'>
                            <Image src="/price_6.png" width="30" height="30" alt="" className='h-10 w-10 filter grayscale' />
                            <div className='text-start text-sm'>
                                <h4 className='font-bold'>Conciliación de Facturas con IA</h4>
                                <p className='text-[#777777]'>Escanea hasta 1000 facturas cada trimestre</p>
                            </div>
                        </div>

                        {/* 7th */}
                        <div className='flex gap-2 text-[#888585]'>
                            <Image src="/price_7.png" width="30" height="30" alt="" className='h-10 w-10 filter grayscale' />
                            <div className='text-start text-sm'>
                                <h4 className='font-bold'>Gestiona varios negocios y entidades</h4>
                                <p className='text-[#777777]'>Crea hasta 3 espacios de trabajo</p>
                            </div>
                        </div>

                        {/* 8th */}
                        <div className='flex gap-2 text-[#888585]'>
                            <Image src="/price_8.png" width="30" height="30" alt="" className='h-10 w-10 filter grayscale' />
                            <div className='text-start text-sm'>
                                <h4 className='font-bold'>Previsiones</h4>
                                <p className='text-[#777777]'>Escenarios y previsiones ilimitadas</p>
                            </div>
                        </div>

                        {/* 9th */}
                        <div className='flex gap-2 text-[#888585]'>
                            <Image src="/price_9.png" width="30" height="30" alt="" className='h-10 w-10 filter grayscale' />
                            <div className='text-start text-sm'>
                                <h4 className='font-bold'>Integraciones adicionales</h4>
                                <p className='text-[#777777]'>Conecta con más servicios externos</p>
                            </div>
                        </div>

                        {/* 10th */}
                        <div className='flex gap-2 text-[#888585]'>
                            <Image src="/price_10.png" width="30" height="30" alt="" className='h-10 w-10 filter grayscale' />
                            <div className='text-start text-sm'>
                                <h4 className='font-bold'>Soporte Premium</h4>
                                <p className='text-[#777777]'>Agente de soporte dedicado a ti</p>
                            </div>
                        </div>
                        <Link href="/registrarse">
                            <div className="card-actions justify-end pt-5">
                                <button className="btn bg-[#4021C8] text-white w-full rounded-full btn-lg">Regístrate</button>
                            </div>
                        </Link>

                        <p className='text-[#777777] text-sm text-center'>Crea tu cuenta en 2 minutos. <br /> Gratis para siempre.</p>
                    </div>
                </div>


                {/* 2nd */}
                <div className="card bg-base-100 w-96 mx-auto md:w-[19rem] lg:w-96 shadow-xl pt-5">
                    <div className="p-6 text-start border-b-2">
                        <h2 className="text-2xl font-bold text-orange-500 ">Personal</h2>
                        <p className="text-gray-500 mb-4">Para tus finanzas personales</p>
                        <div className="flex items-start space-x-1">
                            <span className="text-xl font-normal">€</span>
                            <span className="text-4xl font-bold">5</span>
                            <span className="text-xl font-normal">/mes</span>
                        </div>
                        <div className="mt-2 text-xs">
                            <span className="line-through text-gray-400">5,90 €</span>
                            <span><span className="font-semibold"> Ahorra 12€ </span> con el plan anual</span>
                        </div>
                    </div>
                    <div className="card-body space-y-3">
                        {/* 1st */}
                        <div className='flex gap-2'>
                            <Image src="/price_1.png" width="30" height="30" alt="" className='h-10 w-10' />
                            <div className='text-start text-sm'>
                                <h4 className='font-bold'>Conecta tus bancos</h4>
                                <p className='text-[#777777]'>Conecta hasta <span className='font-bold underline text-black decoration-2 decoration-orange-300'>10 bancos</span> de empresa</p>
                            </div>
                        </div>

                        {/* 2nd */}
                        <div className='flex gap-2'>
                            <Image src="/price_2.png" width="30" height="30" alt="" className='h-10 w-10' />
                            <div className='text-start text-sm'>
                                <h4 className='font-bold'>Panel de control de tesorería</h4>
                                <p className='text-[#777777]'>Visualiza tus finanzas en tiempo real</p>
                            </div>
                        </div>

                        {/* 3rd */}
                        <div className='flex gap-2'>
                            <Image src="/price_3.png" width="30" height="30" alt="" className='h-10 w-10' />
                            <div className='text-start text-sm'>
                                <h4 className='font-bold'>Alertas e Informes</h4>
                                <p className='text-[#777777]'>Tus finanzas por WhatsApp, email y más...</p>
                            </div>
                        </div>

                        {/* 4th */}
                        <div className='flex gap-2'>
                            <Image src="/price_4.png" width="30" height="30" alt="" className='h-10 w-10' />
                            <div className='text-start text-sm'>
                                <h4 className='font-bold'>Categorización Automática</h4>
                                <p className='text-[#777777]'>Clasifica tus movimientos con reglas automáticas</p>
                            </div>
                        </div>

                        {/* 5th */}
                        <div className='flex gap-2'>
                            <Image src="/price_5.png" width="30" height="30" alt="" className='h-10 w-10' />
                            <div className='text-start text-sm'>
                                <h4 className='font-bold'>Multiusuario</h4>
                                <p className='text-[#777777]'>Incluye <span className='font-bold underline text-black decoration-2 decoration-orange-300'> 2 usuarios</span></p>
                            </div>
                        </div>

                        {/* 6th */}
                        <div className='flex gap-2 text-[#888585]'>
                            <Image src="/price_6.png" width="30" height="30" alt="" className='h-10 w-10 filter grayscale' />
                            <div className='text-start text-sm'>
                                <h4 className='font-bold'>Conciliación de Facturas con IA</h4>
                                <p className='text-[#777777]'>Escanea hasta <span className='font-bold underline text-black decoration-2 decoration-orange-300'> 1000 facturas </span>cada trimestre</p>
                            </div>
                        </div>

                        {/* 7th */}
                        <div className='flex gap-2 text-[#888585]'>
                            <Image src="/price_7.png" width="30" height="30" alt="" className='h-10 w-10 filter grayscale' />
                            <div className='text-start text-sm'>
                                <h4 className='font-bold'>Gestiona varios negocios y entidades</h4>
                                <p className='text-[#777777]'>Crea hasta <span className='font-bold underline text-black decoration-2 decoration-orange-300'> 3 espacios de trabajo</span></p>
                            </div>
                        </div>

                        {/* 8th */}
                        <div className='flex gap-2 text-[#888585]'>
                            <Image src="/price_8.png" width="30" height="30" alt="" className='h-10 w-10 filter grayscale' />
                            <div className='text-start text-sm'>
                                <h4 className='font-bold'>Previsiones</h4>
                                <p className='text-[#777777]'>Escenarios y previsiones ilimitadas</p>
                            </div>
                        </div>

                        {/* 9th */}
                        <div className='flex gap-2 text-[#888585]'>
                            <Image src="/price_9.png" width="30" height="30" alt="" className='h-10 w-10 filter grayscale' />
                            <div className='text-start text-sm'>
                                <h4 className='font-bold'>Integraciones adicionales</h4>
                                <p className='text-[#777777]'>Conecta con más servicios externos</p>
                            </div>
                        </div>

                        {/* 10th */}
                        <div className='flex gap-2 text-[#888585]'>
                            <Image src="/price_10.png" width="30" height="30" alt="" className='h-10 w-10 filter grayscale ' />
                            <div className='text-start text-sm'>
                                <h4 className='font-bold'>Soporte Premium</h4>
                                <p className='text-[#777777]'>Agente de soporte dedicado a ti</p>
                            </div>
                        </div>
                        <Link href="/registrarse">
                            <div className="card-actions justify-end pt-5 pb-2">
                                <button className="btn bg-[#4021C8] text-white w-full rounded-full btn-lg">Empieza gratis</button>
                            </div>
                        </Link>

                        <p className='text-[#777777] text-sm'>Pruébalo 14 días. Sin tarjeta de crédito.</p>
                    </div>
                </div>


            </div>

            {/* table */}
            <div className="overflow-x-auto rounded-xl w-[80%] mx-auto my-20">
                <table className="table bg-white">
                    {/* head */}
                    <thead>
                        <tr className="text-center text-xl">
                            <th className="text-black py-5 bg-none">
                                Comparación <br />
                                <span className="text-sm text-[#7C7C7C]">Todos los detalles comparados</span>
                            </th>
                            <th className="text-gray-400 text-center py-5">Free</th>
                            <th className="text-orange-500 py-5">Personal <br />
                                <span className="text-sm text-[#7C7C7C]"> 5€/mes (Pago anual)</span>
                            </th>
                        </tr>
                    </thead>
                    {/* <p className="bg-gray-300">Conexiones bancarias</p> */}
                    <tbody>
                        <tr>
                            <td className="font-bold bg-gray-300 text-gray-400 text-[10px] uppercase">Conexiones Bancarias</td>
                            <td className="bg-gray-300 text-gray-400 text-[10px]"></td>
                            <td className="bg-gray-300 text-gray-400 text-[10px]"></td>
                        </tr>
                        {/* row 1 */}
                        <tr className="border-2">
                            <td className="border-2 font-bold">Bancos sincronizados</td>
                            <td className="text-center border-2">1</td>
                            <td className="text-center border-2">5</td>
                        </tr>
                        {/* row 2 */}
                        <tr className="border-2">
                            <td className="border-2 font-bold">Uso empresarial</td>
                            <td className="border-2"><RxCross2 className="mx-auto font-bold text-xl text-gray-300" /></td>
                            <td className="border-2"><RxCross2 className="mx-auto font-bold text-xl text-gray-300" /></td>
                        </tr>
                        <tr>
                            <td className="font-bold bg-gray-300 text-gray-400 text-[10px] uppercase">Categorización</td>
                            <td className="bg-gray-300 text-gray-400 text-[10px]"></td>
                            <td className="bg-gray-300 text-gray-400 text-[10px]"></td>
                        </tr>
                        {/* row 3 */}
                        <tr className="border-2">
                            <td className="border-2 font-bold">Sugerencias de categorización</td>
                            <td className="border-2"><IoMdCheckmark className="mx-auto font-bold text-xl" /></td>
                            <td className="border-2"><IoMdCheckmark className="mx-auto font-bold text-xl" /></td>
                        </tr>
                        {/* row 4 */}
                        <tr className="border-2">
                            <td className="border-2 font-bold">Reglas automáticas</td>
                            <td className="border-2"><RxCross2 className="mx-auto font-bold text-xl text-gray-300" /></td>
                            <td className="border-2"><TiInfinity className="mx-auto font-bold text-xl" /></td>
                        </tr>

                        <tr>
                            <td className="font-bold bg-gray-300 text-gray-400 text-[10px] uppercase">Buscador, exportación e importación</td>
                            <td className="bg-gray-300 text-gray-400 text-[10px]"></td>
                            <td className="bg-gray-300 text-gray-400 text-[10px]"></td>
                        </tr>
                        {/* row 5 */}
                        <tr className="border-2">
                            <td className="border-2 font-bold">Historial de transacciones</td>
                            <td className="border-2">6 meses</td>
                            <td className="border-2"><TiInfinity className="mx-auto font-bold text-xl" /></td>
                        </tr>
                        {/* row 6 */}
                        <tr className="border-2">
                            <td className="border-2 font-bold">Exportación de transacciones</td>
                            <td className="text-center border-2">PDF</td>
                            <td className="text-center border-2">PDF, CSV y JSON</td>
                        </tr>
                        {/* row 7 */}
                        <tr className="border-2">
                            <td className="border-2 font-bold">Importación de transacciones</td>
                            <td className="text-center border-2">Autoservicio</td>
                            <td className="text-center border-2">Autoservicio</td>
                        </tr>
                        <tr>
                            <td className="font-bold bg-gray-300 text-gray-400 text-[10px] uppercase">Control de tesorería</td>
                            <td className="bg-gray-300 text-gray-400 text-[10px]"></td>
                            <td className="bg-gray-300 text-gray-400 text-[10px]"></td>
                        </tr>
                        {/* row 8 */}
                        <tr className="border-2">
                            <td className="border-2 font-bold">Dashboards, Informes y Alertas</td>
                            <td className="border-2"><TiInfinity className="mx-auto font-bold text-xl" /></td>
                            <td className="border-2"><TiInfinity className="mx-auto font-bold text-xl" /></td>
                        </tr>
                        {/* row 9 */}
                        <tr className="border-2">
                            <td className="border-2 font-bold">Canales Disponibles</td>
                            <td className="text-center border-2">Email y Telegram</td>
                            <td className="text-center border-2">WhatsApp, Email, Telegram y SMS</td>
                        </tr>
                        {/* row 10 */}
                        <tr className="border-2">
                            <td className="border-2 font-bold">Previsiones</td>
                            <td className="border-2"><RxCross2 className="mx-auto font-bold text-xl text-gray-300" /></td>
                            <td className="border-2"><IoMdCheckmark className="mx-auto font-bold text-xl" /></td>
                        </tr>
                        <tr>
                            <td className="font-bold bg-gray-300 text-gray-400 text-[10px] uppercase">Facturación y conciliación</td>
                            <td className="bg-gray-300 text-gray-400 text-[10px]"></td>
                            <td className="bg-gray-300 text-gray-400 text-[10px]"></td>
                        </tr>
                        {/* row 11 */}
                        <tr className="border-2">
                            <td className="border-2 font-bold">Conciliación de Facturas</td>
                            <td className="border-2"><RxCross2 className="mx-auto font-bold text-xl text-gray-300" /></td>
                            <td className="border-2"><RxCross2 className="mx-auto font-bold text-xl text-gray-300" /></td>
                        </tr>
                        {/* row 12 */}
                        <tr className="border-2">
                            <td className="border-2 font-bold">Gestión de Contactos</td>
                            <td className="border-2"><RxCross2 className="mx-auto font-bold text-xl text-gray-300" /></td>
                            <td className="border-2"><RxCross2 className="mx-auto font-bold text-xl text-gray-300" /></td>
                        </tr>
                        {/* row 13 */}
                        <tr className="border-2">
                            <td className="border-2 font-bold">Facturas Conciliadas / Trimestre</td>
                            <td className="border-2"><RxCross2 className="mx-auto font-bold text-xl text-gray-300" /></td>
                            <td className="text-center"><RxCross2 className="mx-auto font-bold text-xl text-gray-300" /></td>
                        </tr>
                        <tr>
                            <td className="font-bold bg-gray-300 text-gray-400 text-[10px] uppercase">Multi-empresa / Multi-entidad</td>
                            <td className="bg-gray-300 text-gray-400 text-[10px]"></td>
                            <td className="bg-gray-300 text-gray-400 text-[10px]"></td>
                        </tr>
                        {/* row 14 */}
                        <tr className="border-2">
                            <td className="border-2 font-bold">Usuarios</td>
                            <td className="text-center border-2">1</td>
                            <td className="text-center border-2">2</td>
                        </tr>
                        {/* row 15 */}
                        <tr className="border-2">
                            <td className="border-2 font-bold">Espacios de Trabajo</td>
                            <td className="text-center border-2">1</td>
                            <td className="text-center border-2">1</td>
                        </tr>
                        <tr>
                            <td className="font-bold bg-gray-300 text-gray-400 text-[10px] uppercase">Soporte</td>
                            <td className="bg-gray-300 text-gray-400 text-[10px]"></td>
                            <td className="bg-gray-300 text-gray-400 text-[10px]"></td>
                        </tr>
                        {/* row 16 */}
                        <tr className="border-2">
                            <td className="border-2 font-bold">Account Manager</td>
                            <td className="border-2"><RxCross2 className="mx-auto font-bold text-xl text-gray-300" /></td>
                            <td className="border-2"><RxCross2 className="mx-auto font-bold text-xl text-gray-300" /></td>
                        </tr>
                        {/* row 17 */}
                        <tr className="border-2">
                            <td className="border-2 font-bold">Puesto en marcha asistido</td>
                            <td className="text-center"><RxCross2 className="mx-auto font-bold text-xl text-gray-300" /></td>
                            <td className="border-2"><RxCross2 className="mx-auto font-bold text-xl text-gray-300" /></td>
                        </tr>
                        {/* row 18 */}
                        <tr className="border-2">
                            <td className="border-2 font-bold">Métodos de Contacto</td>
                            <td className="text-center border-2">Email</td>
                            <td className="text-center border-2">Chat o Email, WhatsApp</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Personal;